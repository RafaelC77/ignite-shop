import Image from "next/future/image";
import { X } from "phosphor-react";
import { createPortal } from "react-dom";
import {
  CartImageContainer,
  CartItem,
  CartItemInfo,
  CartModal,
  CartTotal,
  CloseButton,
  CompleteOrder,
  ItemAmount,
  Overlay,
  ProductList,
} from "../styles/components/cart";

import tee1 from "../assets/tees/1.png";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export function Cart({ open, onClose }: CartProps) {
  if (!open) return null;

  return createPortal(
    <>
      <Overlay onClick={onClose} />
      <CartModal>
        <CloseButton onClick={onClose}>
          <X size={24} weight="bold" />
        </CloseButton>

        <h2>Sacola de compras</h2>

        <ProductList>
          <CartItem>
            <CartImageContainer>
              <Image src={tee1} width={102} height={93} alt="" />
            </CartImageContainer>

            <CartItemInfo>
              <h3>Camiseta Beyond the limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </CartItemInfo>
          </CartItem>

          <CartItem>
            <CartImageContainer>
              <Image src={tee1} width={102} height={93} alt="" />
            </CartImageContainer>

            <CartItemInfo>
              <h3>Camiseta Beyond the limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </CartItemInfo>
          </CartItem>

          <CartItem>
            <CartImageContainer>
              <Image src={tee1} width={102} height={93} alt="" />
            </CartImageContainer>

            <CartItemInfo>
              <h3>Camiseta Beyond the limits</h3>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </CartItemInfo>
          </CartItem>
        </ProductList>

        <ItemAmount>
          <span>Quantidade</span>
          <span>3 itens</span>
        </ItemAmount>
        <CartTotal>
          <span>Valor total</span>
          <span>R$ 270,00</span>
        </CartTotal>

        <CompleteOrder>Finalizar compra</CompleteOrder>
      </CartModal>
    </>,
    document.getElementById("modal")
  );
}
