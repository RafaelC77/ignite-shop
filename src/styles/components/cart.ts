import { styled } from "..";

export const CartModal = styled("div", {
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 999,

  width: "30rem",
  height: "100vh",
  padding: "4.5rem 3rem 3rem",
  backgroundColor: "$gray800",

  display: "flex",
  flexDirection: "column",

  h2: {
    fontSize: "1.25rem",
  },
});

export const CloseButton = styled("button", {
  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",

  background: "transparent",
  border: 0,
  cursor: "pointer",

  svg: {
    color: "$gray400",
  },
});

export const ProductList = styled("ul", {
  listStyle: "none",
  marginTop: "3rem",
});

export const CartItem = styled("li", {
  display: "flex",
  gap: "1.25rem",

  "& + li": {
    marginTop: "1.5rem",
  },
});

export const CartImageContainer = styled("div", {
  width: "6.375rem",
  height: "5.8125rem",
  borderRadius: "8px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
});

export const CartItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  h3: {
    fontSize: "1.125rem",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "$gray300",
  },

  span: {
    fontSize: "1.125rem",
    fontWeight: 700,
    lineHeight: 1.6,
  },

  button: {
    background: "transparent",
    border: 0,
    color: "$green500",
    lineHeight: 1.6,
    fontSize: "1rem",
    fontWeight: 700,
    width: "fit-content",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ItemAmount = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "auto",

  "span:nth-child(1)": {
    lineHeight: 1.6,
  },

  "span:nth-child(2)": {
    lineHeight: 1.6,
    fontSize: "1.125rem",
    color: "$gray300",
  },
});

export const CartTotal = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  "span:nth-child(1)": {
    lineHeight: 1.6,
    fontSize: "1.125rem",
    fontWeight: 700,
  },

  "span:nth-child(2)": {
    lineHeight: 1.6,
    fontSize: "1.5rem",
    fontWeight: 700,
  },
});

export const CompleteOrder = styled("button", {
  border: 0,
  borderRadius: 8,
  width: "100%",
  background: "$green500",
  padding: "1.25rem 0",
  marginTop: "3rem",

  color: "white",
  fontSize: "1.125rem",
  fontWeight: 700,
  lineHeight: 1.6,

  "&:hover": {
    background: "$green300",
  },
});

export const Overlay = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "calc(100vw - 30rem)",
  backgroundColor: "rgba(0, 0, 0, .5)",
});
