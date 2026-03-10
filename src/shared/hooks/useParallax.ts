"use client";

import { useEffect, useState, useRef } from "react";
import { useMotionValue, useTransform, type MotionValue } from "framer-motion";

interface ParallaxResult {
    ref: React.RefObject<HTMLDivElement | null>;
    y: MotionValue<number>;
}

/**
 * Custom parallax hook that uses manual scroll tracking
 * to avoid framer-motion's useScroll hydration issues.
 */
export function useParallax({
    speed = 0.2,
}: {
    speed?: number;
} = {}): ParallaxResult {
    const ref = useRef<HTMLDivElement>(null);
    const scrollProgress = useMotionValue(0);
    const y = useTransform(scrollProgress, [0, 1], [speed * 100, -speed * 100]);

    useEffect(() => {
        function updateProgress() {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementHeight = rect.height;
            
            // Calculate progress: 0 when element enters viewport, 1 when it leaves
            const start = rect.top - windowHeight;
            const end = rect.bottom;
            const total = end - start;
            const progress = total > 0 ? Math.max(0, Math.min(1, -start / total)) : 0;
            
            scrollProgress.set(progress);
        }

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, [scrollProgress]);

    return { ref, y };
}
