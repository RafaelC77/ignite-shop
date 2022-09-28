import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import { Handbag, CaretLeft, CaretRight } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { MouseEvent, useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import Head from "next/head";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";

import { Header } from "../components/Header";
import "keen-slider/keen-slider.min.css";

import {
  ButtonLeft,
  ButtonRight,
  HomeContainer,
  Product,
} from "../styles/pages/home";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    priceFormatted: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addItem } = useShoppingCart();
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
      origin: 0.09,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <Header />

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.priceFormatted}</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();

                      addItem({
                        name: product.name,
                        id: product.id,
                        price: product.price,
                        price_id: product.defaultPriceId,
                        currency: "BRL",
                        image: product.imageUrl,
                      });
                    }}
                  >
                    <Handbag size={32} weight="bold" />
                  </button>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>

      <ButtonLeft
        onClick={() => {
          instanceRef.current.prev();
        }}
        disabled={currentSlide === 0}
      >
        <CaretLeft size={48} />
      </ButtonLeft>
      <ButtonRight
        onClick={() => {
          instanceRef.current.next();
        }}
        disabled={currentSlide === products.length - 1}
      >
        <CaretRight size={48} />
      </ButtonRight>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceFormatted: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
