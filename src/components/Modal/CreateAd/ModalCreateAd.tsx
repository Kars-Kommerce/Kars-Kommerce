    import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Container, Text, FormControl, FormLabel, Grid, GridItem, Textarea } from "@chakra-ui/react"
    import { zodResolver } from "@hookform/resolvers/zod";
    import { useEffect, useState } from "react"
    import { useForm, useWatch } from "react-hook-form";
    import { number, z } from "zod";

    const schema = z.object({
        brand: z.string().nonempty(),
        model: z.string().nonempty(),
        year: z.string().regex(/^[0-9]{4}$/),
        fuel: z.string().nonempty(),
        kilometer: z.string().regex(/^[0-9]+$/),
        color: z.string().nonempty(),
        fipe: z.string().regex(/^[0-9]+$/),
        price: z.string().regex(/^[0-9]+$/),
        description: z.string().nonempty(),
        coverImage: z.string().url(),
        galeryImage1: z.string().url().optional(),
        galeryImage2: z.string().url().optional(),
        galeryImage3: z.string().url().optional(),
        galeryImage4: z.string().url().optional(),
        galeryImage5: z.string().url().optional(),
        galeryImage6: z.string().url().optional(),
    });
    


    const ModalCreateAd = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [count, setCount] = useState<object[]>([{},{}])
        const {
            register,
            control,
            handleSubmit,
            watch,
            reset,
            formState: { errors },
        } = useForm({
            resolver: zodResolver(schema),
        });
        // console.log(errors)
        const onSubmit = (data: any) => {console.log(data,errors.keys)
            reset()
        };

        const addCount = () => {
            if (count.length < 6) setCount([...count,{}])
        }

        const addInputImage = (index:number) => {
            return (
                <FormControl key={`plusimg${index}`} margin={'5px 0 0 0'}>
                    <FormLabel fontSize={'b2'} fontWeight={'500'}>{index}° Imagem da galeria</FormLabel>
                    <Input  {...register(`galeryImage${index}`)}/>
                </FormControl>
            )
        }

        const watchFields = ['brand', 'model'];
        const watchValues = useWatch({ control, name: watchFields });
        const isFormValid = watchFields.every(field => watchValues[field]);

        useEffect(()=>{
            console.log(errors)
        },[errors])

        return (
            <>
                <Button onClick={onOpen} variant="outlineBrand1">Criar anuncio</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                     <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize={"h7"} fontWeight={'500'} >Criar Anuncio</ModalHeader>
                        <ModalCloseButton color={"grey.4"} />

                        <ModalBody>
                            <Container p={'10px 0'}>
                                <Text fontSize={'b2'} fontWeight={'500'}>informações do veiculo</Text>
                            </Container>
                          
                                <FormControl>
                                    <FormLabel fontSize={'b2'} fontWeight={'500'}>Marca</FormLabel>
                                    <Input type='text'  {...register("brand")}/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel fontSize={'b2'} fontWeight={'500'}>Modelo</FormLabel>
                                    <Input type='text'  {...register("model")} />
                                </FormControl>

                                <Grid margin={'10px 0 0'} templateColumns='repeat(2, 3fr)' gap={6}>

                                    <GridItem w='100%'>
                                        <FormControl>
                                            <FormLabel fontSize={'b2'} fontWeight={'500'}>Ano</FormLabel>
                                            <Input type='text'  {...register("year")} />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'>

                                        <FormControl>
                                            <FormLabel fontSize={'b2'} fontWeight={'500'}>Combustível</FormLabel>
                                            <Input type='text'  {...register("fuel")} />
                                        </FormControl>
                                    </GridItem>

                                    <GridItem w='100%'>
                                        <FormControl>
                                            <FormLabel fontSize={'b2'} fontWeight={'500'}>Quilometragem</FormLabel>
                                            <Input type='text'  {...register("kilometer")} />
                                        </FormControl>
                                    </GridItem>

                                    <GridItem w='100%'>
                                        <FormControl>
                                            <FormLabel fontSize={'b2'} fontWeight={'500'}>Cor</FormLabel>
                                            <Input type='text'  {...register("color")} />
                                        </FormControl>
                                    </GridItem>

                                    <GridItem w='100%'>
                                        <FormControl>
                                            <FormLabel fontSize={'b2'} fontWeight={'500'}>Preço tabela FIPE</FormLabel>
                                            <Input type='text'  {...register("fipe")} />
                                        </FormControl>
                                    </GridItem>
                                    <GridItem w='100%'>
                                        <FormControl>
                                            <FormLabel fontSize={'b2'} fontWeight={'500'}>Preço</FormLabel>
                                            <Input type='text'  {...register("price")} />
                                        </FormControl>
                                    </GridItem>
                                </Grid>

                                <FormControl>
                                    <FormLabel fontSize={'b2'} fontWeight={'500'}>Descrição</FormLabel>
                                    <Textarea  {...register("description")} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize={'b2'} fontWeight={'500'}>Imagem da capa</FormLabel>
                                    <Input  {...register("coverImage")} />
                                </FormControl>

                            
                                {
                                    count.map(
                                        (el,i) => addInputImage(i+1 )
                                    )                            }

                                {count.length < 6 &&
                                    <Button size={'md'} variant="outlineBrand1" onClick={addCount}>Adicionar campo para imagem da galeria </Button>
                                }


                           
                        </ModalBody>

                        <ModalFooter>
                            <Button variant={'negative'} mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button
                             type="submit"
                             variant={!isFormValid ? 'brandDisable':'brand1'}
                                // isDisabled={Object.keys(errors).length !== 0}
                                onClick={()=>console.log(errors)}
                             >Criar anúncio</Button>
                        </ModalFooter>
                    </ModalContent>
                     </form>
                </Modal>
            </>
        )
    }

    export default ModalCreateAd        