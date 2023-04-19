// import "./App.css";

import { AspectRatio, Box, Button, Container } from "@chakra-ui/react";
import Footer from "./components/footer";
import DetailedAd from "./components/DetailedAd";
const tags = [
  {
    tag: "2003",
    href: "http://google.com"
  },
  {
    tag: "0KM",
    href: "http://google.com"
  }
]


function App() {
  return (
    <>
      {/* <AspectRatio maxW="1024px" ratio={1} margin={"0 auto"} h={"100vh"}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <Footer></Footer> */}
      <DetailedAd title={'Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 '} tags={tags}  price={23000000}></DetailedAd>
    </>
  );
}

export default App;
