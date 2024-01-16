import ProductCard from "@/components/layouts/ProductCard";
import CarouselBanner from "./_components/carousel-banner";
import ContactForm from "./_components/contact-form";
import FeaturedCarousel from "./_components/featured-carousel";

export default function Home() {
  return (
    <main className="w-full ">
      <CarouselBanner />
      <section className="pb-12 my-12 border-b p-1">
        <div className="text-center mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider relative text-3xl font-light before:flex before:justify-center before:content-[''] before:absolute before:bottom-0 before:w-full before:border-b-[3px] before:border-primary">
            Featured
          </h2>
        </div>
        <FeaturedCarousel />
      </section>
      <section className="py-12 border-b">
        <div className="text-center mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider relative text-3xl font-light before:flex before:justify-center before:content-[''] before:absolute before:bottom-0 before:w-full before:border-b-[3px] before:border-primary">
            Trending
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6">
          {[...Array(6)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
      <section id="contact" className="py-12 px-6 border-b">
        <div className="text-center mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider relative text-3xl font-light before:flex before:justify-center before:content-[''] before:absolute before:bottom-0 before:w-full before:border-b-[3px] before:border-primary">
            Contact us
          </h2>
        </div>
        <div className="flex mt-12 gap-x-12 items-center">
          <div className="w-full lg:w-2/6">
            <ContactForm />
          </div>
          <div className="hidden lg:block w-4/6">
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
          </div>
        </div>
      </section>
    </main>
  );
}
