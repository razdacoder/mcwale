"use client";
import ReviewStars from "@/components/ui/review-stars";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Product } from "@/lib/types";
import {
  calculateDiscountPrice,
  cn,
  formatPriceToDollar,
  getRatePrice,
} from "@/lib/utils";
import { getProductBySlug } from "@/services/productServices";
import { useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddToCart from "./add-to-cart";
import ProductCarousel from "./product-carousel";
import ProductColor from "./product-color";
import ProductQuantity from "./product-quantity";
import ProductSize from "./product-size";
import ReviewForm from "./review-from";
import ReviewsList from "./review-list";
import SizeChart from "./size-chart";

export default function ProductPage({ slug }: { slug: string }) {
  const supabase = useSupabaseBrowser();
  const { data } = useQuery(getProductBySlug(supabase, slug));
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();
  const product: Product = data;
  const { addItem } = useCartStore();

  const [isClient, setIsClient] = useState(false);
  const [size, setSize] = useState<string>();
  const [color, setColor] = useState<string>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addToCart = () => {
    if (!size || !color) return;
    addItem({ product, size: size!, color: color!, quantity });
  };

  return (
    <main>
      <section className="container px-4 py-4">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link>|<Link href="/shop">Shop</Link>|
          <Link
            href={`/shop/categories/${product?.category.slug}`}
            className="capitalize"
          >
            {product?.category.title}
          </Link>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline font-meidum text-primary truncate capitalize">
            {product?.name}
          </span>
        </span>
      </section>
      {/*  -- */}
      <section className="container px-4 flex flex-col lg:flex-row gap-y-6 gap-x-3 xl:gap-x-12">
        <div className="w-full lg:w-5/12">
          <ProductCarousel images={product.images} />
        </div>
        <div className="w-full lg:w-6/12 py-3">
          <h3 className="uppercase tracking-wider text-xl font-medium">
            {product.name}
          </h3>
          <div className="flex gap-x-3 items-center mt-4">
            <ReviewStars rating={4} />
            <span className="text-sm text-muted-foreground">10 reviews</span>
          </div>
          {isClient ? (
            <div className="mt-4 flex items-center gap-x-3">
              {product?.discount_percentage > 0 && (
                <span className="text-lg font-medium tracking-wider">
                  {getRatePrice(
                    currency,
                    calculateDiscountPrice(
                      product?.price,
                      product?.discount_percentage
                    ),
                    currency === "USD" ? null : rate[currency]
                  )}
                </span>
              )}

              <span
                className={cn(
                  "text-lg font-medium tracking-wider text-primary/90",
                  product.discount_percentage > 0 && "line-through text-red-500"
                )}
              >
                {getRatePrice(
                  currency,
                  product.price,
                  currency === "USD" ? null : rate[currency]
                )}
              </span>
              {product?.discount_percentage > 0 && (
                <span className="text-sm text-muted-foreground">
                  {product?.discount_percentage}% OFF
                </span>
              )}
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-x-3">
              {product.discount_percentage > 0 && (
                <span className="text-lg font-medium tracking-wider">
                  {formatPriceToDollar(
                    calculateDiscountPrice(
                      product?.price,
                      product?.discount_percentage
                    )
                  )}
                </span>
              )}

              <span
                className={cn(
                  "text-lg font-medium tracking-wider text-primary/90",
                  product?.discount_percentage > 0 &&
                    "line-through text-red-500"
                )}
              >
                {formatPriceToDollar(product?.price)}
              </span>
              {product?.discount_percentage > 0 && (
                <span className="text-sm text-muted-foreground">
                  {product?.discount_percentage}% OFF
                </span>
              )}
            </div>
          )}

          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Size</h4>
            <ProductSize setSize={(value: string) => setSize(value)} />
          </div>
          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Color</h4>
            <ProductColor setColor={(value: string) => setColor(value)} />
          </div>
          <div className="flex items-end gap-x-3">
            <div className="mt-6">
              <h4 className="text-lg tracking-wider font-medium">Quantity</h4>
              <ProductQuantity
                quantity={quantity}
                setQuantity={(value: number) => setQuantity(value)}
              />
            </div>
            <div className="mt-5 flex gap-x-3 items-center">
              <AddToCart size={size} color={color} addToCart={addToCart} />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Description:</h4>
            <p className="text-sm mt-2 tracking-wide">{product?.description}</p>
          </div>
          <SizeChart />
        </div>
      </section>
      <section className=" px-4 container my-12">
        <div className="mb-4">
          <h2 className="inline-block scroll-m-20 pb-2 tracking-wider relative text-xl font-medium ">
            May Also Like
          </h2>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
          {[...Array(5)].map((_, index) => (
            // <ProductCard height="h-[220px] md:h-[300px]" key={index} />
            <span key={index}>Hi</span>
          ))}
        </div>
      </section>
      <section className="px-4 container my-12">
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
    </main>
  );
}
