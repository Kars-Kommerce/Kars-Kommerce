import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";

const BannerProduct = ({ image }: any) => {
  return (
    <>
      <Center width={"100%"}>
        <Box
          h="355px"
          borderRadius="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={"grey.10"}
          w={"90%"}
          maxW={"750px"}
        >
          <Image
            src="src/assets//background_car.png"
            alt="Carro"
            w="441px"
            h="253px"
            objectFit={"contain"}
          />
        </Box>
      </Center>
    </>
  );
};

export default BannerProduct;
