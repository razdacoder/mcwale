import ProductCard from "@/components/layouts/ProductCard";
import Heading from "@/components/ui/Heading";
import CarouselBanner from "./_components/carousel-banner";
import Category from "./_components/categories";
import FeaturedCarousel from "./_components/featured-carousel";

export default async function Home() {
  return (
    <>
      <CarouselBanner />
      <section className="py-12 px-4 border-b">
        <Heading className="text-xl normal-case text-left block">
          Shop by Category
        </Heading>

        <Category />
      </section>

      <section className="pb-12 my-12 border-b">
        <div className="px-4">
          <Heading className="text-xl text-left normal-case block">
            Top Featured
          </Heading>
        </div>

        <FeaturedCarousel />
      </section>

      <section className="py-12 px-4 border-b">
        <Heading className="text-xl normal-case text-left block">
          New Arrivals
        </Heading>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
          {[...Array(4)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
