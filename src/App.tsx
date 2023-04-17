// import "./App.css";

import { AspectRatio, Box, Button, Container } from "@chakra-ui/react";

function App() {
  return (
    <AspectRatio maxW="1024px" ratio={1} margin={"0 auto"} h={"100vh"}>
      <iframe
        title="naruto"
        src="https://www.youtube.com/embed/QhBnZ6NPOY0"
        allowFullScreen
      />
    </AspectRatio>
  );
}

export default App;
