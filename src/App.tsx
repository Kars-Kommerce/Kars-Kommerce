
import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import AnnouncerCard from "./components/announcerCard";

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
      <AnnouncerCard
      description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore incidunt atque saepe exercitationem eveniet maxime libero molestias, nam numquam recusandae consectetur ab ut nobis, odio aspernatur provident accusamus ad temporibus?'}
      authorName={'Leo Costa'}
      link= "google.com"
      
      ></AnnouncerCard>
      <Footer></Footer>
    </Container>

  );
}

export default App;
