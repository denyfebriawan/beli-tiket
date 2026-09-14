// Temporary placeholder data for the landing page's drop preview grid.
// Replace with a real Prisma query (`db.drop.findMany(...)`) once the
// public browsing feature (PLANNING.md build order, step 5) is built.

export type MockDropStatus = "LIVE" | "SCHEDULED" | "SOLD_OUT";

export interface MockDrop {
  id: string;
  name: string;
  organizerName: string;
  price: number;
  totalQuantity: number;
  remaining: number;
  startsAt: Date;
  status: MockDropStatus;
}

export const mockDrops: MockDrop[] = [
  {
    id: "1",
    name: "Neon Nights Festival — GA Pass",
    organizerName: "Neon Collective",
    price: 45,
    totalQuantity: 500,
    remaining: 32,
    startsAt: new Date("2026-09-14T20:00:00"),
    status: "LIVE",
  },
  {
    id: "2",
    name: "Retro Runner Sneaker Drop",
    organizerName: "SoleForge",
    price: 120,
    totalQuantity: 150,
    remaining: 0,
    startsAt: new Date("2026-09-10T09:00:00"),
    status: "SOLD_OUT",
  },
  {
    id: "3",
    name: "Midnight Comedy Club — Late Show",
    organizerName: "Laugh Track Live",
    price: 25,
    totalQuantity: 80,
    remaining: 80,
    startsAt: new Date("2026-09-20T23:00:00"),
    status: "SCHEDULED",
  },
  {
    id: "4",
    name: "Artisan Ramen Pop-Up Ticket",
    organizerName: "Umami Underground",
    price: 18,
    totalQuantity: 200,
    remaining: 64,
    startsAt: new Date("2026-09-15T18:30:00"),
    status: "LIVE",
  },
  {
    id: "5",
    name: "Analog Photography Workshop",
    organizerName: "Silver Halide Studio",
    price: 60,
    totalQuantity: 20,
    remaining: 6,
    startsAt: new Date("2026-09-14T14:00:00"),
    status: "LIVE",
  },
  {
    id: "6",
    name: "Arena Rock Reunion Tour — Floor Seats",
    organizerName: "Loudwire Presents",
    price: 190,
    totalQuantity: 400,
    remaining: 0,
    startsAt: new Date("2026-08-28T19:00:00"),
    status: "SOLD_OUT",
  },
  {
    id: "7",
    name: "Limited Screen-Print Art Drop",
    organizerName: "Paper Kiln Press",
    price: 35,
    totalQuantity: 100,
    remaining: 100,
    startsAt: new Date("2026-09-25T10:00:00"),
    status: "SCHEDULED",
  },
  {
    id: "8",
    name: "Trail Run Series — Race Bib",
    organizerName: "Ridgeline Events",
    price: 55,
    totalQuantity: 300,
    remaining: 118,
    startsAt: new Date("2026-09-14T21:00:00"),
    status: "LIVE",
  },
];
