import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ListProductsCard from "./components/ListProductCard/listProductCard";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Container
      minH={"100vh"}
      maxW={"100%"}
      w={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding={0}
      bg={'grey.8'}
    >
      <Navbar />
      {/* <Banner image={"/src/assets/background_car.png"} />
      <ListProductsCard /> */}
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </Container>
  );
}

export default App;
