import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <main className="my-12 px-6">
      <h2 className="scroll-m-20 pb-2 relative text-xl block text-center uppercase font-medium tracking-tight ">
        Create account
      </h2>
      <RegisterForm />
    </main>
  );
}
