import ProductCard from "@/components/layouts/ProductCard";
import Link from "next/link";
import Paginator from "../../paginator";
import MobileDrawer from "./_components/mobile-drawer";
import SortBy from "./_components/sort";

export default function ShopCategoryPage() {
  return (
    <main>
      <section className="px-3 lg:px-0 lg:container py-3 lg:py-6">
        <div className="lg:mb-6 flex flex-col lg:gap-y-6">
          <span className="hidden lg:inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>|<Link href="/shop">Shop</Link>|
            <span className="font-meidum text-primary">Agbada</span>
          </span>
          <h2 className="hidden lg:inline-block scroll-m-20 pb-2 uppercase font-medium tracking-wider text-xl ">
            Abgada
          </h2>
        </div>
      </section>
      <section className="bg-white py-6 sticky z-20 top-0">
        <div className="px-3 lg:px-0 lg:container flex justify-between items-center">
          <div className="flex gap-x-3 items-end">
            <h2 className=" lg:hidden scroll-m-20 uppercase font-medium tracking-wider text-xl ">
              Abgada
              {/* <span className=" lg:hidden font-medium text-primary tracking-wider">
              &nbsp;(250 items)
            </span> */}
            </h2>
            <span className="block text-sm lg:text-lg font-medium text-primary tracking-wider">
              (250 items)
            </span>
          </div>

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
