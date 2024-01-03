import { extendTheme } from "@chakra-ui/react";

const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#335272",
        color: "#fff",
        fontFamily: "sans-serif",
        fontSize: "16px",
      },
    },
  },
  components: {
    Button: {
      bgColor: "red",
    },
    H1: {
      fontSize: "30px",
    },
    H2: {
      fontSize: "40px",
    },
  },
});
export default myTheme;
