"use client";

import { useState, useEffect } from "react";

interface FloatingParticlesProps {
    count?: number;
    color?: string;
    minSize?: number;
    maxSize?: number;
    shape?: "circle" | "star" | "diamond";
    speed?: number;
    className?: string;
}

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    driftX: number;
    opacity: number;
}

function createParticles(count: number, minSize: number, maxSize: number): Particle[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 18,
        driftX: -20 + Math.random() * 40,
        opacity: 0.04 + Math.random() * 0.1,
    }));
}

export function FloatingParticles({
    count = 12,
    color = "59, 130, 246",
    minSize = 2,
    maxSize = 6,
    shape = "circle",
    speed = 1,
    className = "",
}: FloatingParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([]);

    // Only generate particles on client to avoid hydration mismatch
    useEffect(() => {
        setParticles(createParticles(count, minSize, maxSize));
    }, [count, minSize, maxSize]);

    if (particles.length === 0) return null;

    const borderRadius = shape === "circle" ? "50%" : shape === "diamond" ? "2px" : "0";

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            {particles.map((p) => (
                <div
                    key={p.id}
                    className={shape === "diamond" ? "absolute rotate-45" : "absolute"}
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        borderRadius,
                        background:
                            shape === "star"
                                ? "none"
                                : `rgba(${color}, ${p.opacity})`,
                        boxShadow:
                            shape !== "star"
                                ? `0 0 ${p.size * 3}px rgba(${color}, ${p.opacity * 0.6})`
                                : "none",
                        animation: `fp-float ${p.duration / speed}s ease-in-out ${p.delay}s infinite, fp-drift ${(p.duration * 1.5) / speed}s ease-in-out ${p.delay}s infinite`,
                    }}
                >
                    {shape === "star" && (
                        <svg
                            viewBox="0 0 24 24"
                            fill={`rgba(${color}, ${p.opacity})`}
                            className="w-full h-full"
                        >
                            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L5.7 21 8 14l-6-4.6h7.6z" />
                        </svg>
                    )}
                </div>
            ))}
            <style jsx>{`
                @keyframes fp-float {
                    0%,
                    100% {
                        transform: translateY(0px) ${shape === "diamond" ? "rotate(45deg)" : ""};
                    }
                    50% {
                        transform: translateY(-30px) ${shape === "diamond" ? "rotate(45deg)" : ""};
                    }
                }
                @keyframes fp-drift {
                    0%,
                    100% {
                        margin-left: 0;
                    }
                    50% {
                        margin-left: 20px;
                    }
                }
            `}</style>
        </div>
    );
}
