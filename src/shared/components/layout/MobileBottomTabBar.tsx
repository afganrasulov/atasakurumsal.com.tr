"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Phone, MessageCircle, Info } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { href: "/", label: "Ana Sayfa", icon: Home, isExternal: false },
  { href: "/hakkimizda", label: "Hakkımızda", icon: Info, isExternal: false },
  { href: "/hizmetlerimiz", label: "Hizmetler", icon: Briefcase, isExternal: false },
  { href: "https://wa.me/908503086998", label: "WhatsApp", icon: MessageCircle, isExternal: true },
  { href: "tel:+908503086998", label: "Ara", icon: Phone, isExternal: true },
];

export function MobileBottomTabBar() {
  const pathname = usePathname();

  const isActive = (href: string, isExternal: boolean) => {
    if (isExternal) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100]">
      
      {/* Floating Center Logo */}
      <div className="absolute left-1/2 -top-[36px] -translate-x-1/2 z-10 pointer-events-none">
        <div className="bg-white rounded-t-2xl shadow-[0_-8px_16px_rgba(0,0,0,0.06)] px-5 pt-2.5 pb-2 border-t border-x border-slate-100 flex justify-center items-center relative overflow-hidden pointer-events-auto">
            <Image
                src="/images/atasa-logo.png"
                alt="Atasa Danışmanlık"
                width={100}
                height={35}
                className="h-6 w-auto object-contain"
            />
            {/* Shimmer Effect */}
            <motion.div
                className="absolute inset-0 top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent skew-x-[-25deg] pointer-events-none z-10"
                initial={{ left: "-150%", opacity: 0 }}
                animate={{ left: "250%", opacity: [0, 1, 0] }}
                transition={{
                    repeat: Infinity,
                    repeatDelay: 6,
                    duration: 2.5,
                    ease: "easeInOut",
                }}
            />
        </div>
        {/* Hide gap line by bleeding down into the menu area */}
        <div className="absolute bottom-[-16px] left-0 right-0 h-4 bg-white z-20" />
      </div>

      {/* Main Tab Bar Container */}
      <div className="pb-[env(safe-area-inset-bottom)] bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.06)] border-t border-slate-100 relative z-20">      {/* No Animated Spotlight gradient needed for solid white design, keeping it clean */}

      <nav className="relative flex justify-around items-center h-[65px] px-3 pb-1 z-20">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const active = isActive(tab.href, tab.isExternal);
          const LinkComponent = tab.isExternal ? "a" : Link;
          const externalProps = tab.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

          return (
            <LinkComponent
              key={tab.href}
              href={tab.href}
              {...externalProps}
              className={cn(
                "relative flex items-center justify-center transition-all duration-300",
                active ? "w-auto" : "w-12 h-12"
              )}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div 
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full transition-all duration-300",
                  active 
                    ? "bg-slate-100 text-black px-4 py-2.5" // Active State: Black text on light gray rounded pill
                    : "bg-transparent text-slate-400 hover:text-black p-2" // Inactive State: Gray getting black on hover/tap
                )}
              >
                <Icon
                   size={22} 
                   strokeWidth={active ? 2.5 : 2}
                   className={cn("transition-all duration-300 flex-shrink-0", active ? "scale-100" : "scale-100")}
                />
                
                {/* Only display text when active, using AnimatePresence for smooth entry/exit */}
                <AnimatePresence mode="popLayout">
                  {active && (
                    <motion.span
                      initial={{ opacity: 0, width: 0, paddingLeft: 0 }}
                      animate={{ opacity: 1, width: "auto", paddingLeft: 4 }}
                      exit={{ opacity: 0, width: 0, paddingLeft: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="text-[13px] font-bold whitespace-nowrap overflow-hidden"
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </LinkComponent>
          );
        })}
      </nav>
      </div>
    </div>
  );
}
