import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink, Globe, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/shared/page-hero";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Work | CyberSlayerCorpz",
  description: "Explore live client demonstrations and production builds on the CyberSlayerCorpz demo directory.",
};

export default function WorkPage() {
  const demoUrl = "https://demo.cyberslayercorpz.dev";

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Live client demos &"
        highlight="deployments."
        description="All our production builds, client staging environments, and interactive prototypes are centralized on our dedicated demo platform."
      />

      <section className="py-24 sm:py-32 border-b border-white/[0.08]">
        <Container className="flex flex-col items-center">
          {/* Single focused demo directory card */}
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c10] shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20">
            {/* Browser window chrome */}
            <div className="flex h-11 items-center justify-between border-b border-white/[0.08] bg-black/60 px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-500/80" />
                <span className="size-3 rounded-full bg-yellow-500/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-1 text-xs text-white/60">
                <Lock className="size-3 text-emerald-400" />
                <span className="font-medium text-white/80">demo.cyberslayercorpz.dev</span>
              </div>

              <div className="w-12" />
            </div>

            {/* Showcase preview area */}
            <div className="relative flex flex-col items-center p-8 sm:p-14 text-center">
              <div className="grid size-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-accent-orange mb-6 shadow-inner">
                <Globe className="size-8" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                CyberSlayerCorpz Demo Directory
              </h2>

              <p className="mt-3 max-w-md text-sm sm:text-base leading-relaxed text-white/60">
                Access live interactive client showcases, staging prototypes, and production builds in one unified environment.
              </p>

              <div className="mt-8">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                >
                  <span>Open demo.cyberslayercorpz.dev</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Initiate Project"
        title="Ready to build something that slays?"
        description="Tell us what you're trying to build. We'll help you engineer the right architecture and execute with speed."
      />
    </>
  );
}
