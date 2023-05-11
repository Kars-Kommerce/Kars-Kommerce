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
  cep: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
});

const ModalEditAddress = () => {
  const { user, apiEditAddress, reloadUser } = useContext(UserContext);
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
    console.log(data);
    apiEditAddress(data, user!);
    reloadUser();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <MenuItem onClick={onOpen}>Editar Endereço</MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize={"h7"} fontWeight={"500"}>
              Editar Endereço
            </ModalHeader>
            <ModalCloseButton color={"grey.4"} />

            <ModalBody>
              <Container p={"10px 0"}>
                <Text fontSize={"b2"} fontWeight={"500"}>
                  Informações de endereço
                </Text>
              </Container>
              <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
              >
                <GridItem colSpan={4}>
                  <FormControl>
                    <FormLabel fontSize={"b2"} fontWeight={"500"}>
                      CEP
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("cep")}
                      placeholder="89888.888"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel fontSize={"b2"} fontWeight={"500"}>
                      Estado
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("state")}
                      placeholder="São Paulo"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel fontSize={"b2"} fontWeight={"500"}>
                      Cidade
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("city")}
                      placeholder="São Paulo"
                    />
                  </FormControl>
                </GridItem>
              </Grid>
              <Grid
                h="200px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(4, 1fr)"
                gap={4}
              >
                <GridItem colSpan={4}>
                  <FormControl>
                    <FormLabel fontSize={"b2"} fontWeight={"500"}>
                      Rua
                    </FormLabel>
                    <Input
                      type="text"
                      {...register("street")}
                      placeholder="Rua do Arpoador"
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel fontSize={"b2"} fontWeight={"500"}>
                      Número
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="1029"
                      {...register("number")}
                    />
                  </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel fontSize={"b2"} fontWeight={"500"}>
                      Complemento
                    </FormLabel>
                    <Input {...register("complement")} placeholder="Apto 12" />
                  </FormControl>
                </GridItem>
              </Grid>
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
              <Button
                type="submit"
                size={"md"}
                variant={"brand1"}
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

export default ModalEditAddress;
