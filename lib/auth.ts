import "dotenv/config";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "BUYER",
        input: true,
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        // Never trust the client for privilege level: only BUYER or
        // ORGANIZER can be self-selected at signup. ADMIN is granted
        // manually (e.g. directly in the database), never through the
        // public signup endpoint.
        before: async (user) => {
          const requestedRole = (user as { role?: unknown }).role;
          const role = requestedRole === "ORGANIZER" ? "ORGANIZER" : "BUYER";
          return { data: { ...user, role } };
        },
      },
    },
  },
  plugins: [nextCookies()],
});
