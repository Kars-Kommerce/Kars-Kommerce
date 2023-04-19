import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { LogoWhite } from "../Logo";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("grey.0", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"90%"}
        py={10}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <LogoWhite />
        <Text color={"grey.white"} fontSize={"14px"}>
          © 2022 - Todos os direitos reservados.
        </Text>
        <Stack direction={"row"} spacing={6}>
          <Button
            bg={"grey.1"}
            _hover={{ bg: "grey.2" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            aria-label="Voltar para o topo do site"
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.53125 1C6.21875 0.71875 5.75 0.71875 5.46875 1L1.21875 5.25C0.90625 5.5625 0.90625 6.03125 1.21875 6.3125L1.90625 7.03125C2.21875 7.3125 2.6875 7.3125 2.96875 7.03125L6 4L9 7.03125C9.28125 7.3125 9.78125 7.3125 10.0625 7.03125L10.7812 6.3125C11.0625 6.03125 11.0625 5.5625 10.7812 5.25L6.53125 1Z"
                fill="white"
              />
            </svg>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
