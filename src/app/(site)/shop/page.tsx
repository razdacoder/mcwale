import ProductCard from "@/components/layouts/ProductCard";
// import Filters from "./_components/filters";
// import MobileDrawer from "./_components/mobile-drawer";
import Paginator from "./paginator";

export default function ShopPage() {
  return (
    <main>
      <section className="px-6 py-6 border-b">
        <div className="text-center mb-6">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider text-xl font-light ">
            Products
          </h2>
        </div>

        {/* <MobileDrawer />
        <Filters /> */}
      </section>
      <section className="py-6 px-2 lg:px-6">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-6">
          {[...Array(20)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>

        <Paginator />
      </section>
    </main>
  );
}
