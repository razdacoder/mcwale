import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <main className="my-12 px-6">
      <div className="text-center mb-4">
        <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider text-xl font-medium ">
          login
        </h2>
      </div>
      <LoginForm />
    </main>
  );
}
