import crypto from 'crypto';

const ADMIN_SECRET = process.env.AFFILIATE_ADMIN_SECRET || '';

// Constant-time comparison (prevents timing attacks)
function safeCompare(a: string, b: string) {
    const aBuf = Buffer.from(a);
    const bBuf = Buffer.from(b);

    if (aBuf.length !== bBuf.length) return false;
    return crypto.timingSafeEqual(aBuf, bBuf);
}

// Optional: allow hashed secrets (future-proofing)
function hash(val: string) {
    return crypto.createHash('sha256').update(val).digest('hex');
}

export function isAdminAuthorized(provided: string | null) {
    if (!ADMIN_SECRET || !provided) return false;

    // supports both plain and hashed env secrets
    const isMatch =
        safeCompare(provided, ADMIN_SECRET) ||
        safeCompare(hash(provided), ADMIN_SECRET);

    return isMatch;
}