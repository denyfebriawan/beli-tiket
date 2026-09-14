import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { DropCard } from "@/components/drops/drop-card";
import { mockDrops } from "@/lib/mock-drops";

export default function DropsPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
          <Reveal className="mb-10">
            <h1 className="font-heading text-4xl font-semibold tracking-tight">
              Browse drops
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Every drop across every organizer on the platform, live to
              scheduled to sold out.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockDrops.map((drop, index) => (
              <Reveal key={drop.id} delay={index * 50}>
                <DropCard drop={drop} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
