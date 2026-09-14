import Link from "next/link";
import { Ticket } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-semibold">
          <Ticket className="size-6 text-primary" />
          Beli Tiket
        </Link>

        <nav className="hidden items-center gap-6 text-base text-muted-foreground sm:flex">
          <a href="#drops" className="transition-colors hover:text-foreground">
            Live Drops
          </a>
          <a href="#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }))}>
            Sign in
          </Link>
          <Link href="/register" className={cn(buttonVariants({}))}>
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
