import ProductCard from "@/components/layouts/ProductCard";
import Heading from "@/components/ui/Heading";
import CarouselBanner from "./_components/carousel-banner";
import Category from "./_components/categories";
import FeaturedCarousel from "./_components/featured-carousel";

export default function Home() {
  return (
    <main className="w-full ">
      <CarouselBanner />
      <section className="py-12 px-3 md:px-6 lg:px-12 border-b">
        <Heading>Build your look</Heading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[...Array(4)].map((_, index) => (
            <Category key={index} />
          ))}
        </div>
      </section>
      <section className="pb-12 px-3 my-12 border-b md:px-6 lg:px-12">
        <Heading>Top Featured</Heading>
        <FeaturedCarousel />
      </section>

      <section className="py-12 px-1 md:px-0 border-b">
        <Heading>Top Trending</Heading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 md:px-6 lg:px-12">
          {[...Array(3)].map((_, index) => (
            <ProductCard height="lg:h-[600px]" key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
