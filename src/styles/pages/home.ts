import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  minHeight: 656,
});

export const Product = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",

  img: {
    objectFit: "fill",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    div: {
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem",
    },

    button: {
      border: 0,
      backgroundColor: "$green500",
      borderRadius: 6,
      height: "3.5rem",
      width: "3.5rem",
      cursor: "pointer",

      svg: {
        color: "white",
      },

      "&:hover": {
        backgroundColor: "$green300",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const ButtonLeft = styled("button", {
  position: "absolute",
  top: "50%",
  left: "1.5rem",

  backgroundColor: "transparent",
  border: 0,

  svg: {
    color: "$gray300",
  },

  "&:disabled": {
    visibility: "hidden",
  },
});

export const ButtonRight = styled("button", {
  position: "absolute",
  top: "50%",
  right: "1.5rem",

  backgroundColor: "transparent",
  border: 0,

  svg: {
    color: "$gray300",
  },

  "&:disabled": {
    visibility: "hidden",
  },
});
