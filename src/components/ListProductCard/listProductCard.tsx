import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import ProductCard from "../ProductCard";

interface IListProps {
  array: IAdvertisementResponse[];
}
interface IAdsAuthor {
  id: string;
  name: string;
  bio: string;
  is_advertiser: boolean;
}

interface IComments {
  id: number;
  text: string;
  author: IAdsAuthor;
  created_at: Date;
}
interface IAdvertisementResponse {
  id: number;
  author: IAdsAuthor;
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  kilometer: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  created_at: Date;
  updated_at: Date;
  comments: IComments[];
  cover_image: string;
  galery: object[];
}

const ListProductsCard = ({ array }: IListProps) => {
  console.log(array);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box overflow={"hidden"}>
      <Flex marginBottom={"30px"} mt={12} w={"100%"}>
        <Flex
          flexWrap={isLargerThan768 ? "wrap" : "nowrap"}
          overflowX={"scroll"}
          gap={"2rem"}
          justify={"flex-start"}
          px={"1rem"}
          alignSelf={"flex-start"}
          width={"100%"}
          height={"100%"}
        >
          {array.length > 0 ? (
            array.map((el, i) => (
              <ProductCard key={`${el.title}-${i}`} product={el} />
            ))
          ) : (
            <Heading margin={"0 auto"}>Sem nenhum anuncio no momento!</Heading>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListProductsCard;
