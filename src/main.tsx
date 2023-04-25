import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider, DarkMode } from "@chakra-ui/react";

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
