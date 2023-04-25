import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./routes";
import AnnouncerProfile from "./pages/AnnouncerProfile";
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
      bg={"grey.8"}
    >
      <Navbar />
      <Routes/>
      {/* <AnnouncerProfile /> */}
      <Footer></Footer>
    </Container>
  );
}

export default App;
