import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <AuthShell
      title="Sign in"
      description="Welcome back — sign in to keep chasing drops."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-foreground underline-offset-4 hover:underline">
            Sign up
          </Link>
        </>
      }
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <span className="text-sm text-muted-foreground">Forgot password?</span>
        </div>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>

      <Button className="mt-2 w-full">Sign in</Button>
    </AuthShell>
  );
}
