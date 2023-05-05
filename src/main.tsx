import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider, DarkMode } from "@chakra-ui/react";

import theme from "./styles/theme";
import { UserProvider } from "./context/user.context";
import { AdsProvider } from "./context/ads.context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>
        <AdsProvider>
          <App />
        </AdsProvider>
      </UserProvider>
    </BrowserRouter>
  </ChakraProvider>
);
