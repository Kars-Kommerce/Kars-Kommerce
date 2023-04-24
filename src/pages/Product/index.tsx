import { Box, Container, Flex } from "@chakra-ui/react";
import BannerProduct from "../../components/BannerProduct";
import DescriptionCard from "../../components/DescriptionCard";
import DetailedAd from "../../components/DetailedAd";
import Galery from "../../components/Galery";
import UserCard from "../../components/UserCard";
import AnnouncerCard from "../../components/AnnouncerCard";

const Product = () => {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={"flex-start"}
        py={"1rem"}
        bg={
          "linear-gradient(180deg, #4529E6 31.25%, #F1F3F5 31.26%, #F1F3F5 100%)"
        }
        h={"100%"}
        w={"100%"}
        gap={"1rem"}
      >
        <Flex
          gap={"1rem"}
          direction={"column"}
          width={"100%"}
          alignItems={"center"}
        >
          <BannerProduct />
          <DetailedAd
            title={"Maserati - Ghibli"}
            price={2000}
            tags={[{ tag: "0 KM" }, { tag: 2000 }]}
          />
          <DescriptionCard />
        </Flex>
        <Flex
          gap={"1rem"}
          direction={"column"}
          width={"100%"}
          alignItems={"center"}
        >
          <Galery />
          <AnnouncerCard
            authorName={"Igor Torres"}
            bio={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
            }
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Product;
