import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description:
        "Atasa Danışmanlık hakkında — 12 yıllık deneyim, güvenilirlik ve profesyonel çalışma izni danışmanlığı.",
};

export default function HakkimizdaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
