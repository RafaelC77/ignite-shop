import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";
import logo from "../assets/logo.svg";

import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Image src={logo} alt="" />

        <ImageContainer>
          {products.map((product) => {
            return (
              <div key={product.name}>
                <Image src={product.imageUrl} width={140} height={140} alt="" />
              </div>
            );
          })}
        </ImageContainer>

        <h1>Compra Efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          {products.length <= 1
            ? products[0].name
            : `${products.length} camisetas`}{" "}
          já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data.map((item) => {
    const prod = item.price.product as Stripe.Product;

    return {
      name: prod.name,
      imageUrl: prod.images[0],
    };
  });

  return {
    props: {
      customerName,
      products,
    },
  };
};
