import ProductCard from "@/components/layouts/ProductCard";
import ReviewStars from "@/components/ui/review-stars";
import { formatPriceToNaira } from "@/lib/utils";
import Link from "next/link";
import AddToCart from "./_components/add-to-cart";
import ProductCarousel from "./_components/product-carousel";
import ProductColor from "./_components/product-color";
import ProductQuantity from "./_components/product-quantity";
import ProductSize from "./_components/product-size";
import ReviewForm from "./_components/review-from";
import ReviewsList from "./_components/review-list";
import SizeChart from "./_components/size-chart";

export default function ProductPage() {
  return (
    <>
      <section className="container px-4 py-4">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link>|<Link href="/shop">Shop</Link>|
          <Link href="/shop/categories/agbada">Agbada</Link>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline font-meidum text-primary truncate">
            Rolling Stone Spotted Logo Shirt
          </span>
        </span>
      </section>
      <section className="lg:container lg:px-4 flex flex-col lg:flex-row gap-y-6 gap-x-3 xl:gap-x-12">
        <div className="w-full lg:w-5/12 px-4 lg:px-0">
          <ProductCarousel />
        </div>
        <div className="w-full container px-4 lg:w-6/12 py-3 lg:px-0">
          <h3 className="uppercase tracking-wider text-xl font-medium">
            Rolling Stone Spotted Logo Shirt
          </h3>
          <div className="flex gap-x-3 items-center mt-4">
            <ReviewStars rating={4} />
            <span className="text-sm text-muted-foreground">10 reviews</span>
          </div>
          <div className="mt-4 flex items-center gap-x-3">
            <span className="text-lg font-medium tracking-wider text-red-500">
              {formatPriceToNaira(75000)}
            </span>
            <span className="text-lg font-medium tracking-wider text-primary/90 line-through">
              {formatPriceToNaira(90000)}
            </span>
            <span className="text-sm text-muted-foreground">15% OFF</span>
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Size</h4>
            <ProductSize />
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Color</h4>
            <ProductColor />
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Quantity</h4>
            <ProductQuantity />
          </div>

          <div className="mt-6 flex gap-x-3 items-center">
            <AddToCart />
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Description</h4>
            <p className="text-sm mt-2 font-medium tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              impedit cum natus eius totam ducimus delectus velit minima
              recusandae, consectetur sit ex fugit voluptates quis?
            </p>
          </div>
          <SizeChart />
        </div>
      </section>
      <section className=" px-4 lg:container my-12">
        <div className="mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 tracking-wider relative text-xl font-medium ">
            May Also Like
          </h2>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {[...Array(5)].map((_, index) => (
            <ProductCard height="h-[220px] md:h-[350px]" key={index} />
          ))}
        </div>
      </section>
      <section className="px-4 lg:container my-12">
        <div className=" mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 text-center tracking-wider relative text-xl font-medium ">
            Reviews
          </h2>
        </div>
        <div className="flex lg:gap-x-6 py-6 flex-col lg:flex-row gap-y-3 lg:gap-y-0">
          <div className="px-6 lg:w-4/12 shadow-md py-4 border">
            <div className="flex justify-between lg:gap-x-3 items-center">
              <div className="flex items-end gap-x-3">
                <span className="font-bold text-2xl text-primary/90">5.0</span>
                <ReviewStars className="w-4 h-4" rating={5.0} />
              </div>
              <span className="text-xs text-muted-foreground">
                1 <br /> Reviews
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2 text-sm">
                <span>5</span>
                <div className="flex-1 bg-black/90 h-2 w-full rounded"></div>
                <span>1</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm">
                <span>4</span>
                <div className="flex-1 bg-slate-200 h-2 w-full rounded"></div>
                <span>0</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm">
                <span>3</span>
                <div className="flex-1 bg-slate-200 h-2 w-full rounded"></div>
                <span>0</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm">
                <span>2</span>
                <div className="flex-1 bg-slate-200 h-2 w-full rounded"></div>
                <span>0</span>
              </div>
              <div className="flex items-center gap-x-2 text-sm">
                <span>1</span>
                <div className="flex-1 bg-slate-200 h-2 w-full rounded"></div>
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="lg:w-8/12 flex flex-col gap-y-6 font-medium text-sm ">
            <div className="flex justify-end">
              <ReviewForm />
            </div>

            <ReviewsList />
          </div>
        </div>
      </section>
    </>
  );
}
