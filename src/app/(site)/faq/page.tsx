import Faq from "./faq-list";

export default function FAQPage() {
  return (
    <main className="container">
      <section className="my-12">
        <h2 className="block scroll-m-20 pb-2 uppercase text-center tracking-wider text-2xl font-light ">
          FAQ
        </h2>

        <Faq />
      </section>
    </main>
  );
}
