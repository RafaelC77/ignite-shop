import Image from "next/future/image";
import Link from "next/link";
import { Handbag } from "phosphor-react";
import { useState } from "react";
import logoImg from "../assets/logo.svg";
import { HeaderContainer } from "../styles/pages/app";
import { Cart } from "./Cart";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <div>
          <span>1</span>
        </div>
      </button>

      <Cart open={isCartOpen} onClose={handleCloseCart} />
    </HeaderContainer>
  );
}
