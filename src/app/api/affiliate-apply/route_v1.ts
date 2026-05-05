import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const STORE_PATH = path.join(process.cwd(), 'data', 'affiliate-applications.json');
const ADMIN_SECRET = process.env.AFFILIATE_ADMIN_SECRET || '';

// Ensure data directory and file exist
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

async function writeApplications(data: unknown[]) {
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

// POST — submit a new application
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            fullName, email, whatsapp, role, platforms, followers,
            companies, videoUrl, motivation, socialLinks,
        } = body;

        // Basic validation
        if (!fullName || !email || !whatsapp || !motivation) {
            return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
        }

        const application = {
            id: `af_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            submittedAt: new Date().toISOString(),
            status: 'pending',
            fullName, email, whatsapp, role, platforms,
            followers, companies, videoUrl, motivation, socialLinks,
        };

        // Save to local store
        const all = await readApplications();
        all.unshift(application);
        await writeApplications(all);

        // Notify via email (non-blocking)
        const notifyEmails = [
            process.env.AFFILIATE_NOTIFY_EMAIL_1 || 'info@nativpost.com',
            process.env.AFFILIATE_NOTIFY_EMAIL_2 || 'wilsonibekason@gmail.com',
        ].filter(Boolean);

        const adminUrl = process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/affiliate-admin`
            : 'https://nativpost.com/affiliate-admin';

        const emailHtml = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
        <h2 style="color:#1a1a1c;font-size:20px;font-weight:600;margin:0 0 20px;">New affiliate application</h2>
        <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;width:160px;">Name</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${fullName}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">Email</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${email}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">WhatsApp</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${whatsapp}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">Role</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${role || 'Not specified'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">Platforms</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${platforms || 'Not specified'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">Followers</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${followers || 'Not specified'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">Companies</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${companies || 'None listed'}</td></tr>
          <tr><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;font-weight:600;color:#1a1a1c;">Video</td><td style="padding:12px 16px;border-bottom:1px solid #e3e7ed;color:#555;">${videoUrl ? `<a href="${videoUrl}">${videoUrl}</a>` : 'Not provided'}</td></tr>
          <tr><td style="padding:12px 16px;font-weight:600;color:#1a1a1c;vertical-align:top;">Motivation</td><td style="padding:12px 16px;color:#555;">${motivation}</td></tr>
        </table>
        <div style="margin-top:20px;text-align:center;">
          <a href="${adminUrl}" style="display:inline-block;background:#864ffe;color:white;padding:12px 28px;border-radius:999px;font-weight:600;font-size:14px;text-decoration:none;">Review in admin dashboard</a>
        </div>
        <p style="color:#aaa;font-size:12px;text-align:center;margin-top:16px;">Application ID: ${application.id}</p>
      </div>
    `;

        sendEmailViaResend({
            to: notifyEmails,
            subject: `New affiliate application from ${fullName}`,
            html: emailHtml,
        }).catch(() => { });

        return NextResponse.json({ success: true, id: application.id });
    } catch (err) {
        console.error('[affiliate-apply POST]', err);
        return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
    }
}

// GET — admin: list all applications (protected by secret header)
export async function GET(req: NextRequest) {
    const secret = req.headers.get('x-admin-secret');
    if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const applications = await readApplications();
    return NextResponse.json({ applications });
}

// PATCH — admin: update application status
export async function PATCH(req: NextRequest) {
    const secret = req.headers.get('x-admin-secret');
    if (!ADMIN_SECRET || secret !== ADMIN_SECRET) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, status } = await req.json();
    if (!id || !['pending', 'approved', 'rejected'].includes(status)) {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const all = await readApplications();
    const idx = all.findIndex((a: { id: string }) => a.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    all[idx].status = status;
    all[idx].reviewedAt = new Date().toISOString();
    await writeApplications(all);

    // If approving, send the affiliate link via email
    if (status === 'approved') {
        const applicant = all[idx];
        const approvalHtml = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
        <h2 style="color:#1a1a1c;font-size:20px;font-weight:600;margin:0 0 12px;">Welcome to the NativPost affiliate program</h2>
        <p style="color:#555;line-height:1.6;margin:0 0 20px;">Hi ${applicant.fullName}, your application has been reviewed and approved. You can now access your affiliate dashboard and generate your referral link.</p>
        <div style="text-align:center;margin:24px 0;">
          <a href="https://nativpost.affonso.io" style="display:inline-block;background:#864ffe;color:white;padding:14px 32px;border-radius:999px;font-weight:600;font-size:15px;text-decoration:none;">Access your affiliate dashboard</a>
        </div>
        <p style="color:#555;line-height:1.6;margin:0 0 12px;">Sign in with your email address at nativpost.affonso.io to get started. Your referral link and program details will be waiting for you there.</p>
        <p style="color:#555;line-height:1.6;margin:0;">If you have any questions, reply to this email or message us on WhatsApp.</p>
        <div style="margin-top:24px;padding-top:20px;border-top:1px solid #e3e7ed;">
          <p style="color:#999;font-size:12px;margin:0;">NativPost · Studio-crafted social media content · nativpost.com</p>
        </div>
      </div>
    `;

        sendEmailViaResend({
            to: [applicant.email],
            subject: 'Your NativPost affiliate application has been approved',
            html: approvalHtml,
        }).catch(() => { });
    }

    return NextResponse.json({ success: true, application: all[idx] });
}