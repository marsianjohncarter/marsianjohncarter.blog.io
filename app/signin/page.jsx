
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signin } from "@/actions/auth/actions";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";

export default async function SignInPage() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  if (data?.user) {
    redirect("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to login to your account
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <Button formAction={signin} className="w-full">Sign In</Button>
          </form>
        </CardContent>

      </Card>
    </main>
  );
}