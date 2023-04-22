import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const DescriptionCard = () => {
  return (
    <>
      <Box
        p={4}
        w="90%"
        maxW={"750px"}
        maxH="352px"
        borderRadius="4px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="32px"
        bg="grey.10"
        padding="36px 44px"
        alignSelf={"center"}
      >
        <Heading size="md" mb={4}>
          Description
        </Heading>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure optio
          eligendi quibusdam dolorem nam sed consequuntur nihil voluptate, dicta
          veniam error ratione impedit adipisci maxime cupiditate provident,
          eius illo. Autem?
        </Text>
      </Box>
    </>
  );
};

export default DescriptionCard;
