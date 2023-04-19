import { Box, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import ProductCard from "../ProductCard";

const ListProductsCard = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <Container marginBottom={"30px"} maxW={"5xl"} mt={12}>
        <Flex
          flexWrap={isLargerThan768 ? "wrap" : "nowrap"}
          overflow={"auto"}
          gridGap={6}
          justify={isLargerThan768 ? "center" : "flex-start"}
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
      </Container>
    </Box>
  );
};

export default ListProductsCard;
