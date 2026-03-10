import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description:
        "Atasa Danışmanlık hizmetleri — çalışma izni, çalışma izni uzatma, çalışma izni transferi, toplu başvuru, ikamet izni ve daha fazlası.",
};

export default function HizmetlerimizLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
