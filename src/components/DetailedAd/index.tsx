import {
    Container,
    Text,
    Card,
    CardHeader,
    Heading,
    CardBody,
    CardFooter,
    Button,
    useMediaQuery
   } from "@chakra-ui/react";
import Tag from "../tag";


  const DetailedAd = ({title,tags,price}:any) => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
    return (
    <>
    <Container maxW={'750px'} bg={'grey.white'} h={'240px'} w={"90%"}  >
        <Card>
            <CardHeader>
                <Heading noOfLines={isLargerThan768? 1 : 3} maxW={'680px'} fontSize={'h6'}>{title}</Heading>
            </CardHeader>

            <CardBody maxW={'680px'} w={'100%'} display={'flex'} justifyContent={'space-between'}  flexDirection={isLargerThan768 ? 'row' : "column"} gap={isLargerThan768 ? 'inherit': '1rem'}>
                <Tag tags={tags}></Tag>
                <Text fontWeight={"bold"} justifySelf={'flex-end'} marginRight={'0'}>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
            </CardBody>
            <CardFooter>
                <Button bg={'brand.1'} borderRadius={'4px'} fontSize={'b2'}>Comprar</Button>
            </CardFooter>
        </Card>
    </Container>
    </>
    )
  }
  
export default DetailedAd