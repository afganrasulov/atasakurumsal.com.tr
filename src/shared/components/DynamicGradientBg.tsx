"use client";

import { useEffect, useState } from "react";

/**
 * Full-page dynamic gradient that subtly shifts color based on scroll position.
 * Sits behind all content as a fixed background.
 */
export function DynamicGradientBg() {
    const [scrollRatio, setScrollRatio] = useState(0);

    useEffect(() => {
        let ticking = false;
        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const maxScroll =
                        document.documentElement.scrollHeight - window.innerHeight;
                    setScrollRatio(maxScroll > 0 ? window.scrollY / maxScroll : 0);
                    ticking = false;
                });
                ticking = true;
            }
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Interpolate hue/saturation based on scroll
    // Top: deep navy (220, 80%) → Mid: indigo-purple (240, 60%) → Bottom: warm dark blue (210, 70%)
    const hue = 220 + scrollRatio * 30 * Math.sin(scrollRatio * Math.PI);
    const sat = 70 + scrollRatio * 20 * Math.sin(scrollRatio * Math.PI * 2);
    const light1 = 4 + scrollRatio * 3;
    const light2 = 8 + scrollRatio * 4;

    return (
        <div
            className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-700"
            style={{
                background: `linear-gradient(180deg, hsl(${hue}, ${sat}%, ${light1}%) 0%, hsl(${hue + 10}, ${sat - 10}%, ${light2}%) 50%, hsl(${hue - 5}, ${sat}%, ${light1}%) 100%)`,
            }}
            aria-hidden="true"
        />
    );
}
