import "./App.css";
import GlobalStyle from "./styles/global";

import { Button, ChakraProvider } from "@chakra-ui/react";

import theme from "./styles/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Button variant={"grey1"}>Text Button</Button>
        <Button variant={"brand1"}>Text Button</Button>
      </ChakraProvider>
    </>
  );
}

export default App;
