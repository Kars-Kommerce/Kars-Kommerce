import { Flex } from "@chakra-ui/react";
import AnnouncerPerfilCard from "../../components/AnnouncerPerfilCard";
import ListProductsCard from "../../components/ListProductCard/listProductCard";
import { author } from "../../utils/Mock";

const AnnouncerProfile = () => {
  return (
    <Flex
      direction={"column"}
      bg={{
        base: "linear-gradient(180deg, #4529E6 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 100%)",
        md: "linear-gradient(180deg, #4529E6 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 100%)",
      }}
    >
      <AnnouncerPerfilCard bio={author.bio} authorName={author.name} />
      <ListProductsCard />
    </Flex>
  );
};

export default AnnouncerProfile;
