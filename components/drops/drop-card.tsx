import { Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MockDrop } from "@/lib/mock-drops";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function StatusBadge({ status }: { status: MockDrop["status"] }) {
  if (status === "LIVE") {
    return (
      <Badge className="gap-1.5">
        <span className="size-1.5 animate-pulse rounded-full bg-primary-foreground" />
        Live
      </Badge>
    );
  }

  if (status === "SOLD_OUT") {
    return <Badge variant="secondary">Sold out</Badge>;
  }

  return (
    <Badge variant="outline" className="gap-1">
      <Clock />
      Upcoming
    </Badge>
  );
}

export function DropCard({ drop }: { drop: MockDrop }) {
  const soldOut = drop.status === "SOLD_OUT";

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/40">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{drop.name}</CardTitle>
          <StatusBadge status={drop.status} />
        </div>
        <CardDescription>by {drop.organizerName}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="font-heading text-xl font-semibold">
          {currencyFormatter.format(drop.price)}
        </span>
        <span className="text-muted-foreground">
          {soldOut
            ? "0 left"
            : `${drop.remaining} / ${drop.totalQuantity} left`}
        </span>
      </CardContent>
      <CardContent className="text-sm text-muted-foreground">
        {drop.status === "SCHEDULED" ? "Starts " : "Started "}
        {dateFormatter.format(drop.startsAt)}
      </CardContent>
    </Card>
  );
}
