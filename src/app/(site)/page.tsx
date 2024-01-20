import ProductCard from "@/components/layouts/ProductCard";
import Heading from "@/components/ui/Heading";
import CarouselBanner from "./_components/carousel-banner";
import Category from "./_components/categories";
import FeaturedCarousel from "./_components/featured-carousel";

export default function Home() {
  return (
    <main className="w-full ">
      <CarouselBanner />
      <section className="py-12 px-4 border-b">
        <Heading className="text-xl text-center block">Build your look</Heading>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <Category key={index} />
          ))}
        </div>
      </section>
      <section className="pb-12 px-4 my-12 border-b">
        <Heading className="text-xl text-center block">Top Featured</Heading>
        <FeaturedCarousel />
      </section>

      <section className="py-12 px-4 border-b">
        <Heading className="text-xl text-center block">Top Trending</Heading>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12">
          {[...Array(3)].map((_, index) => (
            <ProductCard height="h-[450px] lg:h-[600px]" key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
