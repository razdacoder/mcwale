import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { formatPriceToNaira } from "@/lib/utils";
import CheckoutForm from "./checkout-form";

export default function CheckoutPage() {
  return (
    <main className="px-4 container py-6">
      <section className="py-3">
        <Heading className="text-left text-xl normal-case">Checkout</Heading>
      </section>
      <section>
        <Heading className="text-left text-base normal-case">
          Billing Details
        </Heading>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3">
            <CheckoutForm />
          </div>
          <div className="lg:w-1/3">
            <Heading className="text-left text-lg normal-case">
              Your Order <span className="text-sm">(1 item)</span>
            </Heading>
            <div className="grid grid-cols-5 text-sm font-medium py-3">
              <span>Product</span>
              <span>Size</span>
              <span>Color</span>
              <span>Quantity</span>
              <span>Total</span>
            </div>
            <div className="grid grid-cols-5 text-xs font-light py-3">
              <span>Agbada Dress</span>
              <span>XL</span>
              <span>White</span>
              <span>x 2</span>
              <span className="text-xs">{formatPriceToNaira(150000)}</span>
            </div>
            <div className="grid grid-cols-5 text-sm font-medium border-t py-3">
              <span>Subtotal</span>
              <span></span>
              <span></span>
              <span></span>
              <span className="text-xs">{formatPriceToNaira(150000)}</span>
            </div>
            <div className="grid grid-cols-5 text-xs font-medium border-t py-3">
              <span>Shipping</span>
              <span></span>
              <span></span>
              <span></span>
              <span className="text-xs">{formatPriceToNaira(2000)}</span>
            </div>
            <div className="grid grid-cols-5 text-sm font-medium border-t py-3">
              <span>Total</span>
              <span></span>
              <span></span>
              <span></span>
              <span className="text-xs">{formatPriceToNaira(152000)}</span>
            </div>

            <div className="mt-4 w-full">
              <Button size="lg" className="w-full">
                Pay
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
