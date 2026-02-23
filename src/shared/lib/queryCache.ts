const CACHE_PREFIX = "atasa_cache_";

interface CacheEntry<T> {
    data: T;
    expiresAt: number;
}

function getCachedData<T>(key: string): T | null {
    if (typeof window === "undefined") return null;

    try {
        const raw = localStorage.getItem(`${CACHE_PREFIX}${key}`);
        if (!raw) return null;

        const entry: CacheEntry<T> = JSON.parse(raw);
        if (Date.now() > entry.expiresAt) {
            localStorage.removeItem(`${CACHE_PREFIX}${key}`);
            return null;
        }

        return entry.data;
    } catch {
        return null;
    }
}

function setCachedData<T>(key: string, data: T, ttlMs: number): void {
    if (typeof window === "undefined") return;

    try {
        const entry: CacheEntry<T> = {
            data,
            expiresAt: Date.now() + ttlMs,
        };
        localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(entry));
    } catch {
        // localStorage dolu veya erişim engelli — sessizce devam et
    }
}

/**
 * TanStack Query ile entegre localStorage cache katmanı.
 * Veriler önce localStorage'dan okunur, yoksa fetch edilir ve kaydedilir.
 */
export function createCachedQueryOptions<T>(
    queryKey: string[],
    fetcher: () => Promise<T>,
    ttlMs = 300_000
) {
    const cacheKey = queryKey.join("_");

    return {
        queryKey,
        queryFn: async (): Promise<T> => {
            const cached = getCachedData<T>(cacheKey);
            if (cached) return cached;

            const data = await fetcher();
            setCachedData(cacheKey, data, ttlMs);
            return data;
        },
        staleTime: ttlMs,
    };
}
