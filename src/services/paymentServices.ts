import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export async function getPaymentLink(
  amount: number,
  currency: string,
  name: string,
  email: string,
  phonenumber: string
) {
  const response = await axios.post(
    "https://api.flutterwave.com/v3/payments",
    {
      tx_ref: uuidv4(),
      amount,
      currency,
      redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",

      customer: {
        email,
        phonenumber,
        name,
      },
      customizations: {
        title: "McWale Checkout",
        logo: "http://www.piedpiper.com/app/themes/joystick-v27/images/logo.png",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLW_SECRET_KEY}`,
      },
    }
  );

  if (response.status != 200) {
    throw new Error("Could not get Payment Link");
  }
  return response.data;
}
