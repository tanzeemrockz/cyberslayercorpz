import { Hero } from "@/components/home/hero";
import { StudioCapabilities } from "@/components/home/studio-capabilities";
import { TheCyberSlayerEdge } from "@/components/home/the-edge";
import { ExecutionRoadmap } from "@/components/home/execution-roadmap";
import { PricingSection } from "@/components/home/pricing-section";
import { ClientFAQ } from "@/components/home/client-faq";
import { CTASection } from "@/components/shared/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StudioCapabilities />
      <TheCyberSlayerEdge />
      <ExecutionRoadmap />
      <PricingSection />
      <ClientFAQ />
      <CTASection
        eyebrow="Initiate Project"
        title="Ready to build something that slays?"
        description="Tell us what you're trying to build. We'll help you engineer the right architecture and execute with speed."
      />
    </>
  );
}
