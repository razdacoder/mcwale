import ProductCard from "@/components/layouts/ProductCard";
import Link from "next/link";
import Paginator from "../../paginator";
import MobileDrawer from "./_components/mobile-drawer";
import SortBy from "./_components/sort";

export default function ShopCategoryPage() {
  return (
    <main className="relative">
      <section className="px-3 lg:px-0 lg:container py-3 ">
        <div className="lg:mb-3 flex flex-col gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>|<Link href="/shop">Shop</Link>|
            <span className="font-meidum text-primary">Agbada</span>
          </span>
          <h2 className="block gap-x-3 scroll-m-20 uppercase font-medium tracking-wider text-lg ">
            Abgada
          </h2>
        </div>
      </section>
      <section className="bg-white py-3">
        <div className="px-3 lg:px-0 lg:container flex justify-between items-center">
          <span className="hidden lg:block text-sm lg:text-lg font-medium text-primary tracking-wider">
            (250 items)
          </span>

          <div className="flex items-center justify-end gap-x-3">
            <MobileDrawer />
            <SortBy />
          </div>
        </div>
      </section>
      <br />
      <section className="px-3 lg:px-0 lg:container py-3">
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
