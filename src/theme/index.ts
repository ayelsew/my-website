import { createGlobalStyle, DefaultTheme } from "styled-components"
import localFont from "@next/font/local";

// @ts-ignore
const roboto = localFont({ 
  src: [
    {
      path: "../../public/fonts/Roboto/Roboto-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../../public/fonts/Roboto/Roboto-Bold.ttf",
      weight: "700",
      style: "normal"
    }
  ]
});

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${roboto.style.fontFamily};
  }
`;

export const theme: DefaultTheme = {
  bgMenu: "#212121",
  bgPages: "#202123",
  color: {
    title: "#ffffff",
    text: "#D4D4D4",
    highlight: "#2FB5FF",
  }
}
