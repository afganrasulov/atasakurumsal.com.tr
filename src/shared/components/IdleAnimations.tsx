"use client";

import { useState, useEffect, type CSSProperties } from "react";

/* ──────────────────────────────────────────────────────────────
   1. BREATHING GLOW — Nefes alan radial glow
   ────────────────────────────────────────────────────────────── */
export function BreathingGlow({
    color = "59, 130, 246",
    size = 600,
    top = "50%",
    left = "50%",
    duration = 6,
    className = "",
}: {
    color?: string;
    size?: number;
    top?: string;
    left?: string;
    duration?: number;
    className?: string;
}) {
    return (
        <div
            className={`absolute pointer-events-none ${className}`}
            style={{
                top,
                left,
                width: `${size}px`,
                height: `${size}px`,
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, rgba(${color}, 0.08) 0%, transparent 70%)`,
                animation: `breathingGlow ${duration}s ease-in-out infinite`,
            }}
            aria-hidden="true"
        />
    );
}

/* ──────────────────────────────────────────────────────────────
   2. GRADIENT MESH FLOW — Akan mesh gradient arka plan
   ────────────────────────────────────────────────────────────── */
export function GradientMeshFlow({
    colors = [
        "rgba(59,130,246,0.03)",
        "rgba(139,92,246,0.03)",
        "rgba(16,185,129,0.02)",
        "rgba(245,158,11,0.02)",
    ],
    duration = 20,
    className = "",
}: {
    colors?: string[];
    duration?: number;
    className?: string;
}) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{
                background: `
                    radial-gradient(ellipse at 20% 50%, ${colors[0]} 0%, transparent 50%),
                    radial-gradient(ellipse at 80% 20%, ${colors[1]} 0%, transparent 50%),
                    radial-gradient(ellipse at 40% 80%, ${colors[2]} 0%, transparent 50%),
                    radial-gradient(ellipse at 70% 60%, ${colors[3]} 0%, transparent 50%)
                `,
                animation: `meshFlow ${duration}s ease-in-out infinite`,
            }}
            aria-hidden="true"
        />
    );
}

/* ──────────────────────────────────────────────────────────────
   3. FLOATING WATERMARK — Sürüklenen düşük-opacity text
   ────────────────────────────────────────────────────────────── */
export function FloatingWatermark({
    text = "ATASA",
    color = "rgba(255,255,255,0.015)",
    className = "",
}: {
    text?: string;
    color?: string;
    className?: string;
}) {
    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <div
                className="absolute whitespace-nowrap"
                style={{
                    fontSize: "200px",
                    fontWeight: 900,
                    color,
                    letterSpacing: "0.1em",
                    top: "50%",
                    transform: "translateY(-50%) rotate(-12deg)",
                    animation: "watermarkDrift 30s linear infinite",
                }}
            >
                {text} · {text} · {text} · {text} · {text}
            </div>
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────
   4. AMBIENT LIGHT SWEEP — Yavaş geçen sahne ışığı
   ────────────────────────────────────────────────────────────── */
export function AmbientLightSweep({
    color = "255,255,255",
    opacity = 0.03,
    duration = 8,
    angle = 25,
    className = "",
}: {
    color?: string;
    opacity?: number;
    duration?: number;
    angle?: number;
    className?: string;
}) {
    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "60%",
                    height: "100%",
                    background: `linear-gradient(${angle}deg, transparent 0%, rgba(${color},${opacity}) 50%, transparent 100%)`,
                    animation: `lightSweep ${duration}s ease-in-out infinite`,
                }}
            />
        </div>
    );
}

/* ──────────────────────────────────────────────────────────────
   5. MORPHING BLOB — Organik şekil değiştiren blob
   ────────────────────────────────────────────────────────────── */
export function MorphingBlob({
    color = "59,130,246",
    opacity = 0.04,
    size = 400,
    top = "30%",
    left = "70%",
    duration = 12,
    className = "",
}: {
    color?: string;
    opacity?: number;
    size?: number;
    top?: string;
    left?: string;
    duration?: number;
    className?: string;
}) {
    return (
        <div
            className={`absolute pointer-events-none ${className}`}
            style={{
                top,
                left,
                width: `${size}px`,
                height: `${size}px`,
                transform: "translate(-50%, -50%)",
                background: `rgba(${color},${opacity})`,
                filter: `blur(${size / 4}px)`,
                animation: `morphBlob ${duration}s ease-in-out infinite`,
            }}
            aria-hidden="true"
        />
    );
}

/* ──────────────────────────────────────────────────────────────
   6. AUTO CYCLE TEXT — Otomatik değişen metin
   ────────────────────────────────────────────────────────────── */
export function AutoCycleText({
    texts,
    interval = 3000,
    className = "",
    style,
}: {
    texts: string[];
    interval?: number;
    className?: string;
    style?: CSSProperties;
}) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % texts.length);
                setFade(true);
            }, 400);
        }, interval);
        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <span
            className={className}
            style={{
                ...style,
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s ease-in-out",
                display: "inline-block",
            }}
        >
            {texts[index]}
        </span>
    );
}

/* ──────────────────────────────────────────────────────────────
   7. ANIMATED UNDERLINE — Başlığın altında pulsing çizgi
   ────────────────────────────────────────────────────────────── */
export function AnimatedUnderline({
    color = "59,130,246",
    width = 80,
    className = "",
}: {
    color?: string;
    width?: number;
    className?: string;
}) {
    return (
        <div
            className={`mx-auto mt-4 ${className}`}
            style={{
                width: `${width}px`,
                height: "3px",
                borderRadius: "2px",
                background: `linear-gradient(90deg, transparent, rgba(${color},0.6), transparent)`,
                animation: "pulseUnderline 3s ease-in-out infinite",
            }}
            aria-hidden="true"
        />
    );
}

/* ──────────────────────────────────────────────────────────────
   8. BACKGROUND DRIFT — Zaman bazlı arka plan kayması
   ────────────────────────────────────────────────────────────── */
export function BackgroundDrift({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{
                backgroundImage: "url(/images/about-hero-bg.png)",
                backgroundSize: "120% 120%",
                opacity: 0.03,
                animation: "bgDrift 40s ease-in-out infinite",
            }}
            aria-hidden="true"
        />
    );
}
