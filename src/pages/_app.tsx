import { CartProvider } from "use-shopping-cart";
import { Container } from "../styles/pages/app";
import { globalStyles } from "../styles/global";
import { getStripeJs } from "../lib/stripe-js";

globalStyles();

const stripeJs = getStripeJs();

export default function App({ Component, pageProps }) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={String(stripeJs)}
      currency="BRL"
    >
      <Container>
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
