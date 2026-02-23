"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/908503086998"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="WhatsApp ile iletişime geçin"
        >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

            {/* Button */}
            <div className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 hover:shadow-green-500/60 transition-all duration-300 active:scale-95">
                <MessageCircle
                    size={30}
                    className="text-white"
                    fill="currentColor"
                />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl">
                WhatsApp&apos;tan Yazın
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-slate-900 rotate-45" />
            </div>
        </a>
    );
}
