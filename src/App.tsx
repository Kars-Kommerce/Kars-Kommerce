import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container
      minH={"100vh"}
      maxW={"1600px"}
      w={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding={0}
    >
      <Navbar />
      <Banner image={"/src/assets/background_car.png"} />
      <Footer></Footer>
    </Container>
  );
}

export default App;
