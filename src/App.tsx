
import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import ListProductsCard from "./components/ListProductCard/listProductCard";
import Navbar from "./components/Navbar";
import AnnouncerCard from "./components/announcerCard";

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
    >
      <Navbar />
      <Banner image={"/src/assets/background_car.png"} />
      <ListProductsCard />
      <Footer></Footer>
    </Container>

  );
}

export default App;
