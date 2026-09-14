import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { DropCard } from "@/components/landing/drop-card";
import { HowItWorks } from "@/components/landing/how-it-works";
import { SiteFooter } from "@/components/landing/site-footer";
import { Reveal } from "@/components/landing/reveal";
import { mockDrops } from "@/lib/mock-drops";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <Hero />

        <section id="drops" className="mx-auto w-full max-w-6xl px-6 py-24">
          <Reveal className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-4xl font-semibold tracking-tight">
                Live &amp; upcoming drops
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Across every organizer on the platform.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockDrops.map((drop, index) => (
              <Reveal key={drop.id} delay={index * 75}>
                <DropCard drop={drop} />
              </Reveal>
            ))}
          </div>
        </section>

        <HowItWorks />
      </main>

      <SiteFooter />
    </>
  );
}
