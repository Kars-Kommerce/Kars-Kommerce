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
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/user.context";
import moment from "moment";

const schema = z.object({
  name: z
    .string()
    .min(2, "Tem que ter pelo menos duas letras!")
    .nonempty("Campo obrigatorio!"),
  username: z.string().nonempty("Campo obrigatorio!"),
  email: z.string().email("Email Invalido!").nonempty("Campo obrigatorio!"),
  cpf: z
    .string()
    .min(11, "Tem que ter no minimo 11 digitos!")
    .max(11, "Só pode ter no maximo 11 digitos!"),
  cellphone: z
    .string()
    .min(11, "Tem que ter no minimo 11 digitos!")
    .max(11, "Só pode ter no maximo 11 digitos!")
    .nonempty("Campo obrigatorio!"),
  birth_date: z.string().nonempty("Campo obrigatorio!"),
  bio: z.string().max(160, "Só pode ter no maximo 160 caracteres!"),
  is_advertiser: z.string().default("false"),
  password: z
    .string()
    .min(6, "Tem que ter no minimo 6 digitos!")
    .nonempty("Campo obrigatorio!"),
  cep: z.string().nonempty("Campo obrigatorio!"),
  state: z.string().nonempty("Campo obrigatorio!"),
  city: z.string().nonempty("Campo obrigatorio!"),
  street: z.string().nonempty("Campo obrigatorio!"),
  number: z.string().nonempty("Campo obrigatorio!"),
  complement: z.string(),
});

const RegisterForm = () => {
  const { apiRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  const navigate = useNavigate();

  const watchIs_advertiser = watch("is_advertiser");

  useEffect(() => {
    console.log(errors);
  }, [watchIs_advertiser]);

  const onSubmit = (data: any) => {
    data.is_advertiser = Boolean(data.is_advertiser);
    data.birth_date = moment(data.birth_date).format("DD-MM-YYYY");
    let { cep, state, city, street, number, complement, ...userData } = data;
    // userData.address = { cep, state, city, street, number, complement };
    console.log(userData, errors);
    apiRegister(userData);
  };


  return (
    <Flex minH={"100%"} align={"center"} justify={"center"} bg={"grey.8"}>
      <Stack spacing={8} mx={"auto"} maxW={"md"} py={12} px={8} w={"98%"}>
        <Flex rounded={"lg"} bg={"grey.10"} boxShadow={"lg"} p={8}>
          <Stack spacing={4} w={"100%"}>
            <Heading fontSize={"h5"}>Cadastro</Heading>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <FormControl id="cellphone">
                <FormLabel>Celular</FormLabel>
                <Input type="cellphone" {...register("cellphone")} />
                {errors.cellphone && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.cellphone.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="birth_date">
                <FormLabel>Data de nascimento</FormLabel>
                <Input type="date" {...register("birth_date")} />
                {errors.birth_date && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.birth_date.message}`}</Text>
                )}
              </FormControl>
              <FormControl id="bio">
                <FormLabel>Descrição</FormLabel>
                <Textarea {...register("bio")} />
                {errors.bio && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.bio.message}`}</Text>
                )}
              </FormControl>
              <Heading
                fontFamily={"body"}
                fontSize={"b2"}
                fontWeight={"500"}
                p={"8px"}
              >
                Informações de endereço
              </Heading>
              <FormControl id="cep">
                <FormLabel>CEP</FormLabel>
                <Input type="number" {...register("cep")} />
                {errors.cep && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.cep.message}`}</Text>
                )}
              </FormControl>
              <Flex gap={"8px"}>
                <FormControl id="state">
                  <FormLabel>Estado</FormLabel>
                  <Input type="text" {...register("state")} />
                  {errors.state && (
                    <Text
                      fontSize={"b2"}
                      fontWeight={"500"}
                      color={"alert.1"}
                    >{`${errors.state.message}`}</Text>
                  )}
                </FormControl>
                <FormControl id="city">
                  <FormLabel>Cidade</FormLabel>
                  <Input type="text" {...register("city")} />
                  {errors.city && (
                    <Text
                      fontSize={"b2"}
                      fontWeight={"500"}
                      color={"alert.1"}
                    >{`${errors.city.message}`}</Text>
                  )}
                </FormControl>
              </Flex>
              <FormControl id="street">
                <FormLabel>Rua</FormLabel>
                <Input type="string" {...register("street")} />
                {errors.street && (
                  <Text
                    fontSize={"b2"}
                    fontWeight={"500"}
                    color={"alert.1"}
                  >{`${errors.street.message}`}</Text>
                )}
              </FormControl>
              <Flex gap={"8px"}>
                <FormControl id="number">
                  <FormLabel>Numero</FormLabel>
                  <Input type="string" {...register("number")} />
                  {errors.number && (
                    <Text
                      fontSize={"b2"}
                      fontWeight={"500"}
                      color={"alert.1"}
                    >{`${errors.number.message}`}</Text>
                  )}
                </FormControl>
                <FormControl id="complement">
                  <FormLabel>Complemento</FormLabel>
                  <Input type="text" {...register("complement")} />
                  {errors.complement && (
                    <Text
                      fontSize={"b2"}
                      fontWeight={"500"}
                      color={"alert.1"}
                    >{`${errors.complement.message}`}</Text>
                  )}
                </FormControl>
              </Flex>
              <FormControl id="is_advertiser" {...register("is_advertiser")}>
                <RadioGroup
                  defaultValue={"false"}
                  display={"flex"}
                  w={"100%"}
                  justifyContent={"space-around"}
                >
                  <Radio
                    display={"none"}
                    value={"false"}
                    id={"noAdvertise"}
                    colorScheme={!errors.is_advertiser ? "blue" : "red"}
                    {...register("is_advertiser")}
                  ></Radio>
                  <FormLabel
                    bg={
                      watchIs_advertiser == "true" ? "transparent" : "brand.1"
                    }
                    htmlFor="noAdvertise"
                    p={"16px"}
                    borderRadius={"4px"}
                    margin={"16px 0"}
                    color={
                      watchIs_advertiser == "true" ? "grey.1" : "grey.white"
                    }
                  >
                    Comprador
                  </FormLabel>
                  <Radio
                    display={"none"}
                    value={"true"}
                    id={"advertise"}
                    colorScheme={!errors.is_advertiser ? "blue" : "red"}
                    {...register("is_advertiser")}
                  ></Radio>
                  <FormLabel
                    bg={
                      watchIs_advertiser == "true" ? "brand.1" : "transparent"
                    }
                    color={
                      watchIs_advertiser == "true" ? "grey.white" : "grey.1"
                    }
                    margin={"16px 0"}
                    p={"16px"}
                    borderRadius={"4px"}
                    htmlFor="advertise"
                  >
                    Anunciante
                  </FormLabel>
                </RadioGroup>
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
              <Button
                type="submit"
                size={"lg"}
                bg={"brand.1"}
                color={"grey.white"}
                _hover={{
                  bg: "grey.1",
                }}
                margin={"0 auto"}
                alignSelf={"center"}
              >
                Finalizar Cadastro
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
        </Flex>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
