import Link from "next/link";
import { cn } from "cn";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { DropCard } from "@/components/drops/drop-card";
import { buttonVariants } from "@/components/ui/button";
import { mockDrops } from "@/lib/mock-drops";

const previewDrops = mockDrops.slice(0, 4);

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
            <Link
              href="/drops"
              className={cn(buttonVariants({ variant: "outline" }), "hidden sm:inline-flex")}
            >
              Browse all drops
            </Link>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {previewDrops.map((drop, index) => (
              <Reveal key={drop.id} delay={index * 75}>
                <DropCard drop={drop} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link href="/drops" className={cn(buttonVariants({ variant: "outline" }))}>
              Browse all drops
            </Link>
          </div>
        </section>

        <HowItWorks />
      </main>

      <SiteFooter />
    </>
  );
}
