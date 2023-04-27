import { useContext } from "react";
import Banner from "../../components/Banner";
import ListProductsCard from "../../components/ListProductCard/listProductCard";
import { AdsContext } from "../../context/ads.context";
import Filter from "../../components/Filter/filter";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  const { ads } = useContext(AdsContext);
  return (
    <>
      <Banner />
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        align={"flex-start"}
      >
        <Filter />
        <ListProductsCard array={ads} />
      </Flex>
    </>
  );
};

export default Home;
