import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
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
interface IAdvertisementResponse {
  id: number;
  author: IAdsAuthor;
  title: string;
  description: string;
  model: string;
  brand: string;
  year: number;
  fuel: number;
  fuel_type: string;
  is_active: boolean;
  price: number;
  created_at: Date;
  updated_at: Date;
}

const ListProductsCard = ({ array }: IListProps) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box overflow={"hidden"}>
      <Flex marginBottom={"30px"} mt={12} w={"100%"}>
        <Flex
          flexWrap={isLargerThan768 ? "wrap" : "nowrap"}
          overflowX={"scroll"}
          gap={"2rem"}
          // justify={isLargerThan768 ? "center" : "flex-start"}
          justify={"flex-start"}
          px={"1rem"}
          alignSelf={"flex-start"}
          // maxW={"100vw"}
        >
          {array.map((el, i) => (
            <ProductCard key={`${el.title}-${i}`} product={el} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListProductsCard;
