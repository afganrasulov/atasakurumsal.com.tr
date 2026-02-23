"use client";

import { useEffect, useRef, useState } from "react";

interface UseAnimatedCounterOptions {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export function useAnimatedCounter({
    end,
    duration = 2000,
    prefix = "",
    suffix = "",
    decimals = 0,
}: UseAnimatedCounterOptions) {
    const [value, setValue] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    setIsInView(true);
                    hasAnimated.current = true;
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValue(Math.round(eased * end * Math.pow(10, decimals)) / Math.pow(10, decimals));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, end, duration, decimals]);

    const display = `${prefix}${decimals > 0 ? value.toFixed(decimals) : value.toLocaleString("tr-TR")}${suffix}`;

    return { ref, display, isInView };
}
