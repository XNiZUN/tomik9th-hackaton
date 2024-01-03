import myTheme from "../style/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "/style/page.module.css";
import "/style/global.css";
function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
