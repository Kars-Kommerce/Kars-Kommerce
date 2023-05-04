import React from "react";
import { Box, Heading, Grid, GridItem, Image, theme } from "@chakra-ui/react";

const Galery = () => {
  return (
    <>
      <Box
        p={4}
        w={"90%"}
        maxW="md"
        h="377px"
        borderRadius="4px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="32px"
        bg="grey.10"
        padding="36px 44px"
      >
        <Heading size="md" mb={4}>
          Fotos
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} width={"100%"}>
          <GridItem>
            <Image
              src="src/assets//background_car.png"
              alt="Carro"
              w="90px"
              h="90px"
              bg="#E9ECEF"
              objectFit={"contain"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="src/assets//background_car.png"
              alt="Carro"
              w="90px"
              h="90px"
              bg="#E9ECEF"
              objectFit={"contain"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="src/assets//background_car.png"
              alt="Carro"
              w="90px"
              h="90px"
              bg="#E9ECEF"
              objectFit={"contain"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="src/assets//background_car.png"
              alt="Carro"
              w="90px"
              h="90px"
              bg="#E9ECEF"
              objectFit={"contain"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="src/assets//background_car.png"
              alt="Carro"
              w="90px"
              h="90px"
              bg="#E9ECEF"
              objectFit={"contain"}
            />
          </GridItem>
          <GridItem>
            <Image
              src="src/assets//background_car.png"
              alt="Carro"
              w="90px"
              h="90px"
              bg="#E9ECEF"
              objectFit={"contain"}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Galery;
