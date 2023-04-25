import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routes from "./routes";


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
      <Routes/>
      <Footer></Footer>
    </Container>
  );
}

export default App;
