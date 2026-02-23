"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    depth: number;
    opacity: number;
    color: string;
}

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const sizeRef = useRef({ w: 0, h: 0 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const PARTICLE_COUNT = 80;
        const CONNECTION_DISTANCE = 180;
        const MOUSE_RADIUS = 250;

        function resize() {
            if (!canvas) return;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
            sizeRef.current = { w: rect.width, h: rect.height };
        }

        function createParticles() {
            const { w, h } = sizeRef.current;
            if (!w || !h) return;
            particlesRef.current = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const depth = Math.random();
                // Derinlik simülasyonu: boyut + opacity ile (blur yok)
                const radius = 0.8 + depth * 2.5;
                const opacity = 0.12 + depth * 0.45;
                // Uzak = açık gri, yakın = koyu gri
                const tone = Math.round(180 - depth * 80);
                particlesRef.current.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    vx: (Math.random() - 0.5) * (0.15 + depth * 0.4),
                    vy: (Math.random() - 0.5) * (0.15 + depth * 0.4),
                    radius,
                    depth,
                    opacity,
                    color: `${tone}, ${tone + 5}, ${tone + 15}`,
                });
            }
            particlesRef.current.sort((a, b) => a.depth - b.depth);
        }

        function animate() {
            if (!canvas || !ctx) return;
            const { w, h } = sizeRef.current;
            if (!w || !h) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, w, h);

            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const hasValidMouse = mouse.x > -500 && mouse.y > -500;

            // Update positions
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                p.x = Math.max(0, Math.min(w, p.x));
                p.y = Math.max(0, Math.min(h, p.y));
            }

            // Draw connections + particles in single pass
            for (let i = 0; i < particles.length; i++) {
                const pi = particles[i];

                // Particle-particle connections
                for (let j = i + 1; j < particles.length; j++) {
                    const pj = particles[j];
                    // Sadece yakın derinlikteki partikülleri bağla
                    if (Math.abs(pi.depth - pj.depth) > 0.4) continue;

                    const dx = pi.x - pj.x;
                    const dy = pi.y - pj.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
                        const dist = Math.sqrt(distSq);
                        const avgDepth = (pi.depth + pj.depth) / 2;
                        const opacity = (1 - dist / CONNECTION_DISTANCE) * (0.08 + avgDepth * 0.25);
                        const lineWidth = 0.3 + avgDepth * 0.8;

                        ctx.beginPath();
                        ctx.moveTo(pi.x, pi.y);
                        ctx.lineTo(pj.x, pj.y);
                        ctx.strokeStyle = `rgba(${pi.color}, ${opacity})`;
                        ctx.lineWidth = lineWidth;
                        ctx.stroke();
                    }
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(pi.x, pi.y, pi.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${pi.color}, ${pi.opacity})`;
                ctx.fill();

                // Mouse connection
                if (hasValidMouse) {
                    const mdx = pi.x - mouse.x;
                    const mdy = pi.y - mouse.y;
                    const mDistSq = mdx * mdx + mdy * mdy;
                    const effectiveRadius = MOUSE_RADIUS * (0.5 + pi.depth * 0.7);

                    if (mDistSq < effectiveRadius * effectiveRadius) {
                        const mDist = Math.sqrt(mDistSq);
                        const intensity = 1 - mDist / effectiveRadius;
                        const opacity = intensity * (0.15 + pi.depth * 0.45);

                        ctx.beginPath();
                        ctx.moveTo(pi.x, pi.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                        ctx.lineWidth = 0.4 + pi.depth * 1.2;
                        ctx.stroke();

                        // Glow
                        ctx.beginPath();
                        ctx.arc(pi.x, pi.y, pi.radius + 1.5 * pi.depth, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.5})`;
                        ctx.fill();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        }

        resize();
        createParticles();
        animate();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", () => {
            resize();
            createParticles();
        });

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
        };
    }, [handleMouseMove]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}
