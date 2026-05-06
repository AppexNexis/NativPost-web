import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { isAdminAuthorized } from '@/lib/adminAuth';
import { rateLimit } from '@/lib/rateLimit';
import AffiliateApplicationEmail from '@/components/shared/emails/AffiliateApplicationEmail';

const resend = new Resend(process.env.RESEND_API_KEY || '');
const FROM_EMAIL = process.env.FROM_EMAIL || 'NativPost Affiliates <info@nativpost.com>';
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

async function writeApplications(data: unknown[]) {
    await ensureStore();
    await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2));
}

function getIP(req: NextRequest) {
    return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function validateApplication(body: Record<string, unknown>) {
    if (!body.fullName || !body.email || !body.whatsapp || !body.motivation) {
        return 'Required fields are missing.';
    }
    if (typeof body.motivation === 'string' && body.motivation.length < 20) {
        return 'Motivation is too short.';
    }
    return null;
}

// ---------- WhatsApp via CallMeBot ----------
// Setup: send "I allow callmebot to send me messages" to +34 644 68 02 82 on WhatsApp
// then you'll receive your CALLMEBOT_API_KEY. Add WHATSAPP_NOTIFY_NUMBER and CALLMEBOT_API_KEY to env.

async function sendWhatsAppNotification(message: string) {
    const phone = process.env.WHATSAPP_NOTIFY_NUMBER; // e.g. 2347064293843 (no +, no spaces)
    const apiKey = process.env.CALLMEBOT_API_KEY;

    if (!phone || !apiKey) {
        console.warn('[WhatsApp] WHATSAPP_NOTIFY_NUMBER or CALLMEBOT_API_KEY not set — skipping');
        return;
    }

    const encoded = encodeURIComponent(message);
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encoded}&apikey=${apiKey}`;

    try {
        const res = await fetch(url);
        const text = await res.text();
        console.log('[WhatsApp] CallMeBot response:', res.status, text.slice(0, 100));
    } catch (err) {
        console.error('[WhatsApp] Failed to send notification:', err);
    }
}

// ---------- Email via Resend SDK ----------

async function sendAdminEmail(application: Record<string, string>, adminUrl: string, notifyEmails: string[]) {
    if (!process.env.RESEND_API_KEY) {
        console.warn('[Email] RESEND_API_KEY not set — skipping admin email');
        return;
    }

    try {
        const html = await render(
            AffiliateApplicationEmail({
                fullName: application.fullName,
                email: application.email,
                whatsapp: application.whatsapp,
                role: application.role,
                platforms: application.platforms,
                followers: application.followers,
                companies: application.companies,
                videoUrl: application.videoUrl,
                motivation: application.motivation,
                socialLinks: application.socialLinks,
                applicationId: application.id,
                adminUrl,
            })
        );

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: notifyEmails,
            subject: `New affiliate application from ${application.fullName}`,
            html,
        });

        if (error) {
            console.error('[Email] Resend error:', error);
        } else {
            console.log('[Email] Admin notification sent to:', notifyEmails);
        }
    } catch (err) {
        console.error('[Email] sendAdminEmail failed:', err);
    }
}

async function sendApprovalEmail(applicant: Record<string, string>, adminUrl: string) {
    if (!process.env.RESEND_API_KEY) return;

    const approvalHtml = `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;border-radius:12px;">
        <h2 style="color:#1a1a1c;">Welcome to NativPost affiliate program 🎉</h2>
        <p style="color:#374151;">Hi ${applicant.fullName}, your application has been approved!</p>
        <p style="color:#374151;">Click below to access your affiliate dashboard, get your referral link, and start earning 30% recurring commission.</p>
        <div style="text-align:center;margin:28px 0;">
          <a href="https://nativpost.affonso.io" style="background:#864ffe;color:white;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:600;font-size:15px;">Access your dashboard →</a>
        </div>
        <p style="color:#9CA3AF;font-size:12px;text-align:center;">Questions? Reply to this email or message us on WhatsApp.</p>
      </div>
    `;

    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [applicant.email],
            subject: 'You have been approved — NativPost affiliate program',
            html: approvalHtml,
        });

        if (error) console.error('[Email] Approval email error:', error);
        else console.log('[Email] Approval email sent to:', applicant.email);
    } catch (err) {
        console.error('[Email] sendApprovalEmail failed:', err);
    }
}

// ---------- GET ----------

export async function GET(req: NextRequest) {
    const secret = req.headers.get('x-admin-secret');
    if (!isAdminAuthorized(secret)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const applications = await readApplications();
    return NextResponse.json({ applications });
}

// ---------- POST ----------

export async function POST(req: NextRequest) {
    try {
        const ip = getIP(req);
        if (!rateLimit(ip)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }

        const body = await req.json();
        const validationError = validateApplication(body);
        if (validationError) {
            return NextResponse.json({ error: validationError }, { status: 400 });
        }

        const application = {
            id: `af_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            submittedAt: new Date().toISOString(),
            status: 'pending',
            ...body,
        };

        const all = await readApplications();
        all.unshift(application);
        await writeApplications(all);

        const adminUrl = process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/affiliate-admin`
            : 'https://nativpost.com/affiliate-admin';

        const notifyEmails = [
            process.env.AFFILIATE_NOTIFY_EMAIL_1 || 'info@nativpost.com',
            process.env.AFFILIATE_NOTIFY_EMAIL_2 || 'wilsonibekason@gmail.com',
        ].filter(Boolean);

        // Send admin email (Resend SDK + React Email)
        sendAdminEmail(application, adminUrl, notifyEmails).catch(() => { });

        // Send WhatsApp notification (CallMeBot)
        const whatsappMessage =
            `📋 *New NativPost Affiliate Application*\n\n` +
            `👤 *Name:* ${application.fullName}\n` +
            `📧 *Email:* ${application.email}\n` +
            `📱 *WhatsApp:* ${application.whatsapp}\n` +
            `💼 *Role:* ${application.role || 'Not specified'}\n` +
            `📣 *Platforms:* ${application.platforms || 'Not specified'}\n` +
            `👥 *Audience:* ${application.followers || 'Not specified'}\n\n` +
            `🔗 Review: ${adminUrl}`;

        sendWhatsAppNotification(whatsappMessage).catch(() => { });

        return NextResponse.json({ success: true, id: application.id });

    } catch (err) {
        console.error('[POST] affiliate-apply error:', err);
        return NextResponse.json({ error: 'Submission failed' }, { status: 500 });
    }
}

// ---------- PATCH ----------

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
    const idx = all.findIndex((a: Record<string, string>) => a.id === id);

    if (idx === -1) {
        return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    all[idx].status = status;
    all[idx].reviewedAt = new Date().toISOString();
    await writeApplications(all);

    if (status === 'approved') {
        const adminUrl = process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/affiliate-admin`
            : 'https://nativpost.com/affiliate-admin';

        sendApprovalEmail(all[idx], adminUrl).catch(() => { });

        // WhatsApp notification when approved
        const msg =
            `✅ *Affiliate Approved*\n\n` +
            `${all[idx].fullName} (${all[idx].email}) has been approved as a NativPost affiliate.`;
        sendWhatsAppNotification(msg).catch(() => { });
    }

    return NextResponse.json({ success: true, application: all[idx] });
}