// import "./App.css";

import { Box, Button } from "@chakra-ui/react";

function App() {
  return (
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

      <Button variant={"brand1"}>Text Button</Button>
      <Button variant={"brand1"} size={"big"}>
        Text Button
      </Button>
    </Box>
  );
}

export default App;
