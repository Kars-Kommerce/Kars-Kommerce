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
    Select,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, useWatch} from "react-hook-form";
import { number, z } from "zod";
import { brands } from "../../Filter/filter";
import ApiFipe from "../../../utils/ApiFipe";
import Api from "../../../utils/Api";

const schema = z.object({
    brand: z.string().nonempty(),
    model: z.string().nonempty(),
    year: z.string().regex(/^[0-9]{4}$/),
    fuel: z.string().nonempty(),
    kilometer: z.string().nonempty(),
    color: z.string().nonempty(),
    fipe: z.string().regex(/^[0-9]/),
    price: z.string().nonempty(),
    description: z.string().nonempty(),
    cover_image: z.string().url(),
    galeryImage1: z.string().url().optional(),
    galeryImage2: z.string().url().optional(),
    galeryImage3: z.string().url().optional(),
    galeryImage4: z.string().url().optional(),
    galeryImage5: z.string().url().optional(),
    galeryImage6: z.string().url().optional(),
});

interface CarType {
    id: number;
    name: string;
  }

  const carType: CarType[] = [
    { id: 1, name: "Flex" },
    { id: 2, name: "Elétrico" },
    { id: 3, name: "Híbrido" },
    { id: 4, name: "Gasolina" },
  ];

  interface CarColor {
    id: number;
    name: string;
  }

  const carColors: CarColor[] = [
    { id: 1, name: "Preto" },
    { id: 2, name: "Branco" },
    { id: 3, name: "Prata" },
    { id: 4, name: "Vermelho" },
    { id: 5, name: "Azul" },
    { id: 6, name: "Verde" },
    { id: 7, name: "Amarelo" },
  ];

