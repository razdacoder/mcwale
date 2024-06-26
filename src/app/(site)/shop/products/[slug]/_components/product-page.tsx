"use client";
import ProductCard from "@/components/layouts/ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import {
  calculateDiscountPrice,
  cn,
  formatPriceToDollar,
  getRatePrice,
} from "@/lib/utils";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/services/productServices";
import { useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddToCart from "./add-to-cart";
import PageSkeleton from "./page-skeleton";
import ProductCarousel from "./product-carousel";
import ProductColor from "./product-color";
import ProductQuantity from "./product-quantity";
import ProductSize from "./product-size";
import ProductSkeleton from "./product-skeleton";

export default function ProductPage({ slug }: { slug: string }) {
  const {
    data: product,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
  });

  const {
    data: relatedProducts,
    isError: relatedError,
    isLoading: relatedLoading,
  } = useQuery({
    queryKey: ["related-products", slug],
    queryFn: () => getRelatedProducts(slug),
  });

  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();

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
    addItem({
      product: product as Product,
      size: size!,
      color: color!,
      quantity,
    });
  };

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (isError || !product) {
    return (
      <div className="container px-4 my-12 h-[70vh] flex items-center justify-center flex-col">
        <p>Product Not Found</p>
        <Button asChild>
          <Link href="/">Back Home</Link>
        </Button>
      </div>
    );
  }

  return (
    <main>
      <section className="container px-4 py-4">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link>
          <ChevronRight className="w-4 h-4 " />
          <Link href="/shop">Shop</Link>
          <ChevronRight className="w-4 h-4 " />
          <Link
            href={`/shop/categories/${product?.category.slug}`}
            className="capitalize"
          >
            {product?.category.title}
          </Link>
          <span className="hidden md:inline">
            <ChevronRight className="w-4 h-4 " />
          </span>
          <span className="hidden md:inline font-medium text-primary truncate capitalize">
            {product?.title}
          </span>
        </span>
      </section>
      {/*  -- */}
      <section className="container px-4 flex flex-col lg:flex-row gap-y-6 gap-x-3 xl:gap-x-12">
        <div className="w-full lg:w-4/12">
          <ProductCarousel images={product?.images as string[]} />
        </div>
        <div className="w-full lg:w-6/12 py-3">
          <h3 className="uppercase tracking-wider text-xl font-medium">
            {product?.title}
          </h3>

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
                  product?.discount_percentage > 0 &&
                    "line-through text-red-500"
                )}
              >
                {getRatePrice(
                  currency,
                  product?.price,
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
              {product?.discount_percentage > 0 && (
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
              <AddToCart
                productId={product?.id}
                size={size}
                color={color}
                addToCart={addToCart}
              />
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg tracking-wider font-medium">Description:</h4>
            <p className="text-sm mt-2 tracking-wide">{product?.description}</p>
          </div>
          {/* <SizeChart /> */}
        </div>
      </section>
      <section className=" px-4 container my-12">
        {relatedProducts && relatedProducts.length > 0 && (
          <>
            <div className="mb-4">
              <h2 className="inline-block scroll-m-20 pb-2 tracking-wider relative text-xl font-medium ">
                May Also Like
              </h2>
            </div>
            {relatedLoading && (
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
                {[...Array(5)].map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
              </div>
            )}
            {relatedError && (
              <p className="text-center text-sm font-medium">
                Failed to fetch related products
              </p>
            )}
            {relatedProducts && (
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    product={relatedProduct}
                    key={relatedProduct.id}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
