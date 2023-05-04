import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Container, Text, FormControl, FormLabel, Grid, GridItem, Textarea } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react"
import { useForm, useWatch } from "react-hook-form";
import { number, optional, z } from "zod";

const schema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    cpf: z.string().optional(),
    cellphone: z.string().optional(),
    birthDate: z.string().optional(),
    description: z.string().optional(),
});



const ModalEditProfile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [count, setCount] = useState<object[]>([{},{}])
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });
    // console.log(errors)
    const onSubmit = (data: any) => {console.log(data,errors.keys)
        reset()
    };

    useEffect(()=>{
        console.log(errors)
    },[errors])

    return (
        <>
            <Button onClick={onOpen} variant="outlineBrand1">Editar Perfil</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                 <form onSubmit={handleSubmit(onSubmit)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={"h7"} fontWeight={'500'} >Editar Perfil</ModalHeader>
                    <ModalCloseButton color={"grey.4"} />

                    <ModalBody>
                        <Container p={'10px 0'}>
                            <Text fontSize={'b2'} fontWeight={'500'}>informações pessoais</Text>
                        </Container>
                      
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>Nome</FormLabel>
                                <Input type='text'  {...register("name")}/>
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>Email</FormLabel>
                                <Input type='text'  {...register("email")} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>CPF</FormLabel>
                                <Input type='text'  {...register("cpf")} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>Email</FormLabel>
                                <Input type='text'  {...register("email")} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>Celular</FormLabel>
                                <Input type='text'  {...register("cellphoe")} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>Data de Nascimento</FormLabel>
                                <Input type='date'  {...register("birthDate")} />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>Descrição</FormLabel>
                                <Textarea  {...register("description")} />
                            </FormControl>
                       
                    </ModalBody>

                    <ModalFooter>
                        <Button  size={'md'} variant={'negative'} mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button size={'md'} variant={"alert"}>Excluir Perfil</Button>
                        <Button
                         type="submit"
                         size={'md'}
                         variant={'brand1'}
                            // isDisabled={Object.keys(errors).length !== 0}
                            onClick={()=>console.log(errors)}
                         >Salvar Alterações</Button>
                    </ModalFooter>
                </ModalContent>
                 </form>
            </Modal>
        </>
    )
}

export default ModalEditProfile        