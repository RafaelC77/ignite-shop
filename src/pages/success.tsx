import { GetServerSideProps } from "next";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

import logo from "../assets/logo.svg";
import tee1 from "../assets/tees/1.png";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <Image src={logo} alt="" />

        <ImageContainer>
          <div>
            <Image src={tee1} width={140} height={140} alt="" />
          </div>
          <div>
            <Image src={tee1} width={140} height={140} alt="" />
          </div>
          <div>
            <Image src={tee1} width={140} height={140} alt="" />
          </div>
        </ImageContainer>

        <h1>Compra Efetuada!</h1>

        <p>
          Uhuul <strong>Fulano</strong>, sua compra de X camisetas sdgsf já está
          a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

/* export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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
  const product = session.line_items.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
}; */
