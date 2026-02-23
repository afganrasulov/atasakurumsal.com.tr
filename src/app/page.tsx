import { HeroSection, ServicesPreview } from "@/features/home";
import { PageTransition } from "@/shared/components/PageTransition";
import dynamic from "next/dynamic";

const ValueProposition = dynamic(
  () =>
    import("@/features/home/components/ValueProposition").then((m) => ({
      default: m.ValueProposition,
    })),
  { ssr: true }
);

const SectionCTA = dynamic(
  () =>
    import("@/features/home/components/SectionCTA").then((m) => ({
      default: m.SectionCTA,
    })),
  { ssr: true }
);

const ProcessTimeline = dynamic(
  () =>
    import("@/features/home/components/ProcessTimeline").then((m) => ({
      default: m.ProcessTimeline,
    })),
  { ssr: true }
);

const TrustChecklist = dynamic(
  () =>
    import("@/features/home/components/TrustChecklist").then((m) => ({
      default: m.TrustChecklist,
    })),
  { ssr: true }
);

const TrustedBy = dynamic(
  () =>
    import("@/features/home/components/TrustedBy").then((m) => ({
      default: m.TrustedBy,
    })),
  { ssr: true }
);

const ComparisonTable = dynamic(
  () =>
    import("@/features/home/components/ComparisonTable").then((m) => ({
      default: m.ComparisonTable,
    })),
  { ssr: true }
);

const Testimonials = dynamic(
  () =>
    import("@/features/home/components/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { ssr: true }
);

const InlineMiniForm = dynamic(
  () =>
    import("@/features/home/components/InlineMiniForm").then((m) => ({
      default: m.InlineMiniForm,
    })),
  { ssr: true }
);

const FAQSection = dynamic(
  () =>
    import("@/features/home/components/FAQSection").then((m) => ({
      default: m.FAQSection,
    })),
  { ssr: true }
);

const CTASection = dynamic(
  () =>
    import("@/features/home/components/CTASection").then((m) => ({
      default: m.CTASection,
    })),
  { ssr: true }
);

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <ValueProposition />
      <SectionCTA
        message="İlk adımı atın — Ücretsiz ön değerlendirme sadece 2 dakika."
        buttonText="Hemen Başla"
      />
      <ServicesPreview />
      <ProcessTimeline />
      <SectionCTA
        message="Sürecinizi hemen başlatalım. Uzman ekibimiz hazır."
        buttonText="Danışman Atayın"
      />
      <TrustChecklist />
      <ComparisonTable />
      <TrustedBy />
      <Testimonials />
      <InlineMiniForm />
      <FAQSection />
      <CTASection />
    </PageTransition>
  );
}