const ModalCreateAd = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [count, setCount] = useState<object[]>([{}, {}]);
    const [model, setModel ] = useState<IModel[]>([])
    const [year,setYear] = useState('')
    const [fuel,setFuel] = useState('')
    const [fipe,setFipe] = useState(0)
    const {
        register,
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors,dirtyFields,isSubmitting,isDirty,isValid },
        getValues
    } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema),
    });
    // console.log(errors)
    const onSubmit = async(dataForm: any) => {
        const {model,year,kilometer,price,galeryImage1,galeryImage2,galeryImage3,galeryImage4,galeryImage5,galeryImage6, ...adsData} = dataForm
        let galery = [galeryImage1,galeryImage2,galeryImage3,galeryImage4,galeryImage5,galeryImage6]
        console.log(galery)
        galery = galery.filter(image=> image!==undefined)
        console.log(galery)

        const sendData = {...adsData,
            title:model,
            model:model,
            is_active:true,
            year: Number(year),
            fipe: Number(fipe),
            kilometer: Number(kilometer),
            price: Number(price),
            galery:galery
        }   
        console.log(sendData)
        Api.defaults.headers.Authorization = `Bearer ${localStorage.getItem('@TOKEN')}` 
         await Api.post('/ads',sendData)

        reset()
        setFipe(0)
        setYear("")
        setFuel("")
        setModel([])
        ;
    };

    const addCount = () => {
        if (count.length < 6) setCount([...count, {}]);
    };

    const addInputImage = (index: number) => {
        return (
            <FormControl key={`plusimg${index}`} margin={"5px 0 0 0"}>
                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                    {index}° Imagem da galeria
                </FormLabel>
                <Input {...register(`galeryImage${index}`)} />
            </FormControl>
        );
    };

    const watchTest = useWatch({
        control
        ,
        defaultValue:getValues()
    })

    const isFormValid = dirtyFields && !isSubmitting && !errors;

    const watchBrand = watch('brand')
    const watchModel = watch('model')

    interface IModel {
        id:string;
        name:string;
        fuel: Number;
        year:string;
        value:number;
    }




    useEffect(() => {
        console.log(watchBrand)
        if (watchBrand!= "") {
            (async () => {
                try {
                    const data = await ApiFipe.get(`/cars?brand=${watchBrand}`)
                    setModel(data.data)
                } catch (err) {
                    console.log(err)
                }
            })();
        }
        if(watchModel != "Escolha uma opção" && watchModel!= undefined) {
            console.log(watchModel)
            setFipe(model!.find(model=> model.name == watchModel)!.value)
            setYear(model!.find(model=> model.name == watchModel)!.year)
            setFuel(`${carType[+model!.find(model=> model.name == watchModel)!.fuel].name}`)
        }

    }, [watchBrand,watchModel]);
    

    return (
        <>
            <Button onClick={onOpen} variant="outlineBrand1">
                Criar anuncio
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize={"h7"} fontWeight={"500"}>
                            Criar Anuncio
                        </ModalHeader>
                        <ModalCloseButton color={"grey.4"} />

                        <ModalBody>
                            <Container p={"10px 0"}>
                                <Text fontSize={"b2"} fontWeight={"500"}>
                                    Informações do veículo
                                </Text>
                            </Container>

                            <FormControl>
                                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                    Marca
                                </FormLabel>
                                <Select      {...register("brand")}>
                                    <option value={""}>Escolha uma opção</option>
                                    {
                                        brands.map(brand => {
                                            return <option key={brand.name + brand.id} value={brand.name.toLocaleLowerCase()} >{brand.name}</option>
                                        })

                                    }
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                    Modelo
                                </FormLabel>
                                <Select {...register("model")}>
                                <option>Escolha uma opção</option>
                                    {
                                        model&& 
                                        model.map(el => <option key={el.id} value={el.name} >{el.name}</option>)
                                    }
                                </Select>
                            </FormControl>

                            <Grid
                                margin={"10px 0 0"}
                                templateColumns="repeat(2, 3fr)"
                                gap={6}
                            >
                                <GridItem w="100%">
                                    <FormControl>
                                        <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                            Ano
                                        </FormLabel>
                                        <Select
                                            {...register("year")}>
                                                 
                                                 <option>Escolha uma opção</option>
                                                 <option value={year}>{year}</option>
                                                </Select>
                                    </FormControl>
                                </GridItem>
                                <GridItem w="100%">
                                    <FormControl>
                                        <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                            Combustível
                                        </FormLabel>
                                        <Select
                                            {...register("fuel")}>
                                                 
                                                 <option>Escolha uma opção</option>
                                                 <option value={fuel}>{fuel}</option>
                                                </Select>
                                    </FormControl>
                                </GridItem>

                                <GridItem w="100%">
                                    <FormControl>
                                        <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                            Quilometragem
                                        </FormLabel>
                                        <Input type="number" {...register("kilometer", {required:true})} />
                                    </FormControl>
                                </GridItem>

                                <GridItem w="100%">
                                    <FormControl>
                                        <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                            Cor
                                        </FormLabel>
                                        <Select  {...register("color")} >
                                            <option>Escolha uma opção</option>
                                            {   
                                                carColors.map (color =>  <option key={color.name} value={color.name}>{color.name}</option>)
                                            }
                                        </Select>
                                    </FormControl>
                                </GridItem>

                                <GridItem w="100%">
                                    <FormControl>
                                        <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                            Preço tabela FIPE
                                        </FormLabel>
                                        <Input value={fipe} type="text" {...register("fipe")} />
                                    </FormControl>
                                </GridItem>
                                <GridItem w="100%">
                                    <FormControl>
                                        <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                            Preço
                                        </FormLabel>
                                        <Input type="number" {...register("price")} />
                                    </FormControl>
                                </GridItem>
                            </Grid>

                            <FormControl>
                                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                    Descrição
                                </FormLabel>
                                <Textarea {...register("description")} />
                            </FormControl>

                            <FormControl>
                                <FormLabel fontSize={"b2"} fontWeight={"500"}>
                                    Imagem da capa
                                </FormLabel>
                                <Input {...register("cover_image")} />
                            </FormControl>

                            {count.map((el, i) => addInputImage(i + 1))}

                            {count.length < 6 && (
                                <Button size={"md"} variant="outlineBrand1" onClick={addCount}>
                                    Adicionar campo para imagem da galeria{" "}
                                </Button>
                            )}
                        </ModalBody>

                        <ModalFooter>
                            <Button variant={"negative"} mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button
                                type="submit"
                                variant={!isValid? "brandDisable" : "brand1"}
                                // isDisabled={!isFormValid}
                                onClick={() => console.log(errors)}
                            >
                                Criar anúncio
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </form>
            </Modal>
        </>
    );
};

export default ModalCreateAd;
