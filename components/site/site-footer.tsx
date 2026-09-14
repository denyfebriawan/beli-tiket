import { Ticket } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-base text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2 font-heading text-lg font-medium text-foreground">
          <Ticket className="size-5 text-primary" />
          Beli Tiket
        </div>
        <p>&copy; {new Date().getFullYear()} Beli Tiket. All rights reserved.</p>
      </div>
    </footer>
  );
}
