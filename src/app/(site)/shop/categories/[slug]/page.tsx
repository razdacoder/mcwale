import ProductCard from "@/components/layouts/ProductCard";
import Paginator from "../../paginator";
import MobileDrawer from "./_components/mobile-drawer";
import SortBy from "./_components/sort";

export default function ShopCategoryPage() {
  return (
    <main>
      <section className="px-3 lg:px-0 lg:container py-3 lg:py-6">
        <div className="lg:mb-6 flex flex-col lg:gap-y-6">
          <span className="hidden lg:inline-flex text-muted-foreground text-sm  gap-x-3">
            <span>Home</span>|<span>Shop</span>|<span>Categories</span>|
            <span className="font-semibold text-primary">Agbada</span>
          </span>
          <h2 className="inline-block scroll-m-20 pb-2 uppercase font-semibold tracking-wider text-lg ">
            Abgada
            <span className=" lg:hidden font-medium text-primary tracking-wider">
              &nbsp;(250 items)
            </span>
          </h2>
        </div>
      </section>
      <section className="bg-white py-6 sticky z-20 top-0">
        <div className="px-3 lg:px-0 lg:container flex justify-end lg:justify-between items-center">
          <span className="hidden lg:block text-lg font-medium text-primary tracking-wider">
            (250 items)
          </span>

          <div className="flex items-center justify-end gap-x-3">
            <MobileDrawer />
            <SortBy />
          </div>
        </div>
      </section>
      <br />
      <section className="px-3 lg:px-0 lg:container py-6">
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {[...Array(20)].map((_, index) => (
            <ProductCard
              height="h-[250px] md:h-[450px] lg:h-[550px]"
              key={index}
            />
          ))}
        </div>

        <Paginator />
      </section>
    </main>
  );
}
