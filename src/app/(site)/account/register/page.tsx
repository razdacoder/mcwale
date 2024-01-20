import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <main className="my-12 px-6">
      <h2 className="scroll-m-20 pb-2 relative text-3xl font-medium tracking-tight before:block before:content-[''] before:absolute before:bottom-0 before:w-20 before:border-[3px] before:border-primary">
        Create account
      </h2>
      <RegisterForm />
    </main>
  );
}
