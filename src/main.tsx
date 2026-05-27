import "./index.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";
import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Root />
      </ChakraProvider>
    </BrowserRouter>
  </>
);
