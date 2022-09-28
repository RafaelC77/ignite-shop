import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/future/image";
import Head from "next/head";
import Stripe from "stripe";
import axios from "axios";

import { stripe } from "../../lib/stripe";
import { Header } from "../../components/Header";

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const cart = useShoppingCart();
  const { addItem } = cart;

  async function handleAddProduct() {
    addItem({
      name: product.name,
      id: product.id,
      price: product.price,
      price_id: product.defaultPriceId,
      currency: "BRL",
      image: product.imageUrl,
    });
  }

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <Header />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.priceFormatted}</span>

          <p>{product.description}</p>

          <button
            onClick={handleAddProduct}
            disabled={isCreatingCheckoutSession}
          >
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "prod_MTa1Mqncn1I7WK" },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        priceFormatted: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60, // 1 hour
  };
};
