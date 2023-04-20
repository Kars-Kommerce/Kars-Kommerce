import {
  Container,
  Text,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Tag from "../Tag";

const DetailedAd = ({ title, tags, price }: any) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Card maxW={"750px"} bg={"grey.white"} maxH={"330px"} w={"90%"}>
        <CardHeader minH={"40%"}>
          <Heading
            noOfLines={isLargerThan768 ? 1 : 3}
            maxW={"680px"}
            fontSize={"h6"}
          >
            {title}
          </Heading>
        </CardHeader>

        <CardBody
          maxW={"680px"}
          w={"100%"}
          display={"flex"}
          minH={"35%"}
          maxH={"35%"}
          flexDirection={isLargerThan768 ? "row" : "column"}
          gap={isLargerThan768 ? "inherit" : "1rem"}
          justifyContent={"space-between"}
        >
          <Tag tags={tags}></Tag>
          <Text fontWeight={"bold"} justifySelf={"flex-end"} marginRight={"0"}>
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </CardBody>
        <CardFooter minH={"25%"}>
          <Button bg={"brand.1"} borderRadius={"4px"} fontSize={"b2"}>
            Comprar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default DetailedAd;
