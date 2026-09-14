import type { ReactNode } from "react";
import Link from "next/link";
import { Ticket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function AuthShell({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <Link
        href="/"
        className="mb-8 flex items-center gap-2 font-heading text-xl font-semibold"
      >
        <Ticket className="size-6 text-primary" />
        Beli Tiket
      </Link>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">{children}</CardContent>
      </Card>

      <p className="mt-6 text-sm text-muted-foreground">{footer}</p>
    </div>
  );
}
