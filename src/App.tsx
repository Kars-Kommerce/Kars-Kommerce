import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import { UserProvider } from "./context/user.context";
import { AdsProvider } from "./context/ads.context";
import ModalEditProfile from "./components/Modal/EditProfile/ModalEditProfile";
import ModalCreateAd from "./components/Modal/CreateAd/ModalCreateAd";

function App() {
  return (
    <Container
      minH={"100vh"}
      maxW={"100vw"}
      w={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding={0}
      bg={"grey.8"}
    >
      <Navbar />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
