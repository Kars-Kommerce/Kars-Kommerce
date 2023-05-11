import { useContext } from "react";
import Banner from "../../components/Banner";
import ListProductsCard from "../../components/ListProductCard/listProductCard";
import { AdsContext } from "../../context/ads.context";
import Filter from "../../components/Filter/filter";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const { ads } = useContext(AdsContext);

  return (
    <>
      <Banner />

      <Grid
        h="100%"
        templateRows={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
      >
        <Filter />
        <GridItem colSpan={3} rowSpan={4}>
          <ListProductsCard array={ads} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
