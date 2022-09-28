import { Handbag } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/future/image";
import Link from "next/link";

import { Cart } from "./Cart";
import logoImg from "../assets/logo.svg";

import { HeaderContainer } from "../styles/pages/app";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useShoppingCart();

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="" />
        </a>
      </Link>

      <button onClick={() => setIsCartOpen(true)}>
        <Handbag size={24} weight="bold" />
        {!!cartCount ? (
          <div>
            <span>{cartCount}</span>
          </div>
        ) : (
          ""
        )}
      </button>

      <Cart open={isCartOpen} onClose={handleCloseCart} />
    </HeaderContainer>
  );
}
