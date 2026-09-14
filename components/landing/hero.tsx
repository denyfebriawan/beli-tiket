import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
      <Reveal>
        <span className="rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          Multi-vendor ticket &amp; limited-drop marketplace
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="max-w-2xl text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Score the drop before it&apos;s gone.
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="max-w-xl text-balance text-lg text-muted-foreground">
          Organizers list limited-quantity tickets and merch drops. Buyers race
          to claim one the moment it goes live — fairly, with no overselling,
          even when thousands show up at once.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#drops" className={cn(buttonVariants({ size: "lg" }))}>
            Browse Live Drops
          </a>
          <a
            href="#how-it-works"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            How it works
          </a>
        </div>
      </Reveal>
    </section>
  );
}
