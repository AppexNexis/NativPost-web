type Entry = {
    count: number;
    lastReset: number;
};

const store = new Map<string, Entry>();

const WINDOW = 60 * 1000; // 1 minute
const LIMIT = 30; // 30 requests per minute per IP

export function rateLimit(ip: string) {
    const now = Date.now();

    const entry = store.get(ip) || { count: 0, lastReset: now };

    if (now - entry.lastReset > WINDOW) {
        entry.count = 0;
        entry.lastReset = now;
    }

    entry.count += 1;
    store.set(ip, entry);

    if (entry.count > LIMIT) {
        return false;
    }

    return true;
}