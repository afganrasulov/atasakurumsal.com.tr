"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /** Max tilt angle in degrees */
    maxTilt?: number;
    /** Glow color for hover in CSS format, e.g. "59, 130, 246" */
    glowColor?: string;
    /** Scale on hover */
    hoverScale?: number;
}

export function TiltCard({
    children,
    className = "",
    style,
    maxTilt = 8,
    glowColor = "59, 130, 246",
    hoverScale = 1.02,
}: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("");
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove(e: React.MouseEvent) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const tiltX = (y - 0.5) * -maxTilt;
        const tiltY = (x - 0.5) * maxTilt;

        setTransform(
            `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${hoverScale}, ${hoverScale}, ${hoverScale})`
        );
        setGlowPos({ x: x * 100, y: y * 100 });
    }

    function handleMouseLeave() {
        setTransform("");
        setIsHovered(false);
    }

    function handleMouseEnter() {
        setIsHovered(true);
    }

    return (
        <div
            ref={ref}
            className={`relative ${className}`}
            style={{
                ...style,
                transform: transform || "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transition: transform
                    ? "transform 0.1s ease-out"
                    : "transform 0.5s ease-out",
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            {children}
            {/* Ambient glow halo following cursor */}
            <div
                className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(${glowColor}, 0.12) 0%, transparent 60%)`,
                }}
            />
        </div>
    );
}
