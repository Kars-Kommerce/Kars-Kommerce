import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  Container,
  Text,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Textarea,
  MenuItem,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { number, optional, z } from "zod";
import { UserContext } from "../../../context/user.context";

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  cpf: z.string().optional(),
  cellphone: z.string().optional(),
  birthDate: z.string().optional(),
  description: z.string().optional(),
});

const ModalEditProfile = () => {
  const { user, apiEditProfile, reloadUser } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState<object[]>([{}, {}]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(user);
    apiEditProfile(data, user!);
    reloadUser();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <MenuItem onClick={onOpen}>Editar Perfil</MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"h7"} fontWeight={"500"}>
              Editar Perfil
            </ModalHeader>
            <ModalCloseButton color={"grey.4"} />

            <ModalBody>
              <Container p={"10px 0"}>
                <Text fontSize={"b2"} fontWeight={"500"}>
                  Informações pessoais
                </Text>
              </Container>

              <FormControl>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                  Nome
                </FormLabel>
                <Input
                  type="text"
                  {...register("name")}
                  placeholder="Digite seu nome"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  defaultValue={user?.email}
                  {...register("email")}
                  placeholder="exemplo@mail.com"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                  CPF
                </FormLabel>
                <Input
                  type="text"
                  {...register("cpf")}
                  placeholder="000.000.000-00"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                  Celular
                </FormLabel>
                <Input
                  type="text"
                  {...register("cellphoe")}
                  placeholder="(00) 00000.0000"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                  Data de Nascimento
                </FormLabel>
                <Input type="date" {...register("birthDate")} />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                  Descrição
                </FormLabel>
                <Textarea
                  {...register("description")}
                  placeholder="Digite aqui sua descrição"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                size={"md"}
                variant={"negative"}
                h={"48px"}
                mr={3}
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button size={"md"} mr={3} variant={"alert"} h={"48px"}>
                Excluir Perfil
              </Button>
              <Button
                type="submit"
                size={"md"}
                variant={"brand1"}
                // isDisabled={Object.keys(errors).length !== 0}
                onClick={() => console.log(errors)}
                h={"48px"}
              >
                Salvar Alterações
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default ModalEditProfile;
