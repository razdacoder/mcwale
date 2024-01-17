import ContactForm from "../_components/contact-form";

export default function ContactPage() {
  return (
    <main className="">
      <h2 className="block scroll-m-20 my-12 pb-2 uppercase text-center tracking-wider text-2xl font-light ">
        Contact us
      </h2>
      <section className="container my-12">
        <ContactForm />
      </section>
      <section className="container my-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63407.70778848787!2d3.3623882620029213!3d6.649184994961953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103beda11374314b%3A0xdbc726e7e78bd410!2sMcWale!5e0!3m2!1sen!2sng!4v1704905732361!5m2!1sen!2sng"
          width="100%"
          height="450"
          // style="border:0;"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
