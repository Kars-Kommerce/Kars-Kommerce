import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Text,
  Button,
  Heading,
  Checkbox,
  Textarea,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

const schema = z.object({
  name: z.string().min(2).nonempty(),
  username: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(6),
  cpf: z.string().min(11).max(11),
  birthdate: z.string(),
  bio: z.string().max(160),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: any) => console.log(data, errors);

  return (
    <Flex minH={"100%"} align={"center"} justify={"center"} bg={"grey.8"}>
      <Stack spacing={8} mx={"auto"} maxW={"md"} py={12} px={8} w={"98%"}>
        <Box rounded={"lg"} bg={"grey.10"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <Heading fontSize={"h5"}>Cadastro</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="name">
                <FormLabel>Nome</FormLabel>
                <Input type="text" {...register("name")} />
                {errors.name && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.name.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="username">
                <FormLabel>Nome de usuário</FormLabel>
                <Input type="text" {...register("username")} />
                {errors.username && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.username.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" {...register("email")} />
                {errors.email && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.email.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Senha</FormLabel>
                <Input type="password" {...register("password")} />
                {errors.password && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.password.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="cpf">
                <FormLabel>CPF</FormLabel>
                <Input type="text" {...register("cpf")} />
                {errors.cpf && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.cpf.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="birthdate">
                <FormLabel>Data de nascimento</FormLabel>
                <Input type="date" {...register("birthdate")} />
                {errors.birthdate && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.birthdate.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="bio">
                <FormLabel>Bio</FormLabel>
                <Textarea {...register("bio")} />
                {errors.bio && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.bio.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="is_advertiser" {...register("is_advertiser")}>
                <Stack direction="row">
                  <Radio
                    value={"false"}
                    colorScheme={!errors.is_advertiser ? "blue" : "red"}
                  >
                    Comprador
                  </Radio>
                  <Radio
                    value={"true"}
                    colorScheme={!errors.is_advertiser ? "blue" : "red"}
                  >
                    Anunciante
                  </Radio>
                </Stack>
              </FormControl>
              <Button
                type="submit"
                size={"lg"}
                bg={"brand.1"}
                color={"grey.white"}
                _hover={{
                  bg: "grey.1",
                }}
              >
                Cadastrar
              </Button>
            </form>
            <Link
              padding={"15px 0 20px 0"}
              alignSelf={"center"}
              onClick={() => navigate("/login")}
            >
              Já possui conta?
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
