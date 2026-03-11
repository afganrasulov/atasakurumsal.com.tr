import { HeroSection, MobileHeroSection, ServicesPreview } from "@/features/home";
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

const SocialProof = dynamic(
  () =>
    import("@/features/home/components/SocialProof").then((m) => ({
      default: m.SocialProof,
    })),
  { ssr: true }
);

const GlobalPresence = dynamic(
  () =>
    import("@/features/home/components/GlobalPresence").then((m) => ({
      default: m.GlobalPresence,
    })),
  { ssr: true }
);

const ScrollProgress = dynamic(
  () =>
    import("@/shared/components/ScrollProgress").then((m) => ({
      default: m.ScrollProgress,
    }))
);

const DynamicGradientBg = dynamic(
  () =>
    import("@/shared/components/DynamicGradientBg").then((m) => ({
      default: m.DynamicGradientBg,
    }))
);

const WaveDivider = dynamic(
  () =>
    import("@/shared/components/WaveDivider").then((m) => ({
      default: m.WaveDivider,
    })),
  { ssr: true }
);

export default function HomePage() {
  return (
    <PageTransition>
      {/* Efekt 8: Scroll Progress Bar */}
      <ScrollProgress />
      {/* Efekt 3: Dynamic Gradient Background */}
      <DynamicGradientBg />

      <MobileHeroSection />
      <HeroSection />
      <WaveDivider />
      <SocialProof />
      <WaveDivider />
      <GlobalPresence />
      <WaveDivider />
      <ValueProposition />
      <WaveDivider />
      <ServicesPreview />
      <WaveDivider />
      <ProcessTimeline />
      <WaveDivider />
      <SectionCTA
        message="Sürecinizi hemen başlatalım. Uzman ekibimiz hazır."
        buttonText="Danışman Atayın"
      />
      <WaveDivider />
      <TrustChecklist />
      <WaveDivider />
      <ComparisonTable />
      <WaveDivider />
      <TrustedBy />
      <WaveDivider />
      <Testimonials />
      <WaveDivider />
      <InlineMiniForm />
      <WaveDivider />
      <FAQSection />
      <WaveDivider />
      <CTASection />
    </PageTransition>
  );
}
