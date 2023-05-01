import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Container, Text, FormControl, FormLabel, Grid, GridItem, Textarea } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react"
import { useForm, useWatch } from "react-hook-form";
import { number, z } from "zod";

const schema = z.object({
    cep: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    street: z.string().optional(),
    number: z.string().optional(),
    complement: z.string().optional(),
   
});



const ModalEditAdress = () => {
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
            <Button onClick={onOpen} variant="outlineBrand1">Editar Endereço</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                 <form onSubmit={handleSubmit(onSubmit)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize={"h7"} fontWeight={'500'} >Editar Endereço</ModalHeader>
                    <ModalCloseButton color={"grey.4"} />

                    <ModalBody>
                        <Container p={'10px 0'}>
                            <Text fontSize={'b2'} fontWeight={'500'}>informações de endereço</Text>
                        </Container>
                      
                            <FormControl>
                                <FormLabel fontSize={'b2'} fontWeight={'500'}>CEP</FormLabel>
                                <Input type='text'  {...register("cep")}/>
                            </FormControl>
                            
                            <Grid margin={'10px 0 0'} templateColumns='repeat(2, 3fr)' gap={6}>

                                <GridItem w='100%'>
                                    <FormControl>
                                        <FormLabel fontSize={'b2'} fontWeight={'500'}>Estado</FormLabel>
                                        <Input type='text'  {...register("state")} />
                                    </FormControl>
                                </GridItem>
                                <GridItem w='100%'>

                                    <FormControl>
                                        <FormLabel fontSize={'b2'} fontWeight={'500'}>Cidade</FormLabel>
                                        <Input type='text'  {...register("city")} />
                                    </FormControl>
                                </GridItem>

                                <GridItem w='100%' colSpan={2}>
                                    <FormControl>
                                        <FormLabel fontSize={'b2'} fontWeight={'500'}>Rua</FormLabel>
                                        <Input type='text'  {...register("street")} />
                                    </FormControl>
                                </GridItem>

                                <GridItem w='100%' >
                                    <FormControl>
                                        <FormLabel fontSize={'b2'} fontWeight={'500'}>Numero</FormLabel>
                                        <Input type='text'  {...register("number")} />
                                    </FormControl>
                                </GridItem>

                                <GridItem w='100%'>
                                    <FormControl>
                                        <FormLabel fontSize={'b2'} fontWeight={'500'}>Complemento</FormLabel>
                                        <Input type='text'  {...register("complement")} />
                                    </FormControl>
                                </GridItem>
                            
                            </Grid>
                    </ModalBody>

                    <ModalFooter>
                        <Button size={'md'} variant={'negative'} mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button
                        size={'md'}
                         type="submit"
                         variant={'brandDisable'}
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

export default ModalEditAdress        