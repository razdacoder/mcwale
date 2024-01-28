import Heading from "@/components/ui/Heading";
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
        <div className="flex flex-col gap-6">
          <div>
            <CheckoutForm />
          </div>
          <div className="">
            <Heading className="text-left text-sm normal-case">
              Your Order
            </Heading>
            <table className="table-auto w-full text-left">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm">
                  <td>Agbada Dress</td>
                  <td>XL</td>
                  <td>White</td>
                  <td>x 2</td>
                  <td>{formatPriceToNaira(150000)}</td>
                </tr>

                <tr className="text-base mt-3 border-t">
                  <td>Subtotal</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{formatPriceToNaira(150000)}</td>
                </tr>
                <tr className="text-base">
                  <td>Shipping</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{formatPriceToNaira(2000)}</td>
                </tr>
                <tr className="text-base">
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{formatPriceToNaira(152000)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
