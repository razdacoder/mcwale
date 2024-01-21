import ProductCard from "@/components/layouts/ProductCard";
import Heading from "@/components/ui/Heading";
import CarouselBanner from "./_components/carousel-banner";
import FeaturedCarousel from "./_components/featured-carousel";

export default function Home() {
  return (
    <main className="w-full ">
      <CarouselBanner />

      <section className="pb-12 my-12 border-b">
        <Heading className="text-xl text-center block">Top Featured</Heading>
        <FeaturedCarousel />
      </section>

      <section className="py-12 px-4 border-b">
        <Heading className="text-xl text-center block">Top Trending</Heading>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
          {[...Array(4)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
