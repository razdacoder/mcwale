"use client";
import ProductCard from "@/components/layouts/ProductCard";
import ReviewStars from "@/components/ui/review-stars";
import { formatPriceToNaira } from "@/lib/utils";
import AddToCart from "./_components/add-to-cart";
import ProductCarousel from "./_components/product-carousel";
import ProductQuantity from "./_components/product-quantity";
import ProductSize from "./_components/product-size";
import ReviewForm from "./_components/review-from";
import SizeChart from "./_components/size-chart";

export default function ProductPage() {
  return (
    <main className="px-3 lg:px-0 lg:container my-6">
      <section className="flex flex-col md:flex-row pb-12 gap-x-4">
        <div className="w-full md:w-7/12 lg:w-6/12">
          <ProductCarousel />
        </div>
        <div className="w-full md:w-5/12 lg:w-5/12 py-3">
          <h3 className="uppercase tracking-wider text-xl font-light">
            Rolling Stone Spotted Logo Shirt
          </h3>
          <div className="flex gap-x-3 items-center mt-4">
            <ReviewStars rating={4} />
            <span className="text-sm text-muted-foreground">10 reviews</span>
          </div>
          <div className="mt-4 flex items-center gap-x-3">
            <span className="text-lg font-light tracking-wider text-red-500">
              {formatPriceToNaira(75000)}
            </span>
            <span className="text-lg font-light tracking-wider text-primary/90 line-through">
              {formatPriceToNaira(90000)}
            </span>
            <span className="text-sm text-muted-foreground">15% OFF</span>
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-light">Size</h4>
            <ProductSize />
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-light">Quantity</h4>
            <ProductQuantity />
          </div>
          <p className="mt-6 font-light">Shipping calculated at checkout</p>
          <div className="mt-6 flex gap-x-3 items-center">
            <AddToCart />
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-light">Description</h4>
            <p className="text-sm mt-2 font-light tracking-wide">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              impedit cum natus eius totam ducimus delectus velit minima
              recusandae, consectetur sit ex fugit voluptates quis?
            </p>
          </div>
          <SizeChart />
        </div>
      </section>
      <section className="my-12">
        <div className="text-center mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider relative text-sxl font-light before:flex before:justify-center before:content-[''] before:absolute before:bottom-0 before:w-full before:border-b-[3px] before:border-primary">
            you may also like
          </h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
          {[...Array(4)].map((_, index) => (
            <ProductCard height="h-[350px] md:h-[400px]" key={index} />
          ))}
        </div>
      </section>
      <section className="my-12">
        <div className="text-center mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider relative text-xl font-light before:flex before:justify-center before:content-[''] before:absolute before:bottom-0 before:w-full before:border-b-[3px] before:border-primary">
            reviews
          </h2>
        </div>
        <div className="flex lg:gap-x-6 py-6 flex-col lg:flex-row gap-y-3 lg:gap-y-0">
          <div className="px-6 shadow-md py-4 border">
            <div className="flex justify-between lg:gap-x-8 items-center">
              <div className="flex items-end gap-x-3">
                <span className="font-bold text-3xl text-primary/90">5.0</span>
                <ReviewStars rating={5.0} />
              </div>
              <span className="text-xs text-muted-foreground">
                1 <br /> Total Reviews
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

          <div className="flex-1 flex flex-col gap-y-3 font-light text-sm ">
            <div className="flex justify-end">
              <ReviewForm />
            </div>

            <div className="flex gap-x-3 border shadow-md py-4 px-6">
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-black/90 text-white flex justify-center items-center text-sm">
                A
              </div>
              <div className="flex flex-1 justify-between text-xs lg:text-sm">
                <div className="flex flex-col gap-y-6 justify-between">
                  <div>
                    <h6>Seth. K</h6>
                    <ReviewStars rating={5} className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h6>Great design and quality</h6>
                    <p>
                      Love the design and quality of the shirt. Fits true to
                      size. The easy care fabric is a bonus. Would buy again.
                    </p>
                  </div>
                </div>
                <span>01/10/2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
