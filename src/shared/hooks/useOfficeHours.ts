"use client";

import { useState, useEffect } from "react";

/**
 * Mesai saatlerini kontrol eden hook.
 * Türkiye saatiyle Pzt-Cmt 09:00-18:00 arası true döner.
 * Her 60 saniyede bir güncellenir.
 */
export function useOfficeHours(): boolean {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const check = () => {
            const now = new Date(
                new Date().toLocaleString("en-US", { timeZone: "Europe/Istanbul" })
            );
            const day = now.getDay(); // 0=Sun, 6=Sat
            const hour = now.getHours();
            // Mon-Sat 09:00-18:00
            setIsOpen(day >= 1 && day <= 6 && hour >= 9 && hour < 18);
        };
        check();
        const interval = setInterval(check, 60_000);
        return () => clearInterval(interval);
    }, []);

    return isOpen;
}
