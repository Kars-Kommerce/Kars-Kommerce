import "./App.css";
import GlobalStyle from "./styles/global";

import { Box, Button, ChakraProvider } from "@chakra-ui/react";

import theme from "./styles/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          h={"100vh"}
          w={"100vw"}
          display={"flex"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bg={"#F6f6f6"}
        >
          <Button variant={"light"}>Text Button</Button>

          <Button variant={"brandDisable"}>Text Button</Button>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
