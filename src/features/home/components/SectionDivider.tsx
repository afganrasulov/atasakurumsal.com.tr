"use client";

export function SectionDivider() {
    return (
        <div
            className="relative w-full h-40 -my-20 z-10 pointer-events-none flex items-center justify-center"
            aria-hidden="true"
        >
            {/* Soft gradient glow band */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.04) 40%, rgba(59,130,246,0.06) 50%, rgba(59,130,246,0.04) 60%, transparent 100%)",
                }}
            />

            {/* Main line */}
            <div className="relative w-full max-w-5xl mx-auto h-px overflow-hidden">
                {/* Static base line */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, transparent 5%, rgba(59,130,246,0.08) 25%, rgba(59,130,246,0.12) 50%, rgba(59,130,246,0.08) 75%, transparent 95%)",
                    }}
                />
                {/* Sweeping light — shimmer animation */}
                <div
                    className="absolute top-0 bottom-0 w-1/3 animate-[divider-sweep_3s_ease-in-out_infinite]"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(255,255,255,0.4) 50%, rgba(59,130,246,0.5) 70%, transparent 100%)",
                        filter: "blur(1px)",
                    }}
                />
            </div>

            {/* Center dot glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full z-10"
                style={{
                    background: "rgba(59,130,246,0.5)",
                    boxShadow: "0 0 8px 3px rgba(59,130,246,0.2), 0 0 20px 6px rgba(59,130,246,0.08)",
                }}
            />

            <style jsx>{`
                @keyframes divider-sweep {
                    0% { left: -33%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { left: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}
