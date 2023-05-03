import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface IDescriptionCardProps {
  description: string;
}

const DescriptionCard = ({ description }: IDescriptionCardProps) => {
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
          Descrição
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </Box>
    </>
  );
};

export default DescriptionCard;
