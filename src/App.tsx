import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnnouncerPerfilCard from "./components/AnnouncerPerfilCard";
import { author } from "./utils/Mock";
import AnnouncerProfile from "./pages/AnnouncerProfile";
import { UserProvider } from "./context";
import Home from "./pages/Home";

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
      <UserProvider>
        <Navbar />
        <Home />
        <Footer></Footer>
      </UserProvider>
    </Container>
  );
}

export default App;
