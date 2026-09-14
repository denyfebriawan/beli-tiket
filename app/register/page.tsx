"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signUp } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"BUYER" | "ORGANIZER">("BUYER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    const { error: signUpError } = await signUp.email({
      name,
      email,
      password,
      role,
    });

    setLoading(false);
    if (signUpError) {
      setError(signUpError.message ?? "Couldn't create your account.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <AuthShell
      title="Create an account"
      description="Buyers race for drops. Organizers create them."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>I want to</Label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-input px-3 py-2 text-sm font-medium transition-colors has-checked:border-primary has-checked:bg-accent has-checked:text-accent-foreground">
              <input
                type="radio"
                name="role"
                value="BUYER"
                checked={role === "BUYER"}
                onChange={() => setRole("BUYER")}
                className="sr-only"
              />
              Buy tickets
            </label>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-input px-3 py-2 text-sm font-medium transition-colors has-checked:border-primary has-checked:bg-accent has-checked:text-accent-foreground">
              <input
                type="radio"
                name="role"
                value="ORGANIZER"
                checked={role === "ORGANIZER"}
                onChange={() => setRole("ORGANIZER")}
                className="sr-only"
              />
              Sell tickets
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input
            id="confirm-password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button type="submit" className="mt-2 w-full" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </Button>
      </form>
    </AuthShell>
  );
}
