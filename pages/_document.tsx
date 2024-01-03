import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import myTheme from "../style/theme";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
