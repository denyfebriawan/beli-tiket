import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
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
      <div className="flex flex-col gap-1.5">
        <Label>I want to</Label>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-input px-3 py-2 text-sm font-medium transition-colors has-checked:border-primary has-checked:bg-accent has-checked:text-accent-foreground">
            <input type="radio" name="role" value="BUYER" defaultChecked className="sr-only" />
            Buy tickets
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-input px-3 py-2 text-sm font-medium transition-colors has-checked:border-primary has-checked:bg-accent has-checked:text-accent-foreground">
            <input type="radio" name="role" value="ORGANIZER" className="sr-only" />
            Sell tickets
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="confirm-password">Confirm password</Label>
        <Input id="confirm-password" type="password" placeholder="••••••••" />
      </div>

      <Button className="mt-2 w-full">Create account</Button>
    </AuthShell>
  );
}
