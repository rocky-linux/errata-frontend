import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      ":root": {
        colorScheme: props.colorMode,
      },
    }),
  },
});

export default theme;
