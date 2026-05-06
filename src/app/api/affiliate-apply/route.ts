import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Resend } from 'resend';
import { isAdminAuthorized } from '@/lib/adminAuth';
import { rateLimit } from '@/lib/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY || '');
const FROM_EMAIL = process.env.FROM_EMAIL || 'NativPost Affiliates <info@nativpost.com>';
const STORE_PATH = path.join(process.cwd(), 'data', 'affiliate-applications.json');

// ---------- store helpers ----------

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

// ---------- Email HTML (inline — no external import, never crashes) ----------

function buildAdminEmailHtml(app: Record<string, string>, adminUrl: string) {
    const PURPLE = '#864FFE';
    const DARK = '#1A1A1C';
    const GRAY = '#9CA3AF';

    const rows = [
        ['Name', app.fullName],
        ['Email', app.email],
        ['WhatsApp', app.whatsapp],
        ['Role', app.role || 'Not specified'],
        ['Platforms', app.platforms || 'Not specified'],
        ['Audience size', app.followers || 'Not specified'],
        ['Social links', app.socialLinks || 'None listed'],
        ['Companies', app.companies || 'None listed'],
        ...(app.videoUrl ? [['Video intro', app.videoUrl]] : []),
    ];

    const tableRows = rows.map(([label, value]) => `
        <tr>
            <td style="padding:10px 14px;font-weight:600;color:#6B7280;width:140px;border-bottom:1px solid #F3F4F6;vertical-align:top;">${label}</td>
            <td style="padding:10px 14px;color:${DARK};border-bottom:1px solid #F3F4F6;vertical-align:top;line-height:1.5;">${value}</td>
        </tr>`).join('');

    return `
    <div style="font-family:'DM Sans',Inter,system-ui,sans-serif;background:#F5F5F7;padding:24px 16px;margin:0;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #E5E7EB;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <div style="background:${DARK};padding:28px 36px 24px;">
          <p style="margin:0 0 6px;font-size:24px;font-weight:700;letter-spacing:-0.5px;line-height:1;">
            <span style="display:inline-block;width:30px;height:30px;line-height:30px;border-radius:50%;background:#fff;text-align:center;font-size:14px;font-weight:800;color:${DARK};margin-right:8px;vertical-align:middle;">N</span>
            <span style="color:#fff;vertical-align:middle;">Nativ</span><span style="color:rgba(255,255,255,0.45);vertical-align:middle;">Post</span>
          </p>
          <p style="margin:6px 0 0;font-size:13px;color:${GRAY};">Studio-crafted content, published.</p>
        </div>
        <div style="background:#F4F2FE;border-top:3px solid ${PURPLE};padding:24px 36px;">
          <span style="display:inline-block;background:#EDE9FE;color:#5B21B6;border-radius:20px;padding:4px 12px;font-size:12px;font-weight:600;margin-bottom:12px;border:1px solid #DDD6FE;">New application 📋</span>
          <p style="margin:0 0 6px;font-size:22px;font-weight:700;color:${DARK};letter-spacing:-0.3px;">Affiliate application received</p>
          <p style="margin:0;font-size:15px;color:#4B5563;line-height:1.6;"><strong>${app.fullName}</strong> has applied to join the NativPost affiliate program.</p>
        </div>
        <div style="padding:28px 36px;">
          <p style="margin:0 0 10px;font-size:11px;font-weight:600;color:${GRAY};text-transform:uppercase;letter-spacing:0.8px;">Applicant details</p>
          <table style="width:100%;border-collapse:collapse;background:#FAFAFA;border:1px solid #E5E7EB;border-radius:10px;overflow:hidden;margin-bottom:24px;font-size:14px;">
            <tbody>${tableRows}</tbody>
          </table>
          <p style="margin:0 0 10px;font-size:11px;font-weight:600;color:${GRAY};text-transform:uppercase;letter-spacing:0.8px;">Motivation</p>
          <div style="background:#FAFAFA;border:1px solid #E5E7EB;border-left:3px solid ${PURPLE};border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:28px;">
            <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;font-style:italic;">${app.motivation}</p>
          </div>
          <a href="${adminUrl}" style="background:${PURPLE};border-radius:8px;color:#fff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 22px;display:inline-block;">Review in admin dashboard →</a>
        </div>
        <div style="padding:20px 36px 28px;border-top:1px solid #F3F4F6;">
          <p style="margin:0 0 6px;font-size:12px;color:${GRAY};text-align:center;">Application ID: ${app.id}</p>
          <p style="margin:0;font-size:12px;color:${GRAY};text-align:center;">
            <a href="${adminUrl}" style="color:#6B7280;text-decoration:underline;">Affiliate admin</a> ·
            <a href="https://nativpost.com" style="color:#6B7280;text-decoration:underline;">NativPost</a>
          </p>
        </div>
      </div>
    </div>`;
}

