import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors.yellow,
    secondary: theme.colors.blackAlpha,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  shadows: {
    //Primary.200
    outline: `0 0 0 3px #FAF089`,
  },
  styles: {
    global: () => ({
      "::selection": {
        bg: "primary.100",
        color: "secondary.800",
      },
    }),
  },
});
