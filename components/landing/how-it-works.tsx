import { CalendarClock, ShieldCheck, Users } from "lucide-react";

const steps = [
  {
    icon: CalendarClock,
    title: "An organizer opens a drop",
    description:
      "A limited quantity, a price, and a start time — set once and scheduled to go live.",
  },
  {
    icon: Users,
    title: "Buyers show up at the same moment",
    description:
      "Everyone races for the same limited stock the instant the drop goes live.",
  },
  {
    icon: ShieldCheck,
    title: "Stock is claimed fairly, once",
    description:
      "Built to hold up under real concurrent load — no overselling, no duplicate charges, even under a rush.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="mx-auto mb-12 max-w-xl text-center">
        <h2 className="font-heading text-4xl font-semibold tracking-tight">
          How it works
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Three roles, one moment of truth: the second a drop goes live.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-start gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <step.icon className="size-5" />
            </div>
            <h3 className="font-heading text-lg font-medium">
              {index + 1}. {step.title}
            </h3>
            <p className="text-base text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
