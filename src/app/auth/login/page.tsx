import Heading from "@/components/ui/Heading";
import LogoBig from "@/components/ui/LogoBig";
import { validateRequest } from "@/services/actions";
import { redirect } from "next/navigation";
import LoginForm from "./login-form";

export default async function LoginPage() {
  const { isValid } = await validateRequest();
  if (isValid) {
    return redirect("/admin");
  }
  return (
    <main className="w-full h-dvh flex justify-center items-center">
      <div>
        <div className="flex justify-center">
          <LogoBig />
        </div>

        <div className="my-6">
          <Heading className="capitalize mb-2">Login</Heading>
          <p className="text-sm text-gray-400">
            Enter your credentials to access the mcwale dashboard.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
