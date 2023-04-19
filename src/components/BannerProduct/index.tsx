import React from "react";
import { Box, Center, Image } from "@chakra-ui/react";

const BannerProduct = ({ image }: any) => {
  return (
    <>
      <Center>
        <Box
          w="752px"
          h="355px"
          borderRadius="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src="src/assets//background_car.png"
            alt="Carro"
            w="441px"
            h="253px"
          />
        </Box>
      </Center>
    </>
  );
};

export default BannerProduct;
