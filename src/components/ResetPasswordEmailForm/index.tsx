import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

type SendEmailResetPasswordFormInputs = {
  email: string;
};

const SendEmailResetPasswordForm = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Esqueceu sua senha?
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          Você recebera um email com o link para recuperação
        </Text>
        <FormControl id="email">
          <Input
            placeholder="seu-email@exemplo.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <Stack
          spacing={6}
          display={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Button
            maxWidth={"20px"}
            bg={"grey.6"}
            color={"grey.2"}
            _hover={{
              bg: "grey.5",
            }}
            onClick={() => navigate("/login")}
          >
            <ArrowBackIcon></ArrowBackIcon>
          </Button>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Enviar email
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default SendEmailResetPasswordForm;
