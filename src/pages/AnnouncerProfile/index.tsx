import { Flex, useToast } from "@chakra-ui/react";
import AnnouncerPerfilCard from "../../components/AnnouncerPerfilCard";
import ListProductsCard from "../../components/ListProductCard/listProductCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router-dom";
import { Loading } from "@nextui-org/react";
import CommentCard from "../../components/CommentCard";
import CommentBox from "../../components/CommentsBox";

const AnnouncerProfile = () => {
  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (!user?.is_advertiser) {
      toast({
        title: "Ops!",
        description: "Você não é anunciante!",
        status: "warning",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
      navigate("/");
    }
    setTimeout(() => setLoading(false), 700);
  }, []);

  loading && <Loading />;

  return user?.is_advertiser ? (
    <Flex
      direction={"column"}
      bg={{
        base: "linear-gradient(180deg, #4529E6 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 100%)",
        md: "linear-gradient(180deg, #4529E6 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 100%)",
      }}
    >
      <AnnouncerPerfilCard bio={user.bio} authorName={user.name} />
      <ListProductsCard array={user?.ads!} />
    </Flex>
  ) : (
    <Loading />
  );
};

export default AnnouncerProfile;

