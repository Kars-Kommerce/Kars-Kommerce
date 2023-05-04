import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex w={"100vw"} h="100vh" align={"center"} justify={"center"}>
      <Spinner size="xl" color="brand.1" thickness="4px" />
    </Flex>
  );
};

export default Loading;
