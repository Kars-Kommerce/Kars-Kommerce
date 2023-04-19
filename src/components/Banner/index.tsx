import { Box, Container, Heading, useMediaQuery } from "@chakra-ui/react";

const Banner = ({ image }: any) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Container
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        backgroundImage={`url(${image})`}
        minW={"100%"}
        h={"500px"}
        padding={0}
        margin={0}
      >
        <Box
          background={
            "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
          }
          h={"100%"}
          w={"100%"}
          padding={"0.25rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={isLargerThan768 ? "center" : "flex-start"}
          flexDirection={"column"}
          color={"grey.10"}
          textAlign={"center"}
          gap={isLargerThan768 ? 0 : "1.25rem"}
        >
          {isLargerThan768 ? (
            <>
              <Heading fontSize={"h1"} fontWeight={700}>
                Motors Shop
              </Heading>
              <Heading maxW={"80%"} fontSize={"h2"} fontWeight={600}>
                A melhor plataforma de anúncios de carros do país
              </Heading>
            </>
          ) : (
            <>
              <Heading marginTop={"76px"} fontSize={"h3"} fontWeight={500}>
                Motors Shop
              </Heading>
              <Heading maxW={"80%"} fontSize={"h5"} fontWeight={500}>
                A melhor plataforma de anúncios de carros do país
              </Heading>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Banner;
