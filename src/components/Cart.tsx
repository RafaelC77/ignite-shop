import { useShoppingCart } from "use-shopping-cart";
import { createPortal } from "react-dom";
import { X } from "phosphor-react";
import { useState } from "react";
import Image from "next/future/image";
import axios from "axios";

import { getStripeJs } from "../lib/stripe-js";

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

interface CartProps {
  open: boolean;
  onClose: () => void;
}

export function Cart({ open, onClose }: CartProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);
  const cart = useShoppingCart();
  const { cartDetails, cartCount, formattedTotalPrice, removeItem } = cart;

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => {
    return { ...entry };
  });

  async function handleCompleteOrder() {
    try {
      setIsCreatingCheckoutSession(true);

      const stripe = await getStripeJs();

      const checkoutItems = cartEntries.map((entry) => {
        return {
          price: entry.price_id,
          quantity: entry.quantity,
        };
      });

      const response = await axios.post("/api/checkout", {
        items: checkoutItems,
      });

      const { sessionId } = response.data;

      stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      setIsCreatingCheckoutSession(false);

      alert("Falha ao redirecionar ao checkout");
    }
  }

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
          {cartEntries.map((entry) => {
            return (
              <CartItem key={entry.id}>
                <CartImageContainer>
                  <Image src={entry.image} width={102} height={93} alt="" />
                </CartImageContainer>

                <CartItemInfo>
                  <h3>{entry.name}</h3>
                  <span>{entry.formattedValue}</span>
                  <button onClick={() => removeItem(entry.id)}>Remover</button>
                </CartItemInfo>
              </CartItem>
            );
          })}
        </ProductList>

        <ItemAmount>
          <span>Quantidade</span>
          <span>{cartCount} itens</span>
        </ItemAmount>
        <CartTotal>
          <span>Valor total</span>
          <span>{formattedTotalPrice}</span>
        </CartTotal>

        <CompleteOrder
          onClick={handleCompleteOrder}
          disabled={isCreatingCheckoutSession}
        >
          Finalizar compra
        </CompleteOrder>
      </CartModal>
    </>,
    document.getElementById("modal")
  );
}
