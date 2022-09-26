import { relative } from "path";
import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginTop: "3rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  marginTop: "6.5rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  div: {
    height: "8.75rem",
    width: "8.75rem",
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 999,
    boxShadow: "0 0 60px rgba(0, 0, 0, 0.8)",
  },

  "div + div": {
    marginLeft: "-3.5rem",
  },

  img: {
    objectFit: "cover",
  },
});