function buildApprovalEmailHtml(applicant: Record<string, string>) {
    return `
    <div style="font-family:'DM Sans',Inter,system-ui,sans-serif;background:#F5F5F7;padding:24px 16px;">
      <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #E5E7EB;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <div style="background:#1A1A1C;padding:28px 36px 24px;">
          <p style="margin:0;font-size:24px;font-weight:700;color:#fff;">NativPost</p>
        </div>
        <div style="padding:36px;">
          <h2 style="margin:0 0 12px;color:#1A1A1C;font-size:22px;font-weight:700;">You have been approved 🎉</h2>
          <p style="color:#4B5563;line-height:1.6;margin:0 0 12px;">Hi ${applicant.fullName}, welcome to the NativPost affiliate program! Your application has been reviewed and approved.</p>
          <p style="color:#4B5563;line-height:1.6;margin:0 0 32px;">Click below to access your affiliate dashboard, get your referral link, and start earning 30% recurring commission on every renewal.</p>
          <div style="text-align:center;margin-bottom:32px;">
            <a href="https://nativpost.affonso.io" style="background:#864FFE;color:#fff;padding:14px 32px;border-radius:999px;text-decoration:none;font-weight:600;font-size:15px;">Access your dashboard →</a>
          </div>
          <p style="color:#9CA3AF;font-size:13px;text-align:center;margin:0;">Questions? Reply to this email and we will get back to you.</p>
        </div>
      </div>
    </div>`;
}

// ---------- WhatsApp via CallMeBot ----------

async function sendWhatsAppNotification(message: string) {
    const phone = process.env.WHATSAPP_NOTIFY_NUMBER;
    const apiKey = process.env.CALLMEBOT_API_KEY;

    if (!phone || !apiKey) {
        console.warn('[WhatsApp] WHATSAPP_NOTIFY_NUMBER or CALLMEBOT_API_KEY not set — skipping');
        return;
    }

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;
    try {
        const res = await fetch(url);
        const text = await res.text();
        console.log('[WhatsApp] Response:', res.status, text.slice(0, 120));
    } catch (err) {
        console.error('[WhatsApp] Failed:', err);
    }
}

// ---------- Email via Resend SDK ----------

async function sendAdminEmail(app: Record<string, string>, adminUrl: string, notifyEmails: string[]) {
    if (!process.env.RESEND_API_KEY) {
        console.warn('[Email] RESEND_API_KEY not set — skipping admin email');
        return;
    }
    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: notifyEmails,
            subject: `New affiliate application from ${app.fullName}`,
            html: buildAdminEmailHtml(app, adminUrl),
        });
        if (error) console.error('[Email] Admin email error:', error);
        else console.log('[Email] Admin email sent to:', notifyEmails);
    } catch (err) {
        console.error('[Email] sendAdminEmail failed:', err);
    }
}

async function sendApprovalEmail(applicant: Record<string, string>) {
    if (!process.env.RESEND_API_KEY) return;
    try {
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [applicant.email],
            subject: 'You have been approved — NativPost affiliate program',
            html: buildApprovalEmailHtml(applicant),
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

        const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nativpost.com'}/affiliate-admin`;
        const notifyEmails = [
            process.env.AFFILIATE_NOTIFY_EMAIL_1 || 'info@nativpost.com',
            process.env.AFFILIATE_NOTIFY_EMAIL_2 || 'wilsonibekason@gmail.com',
        ];

        // Fire-and-forget — never block the 200 response
        sendAdminEmail(application, adminUrl, notifyEmails).catch(() => { });
        sendWhatsAppNotification(
            `📋 *New NativPost Affiliate Application*\n\n` +
            `👤 *Name:* ${application.fullName}\n` +
            `📧 *Email:* ${application.email}\n` +
            `📱 *WhatsApp:* ${application.whatsapp}\n` +
            `💼 *Role:* ${application.role || 'Not specified'}\n` +
            `📣 *Platforms:* ${application.platforms || 'Not specified'}\n` +
            `👥 *Audience:* ${application.followers || 'Not specified'}\n\n` +
            `🔗 Review: ${adminUrl}`
        ).catch(() => { });

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
        sendApprovalEmail(all[idx]).catch(() => { });
        sendWhatsAppNotification(
            `✅ *Affiliate Approved*\n\n` +
            `${all[idx].fullName} (${all[idx].email}) has been approved as a NativPost affiliate.`
        ).catch(() => { });
    }

    return NextResponse.json({ success: true, application: all[idx] });
}