import {
  Box,
  Button,
  Container,
  GridItem,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

export const brands = [
  { id: 0, name: "Citroen" },
  { id: 1, name: "Fiat" },
  { id: 2, name: "Ford" },
  { id: 3, name: "Chevrolet" },
  { id: 4, name: "Honda" },
  { id: 5, name: "Hyundai" },
  { id: 6, name: "Nissan" },
  { id: 7, name: "Peugeot" },
  { id: 8, name: "Renault" },
  { id: 9, name: "Toyota" },
  { id: 10, name: "Volkswagen" },
];
export default function Filter() {

  const years = [
    { id: 0, name: 2023 },
    { id: 1, name: 2022 },
    { id: 2, name: 2021 },
    { id: 3, name: 2020 },
    { id: 4, name: 2019 },
    { id: 5, name: 2018 },
    { id: 6, name: 2017 },
    { id: 7, name: 2016 },
  ];

  interface CarModel {
    id: number;
    name: string;
  }

  const carModels: CarModel[] = [
    { id: 1, name: "Gol" },
    { id: 2, name: "Uno" },
    { id: 3, name: "Palio" },
    { id: 4, name: "Corsa" },
    { id: 5, name: "Fiesta" },
    { id: 6, name: "Celta" },
    { id: 7, name: "Ka" },
    { id: 8, name: "Sandero" },
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
  return (
    <GridItem
      rowSpan={4}
      colSpan={1}
      p={2}
      margin={"20px"}
      display={{ base: "none", md: "initial" }}
    >
      <VStack spacing={8} align="stretch">
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Marca
          </Heading>
          {brands.map((brand) => {
            return (
              <Button
                key={`${brand.name}-${brand.id}`}
                marginLeft={"4px"}
                color={"grey.3"}
                fontSize={"20px"}
                fontWeight={"500"}
                height={"7px"}
                textAlign={"start"}
                variant="unstyled"
                borderRadius={"0"}
                marginBottom={"2"}
                marginTop={"2"}
                _focus={{ boxShadow: "none" }}
                onClick={() => console.log(brand.name)}
              >
                {brand.name}
              </Button>
            );
          })}
        </Container>
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Modelo
          </Heading>
          {carModels.map((model, i) => {
            return (
              <Button
                key={`${model.name}-${model.id}`}
                marginLeft={"4px"}
                color={"grey.3"}
                fontSize={"20px"}
                fontWeight={"500"}
                height={"7px"}
                textAlign={"start"}
                variant="unstyled"
                borderRadius={"0"}
                marginBottom={"2"}
                marginTop={"2"}
                _focus={{ boxShadow: "none" }}
                onClick={() => console.log(model.name)}
              >
                {model.name}
              </Button>
            );
          })}
        </Container>
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Cor
          </Heading>
          {carColors.map((color) => {
            return (
              <Button
                key={`${color.name}-${color.id}`}
                marginLeft={"4px"}
                color={"grey.3"}
                fontSize={"20px"}
                fontWeight={"500"}
                height={"7px"}
                textAlign={"start"}
                variant="unstyled"
                borderRadius={"0"}
                marginBottom={"2"}
                marginTop={"2"}
                _focus={{ boxShadow: "none" }}
                onClick={() => console.log(color.name)}
              >
                {color.name}
              </Button>
            );
          })}
        </Container>
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Ano
          </Heading>
          {years.map((year) => {
            return (
              <Button
                key={`${year.name}-${year.id}`}
                marginLeft={"4px"}
                color={"grey.3"}
                fontSize={"20px"}
                fontWeight={"500"}
                height={"7px"}
                textAlign={"start"}
                variant="unstyled"
                borderRadius={"0"}
                marginBottom={"2"}
                marginTop={"2"}
                _focus={{ boxShadow: "none" }}
                onClick={() => console.log(year.name)}
              >
                {year.name}
              </Button>
            );
          })}
        </Container>
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Combustível
          </Heading>
          {carType.map((car) => {
            return (
              <Button
                key={`${car.name}-${car.id}`}
                marginLeft={"4px"}
                color={"grey.3"}
                fontSize={"20px"}
                fontWeight={"500"}
                height={"7px"}
                textAlign={"start"}
                variant="unstyled"
                borderRadius={"0"}
                marginBottom={"2"}
                marginTop={"2"}
                _focus={{ boxShadow: "none" }}
                onClick={() => console.log(car.name)}
              >
                {car.name}
              </Button>
            );
          })}
        </Container>
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Km
          </Heading>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"25px"}
            marginLeft={"4px"}
          >
            <Input
              borderRadius={0}
              maxW={"125px"}
              textAlign={"center"}
              placeholder="Mínimo"
              background={"grey.5"}
              color={"grey.3"}
            ></Input>
            <Input
              borderRadius={0}
              maxW={"125px"}
              textAlign={"center"}
              placeholder="Máximo"
              background={"grey.5"}
              color={"grey.3"}
            ></Input>
          </Box>
        </Container>
        <Container display={"flex"} flexDirection={"column"}>
          <Heading size="md" mb={4} fontSize={"28px"} fontWeight={"600"}>
            Preço
          </Heading>
          <Box
            display={"flex"}
            flexDirection={"row"}
            w={"275px"}
            gap={"25px"}
            marginLeft={"4px"}
          >
            <Input
              borderRadius={0}
              maxW={"125px"}
              textAlign={"center"}
              placeholder="Mínimo"
              background={"grey.5"}
              color={"grey.3"}
            ></Input>
            <Input
              borderRadius={0}
              maxW={"125px"}
              textAlign={"center"}
              placeholder="Máximo"
              background={"grey.5"}
              color={"grey.3"}
            ></Input>
          </Box>
        </Container>
      </VStack>
    </GridItem>
  );
}
