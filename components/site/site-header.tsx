import { headers } from "next/headers";
import Link from "next/link";
import { Ticket } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import { auth } from "@/lib/auth";
import { signOutAction } from "@/lib/actions/sign-out";

export async function SiteHeader() {
  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-xl font-semibold">
          <Ticket className="size-6 text-primary" />
          Beli Tiket
        </Link>

        <nav className="hidden items-center gap-6 text-base text-muted-foreground sm:flex">
          <Link href="/drops" className="transition-colors hover:text-foreground">
            Live Drops
          </Link>
          <Link href="/#how-it-works" className="transition-colors hover:text-foreground">
            How it works
          </Link>
        </nav>

        {session ? (
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {session.user.name}
            </span>
            <form action={signOutAction}>
              <Button variant="outline" type="submit">
                Sign out
              </Button>
            </form>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }))}>
              Sign in
            </Link>
            <Link href="/register" className={cn(buttonVariants({}))}>
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
