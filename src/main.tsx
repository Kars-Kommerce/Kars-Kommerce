import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider, DarkMode } from "@chakra-ui/react";

import theme from "./styles/theme";
import DescriptionCard from "./components/DescriptionCard";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DescriptionCard></DescriptionCard>
    </ChakraProvider>
  </React.StrictMode>
);
