"use client";

import { useRef, useState, type ReactNode, type CSSProperties } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    /** How strongly the button is pulled toward cursor (0.2–0.5 recommended) */
    strength?: number;
    as?: "a" | "button" | "div";
    href?: string;
    target?: string;
    rel?: string;
    onClick?: () => void;
}

export function MagneticButton({
    children,
    className = "",
    style,
    strength = 0.3,
    as = "div",
    href,
    target,
    rel,
    onClick,
}: MagneticButtonProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("translate(0px, 0px)");

    function handleMouseMove(e: React.MouseEvent) {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        setTransform(`translate(${deltaX}px, ${deltaY}px)`);
    }

    function handleMouseLeave() {
        setTransform("translate(0px, 0px)");
    }

    const sharedStyle: CSSProperties = {
        ...style,
        transform,
        transition: transform.includes("0px, 0px")
            ? "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
            : "transform 0.15s ease-out",
        willChange: "transform",
    };

    // Always render as div wrapper — simplifies types and works universally
    return (
        <div
            ref={divRef}
            className={className}
            style={sharedStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
