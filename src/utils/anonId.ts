// utils/anonId.ts
export function getOrCreateAnonId(): string | null {
    if (typeof window === "undefined") return null;
    const KEY = "ig_anon_id"; // change prefix if you like
    let id = localStorage.getItem(KEY);
    if (!id) {
        // Use crypto.randomUUID when available
        if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
            id = (crypto as any).randomUUID();
        } else {
            id =
                "anon-" +
                Math.random().toString(36).slice(2) +
                "-" +
                Date.now().toString(36);
        }
        localStorage.setItem(KEY, id!);
    }
    return id;
}