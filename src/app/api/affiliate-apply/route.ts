import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { isAdminAuthorized } from '@/lib/adminAuth';
import { rateLimit } from '@/lib/rateLimit';

const STORE_PATH = path.join(process.cwd(), 'data', 'affiliate-applications.json');

// ---------- helpers ----------

async function ensureStore() {
    const dir = path.join(process.cwd(), 'data');
    try { await fs.mkdir(dir, { recursive: true }); } catch { }
    try { await fs.access(STORE_PATH); } catch {
        await fs.writeFile(STORE_PATH, JSON.stringify([]));
    }
}

async function readApplications() {
    await ensureStore();
    const raw = await fs.readFile(STORE_PATH, 'utf-8');
    try { return JSON.parse(raw); } catch { return []; }
}

async function writeApplications(data: any[]) {
    await ensureStore();
    await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2));
}

async function sendEmailViaResend({
    to,
    subject,
    html,
}: {
    to: string[];
    subject: string;
    html: string;
}) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return;

    await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: `NativPost Affiliates <info@nativpost.com>`,
            to,
            subject,
            html,
        }),
    });
}

function getIP(req: NextRequest) {
    return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function validateApplication(body: any) {
    if (!body.fullName || !body.email || !body.whatsapp || !body.motivation) {
        return 'Required fields are missing.';
    }
    if (body.motivation.length < 20) {
        return 'Motivation is too short.';
    }
    return null;
}

// ---------- POST ----------

export async function POST(req: NextRequest) {
    try {
        const ip = getIP(req);
        if (!rateLimit(ip)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await req.json();
        const error = validateApplication(body);

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        const {
            fullName, email, whatsapp, role, platforms,
            followers, companies, videoUrl, motivation
        } = body;

        const application = {
            id: `af_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            submittedAt: new Date().toISOString(),
            status: 'pending',
            ...body,
        };

        const all = await readApplications();
        all.unshift(application);
        await writeApplications(all);

        const notifyEmails = [
            process.env.AFFILIATE_NOTIFY_EMAIL_1 || 'info@nativpost.com',
            process.env.AFFILIATE_NOTIFY_EMAIL_2 || 'wilsonibekason@gmail.com',
        ].filter(Boolean);

        const adminUrl = process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/affiliate-admin`
            : 'https://nativpost.com/affiliate-admin';

        // ✅ ADMIN EMAIL TEMPLATE
        const emailHtml = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
        <h2 style="color:#1a1a1c;font-size:20px;font-weight:600;margin:0 0 20px;">New affiliate application</h2>
        <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;width:160px;">Name</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${fullName}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">Email</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${email}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">WhatsApp</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${whatsapp}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">Role</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${role || 'Not specified'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">Platforms</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${platforms || 'Not specified'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">Followers</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${followers || 'Not specified'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">Companies</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${companies || 'None listed'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;">Video</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;">${videoUrl ? `<a href="${videoUrl}">${videoUrl}</a>` : 'Not provided'}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:600;">Motivation</td><td style="padding:12px 16px;">${motivation}</td></tr>
        </table>
        <div style="margin-top:20px;text-align:center;">
          <a href="${adminUrl}" style="background:#864ffe;color:white;padding:12px 28px;border-radius:999px;text-decoration:none;">Review in admin dashboard</a>
        </div>
        <p style="font-size:12px;text-align:center;margin-top:16px;">Application ID: ${application.id}</p>
      </div>
    `;

        sendEmailViaResend({
            to: notifyEmails,
            subject: `New affiliate application from ${fullName}`,
            html: emailHtml,
        }).catch(() => { });

        return NextResponse.json({ success: true, id: application.id });

    } catch (err) {
        console.error('[POST]', err);
        return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
    }
}

// ---------- PATCH (approval email added back) ----------

export async function PATCH(req: NextRequest) {
    const ip = getIP(req);
    if (!rateLimit(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const secret = req.headers.get('x-admin-secret');
    if (!isAdminAuthorized(secret)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, status } = await req.json();

    const all = await readApplications();
    const idx = all.findIndex((a: any) => a.id === id);

    if (idx === -1) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    all[idx].status = status;
    all[idx].reviewedAt = new Date().toISOString();
    await writeApplications(all);

    if (status === 'approved') {
        const applicant = all[idx];

        const approvalHtml = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
        <h2>Welcome to NativPost affiliate program</h2>
        <p>Hi ${applicant.fullName}, you’ve been approved.</p>
        <div style="text-align:center;margin:20px 0;">
          <a href="https://nativpost.affonso.io" style="background:#864ffe;color:white;padding:12px 28px;border-radius:999px;text-decoration:none;">Access dashboard</a>
        </div>
      </div>
    `;

        sendEmailViaResend({
            to: [applicant.email],
            subject: 'Affiliate approved',
            html: approvalHtml,
        }).catch(() => { });
    }

    return NextResponse.json({ success: true, application: all[idx] });
}