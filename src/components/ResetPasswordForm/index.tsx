import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../Loading";
import Api from "../../utils/Api";
import { UserContext } from "../../context/user.context";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  password: z.string(),
});

const ResetPasswordForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const { token } = useParams();
  const [loading, setLoading] = useState(true);
  const { apiResetPassword } = useContext(UserContext);
  const onSubmit = (data: any) => apiResetPassword(token, data);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await Api.get(`/password-reset/${token}`);
      } catch {
        navigate("/");
      }
    };
    checkToken();
    setLoading(false);
  }, []);

  loading && <Loading />;

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
          Enter new password
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" {...register("password")} />
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
              type="submit"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Enviar
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default ResetPasswordForm;
