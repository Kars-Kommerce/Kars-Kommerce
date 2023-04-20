import { Box, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import ProductCard from "../ProductCard";
import Filter from "../Filter/filter";

const ListProductsCard = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <Flex marginBottom={"30px"} mt={12} w={"100%"}>
        <Filter />
        <Flex
          flexWrap={isLargerThan768 ? "wrap" : "nowrap"}
          overflow={"auto"}
          gap={"2rem"}
          justify={isLargerThan768 ? "center" : "flex-start"}
          px={"1rem"}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListProductsCard;
