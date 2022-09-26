import { relative } from "path";
import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  button: {
    border: 0,
    backgroundColor: "$gray800",
    borderRadius: 6,
    height: "3rem",
    width: "3rem",
    position: "relative",
    cursor: "pointer",

    svg: {
      color: "$gray300",
    },

    div: {
      background: "$green500",
      borderRadius: 999,
      color: "$gray300",
      height: "1.5rem",
      width: "1.5rem",
      outline: "3px solid $gray900",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      position: "absolute",
      top: "-0.5rem",
      right: "-0.5rem",

      span: {
        color: "white",
        fontSize: "0.875rem",
        fontWeight: "bold",
        lineHeight: 0,
      },
    },
  },
});
