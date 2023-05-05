import { Flex, useToast } from "@chakra-ui/react";
import AnnouncerPerfilCard from "../../components/AnnouncerPerfilCard";
import ListProductsCard from "../../components/ListProductCard/listProductCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "@nextui-org/react";
import Api from "../../utils/Api";

interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  bio: string;
  is_advertiser: boolean;
  created_at: Date;
  updated_at: Date;
  ads: IAdvertisementResponseProps[];
}

interface IResponseUserApi {
  data: IUser;
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

interface IAdvertisementResponseProps {
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

interface IErro {
  response: {
    data: {
      message: string;
    };
  };
}

const AnnouncerProfile = () => {
  const { user } = useContext(UserContext);

  const { id } = useParams();

  const [actualUser, setActualUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    const getActualUser = async () => {
      try {
        const { data }: IResponseUserApi = await Api.get(`/users/${id}`);
        setActualUser(data);
      } catch {
        console.log("Algo deu errado!");
      }
    };

    if (id) {
      getActualUser();
    } else if (!user) {
      navigate("/login");
    } else if (!user?.is_advertiser) {
      toast({
        title: "Ops!",
        description: "Você não é anunciante!",
        status: "warning",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
      navigate("/");
    } else {
      setActualUser(user);
    }
    setTimeout(() => setLoading(false), 700);
  }, []);

  loading && <Loading />;

  return actualUser ? (
    <Flex
      direction={"column"}
      bg={{
        base: "linear-gradient(180deg, #4529E6 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 100%)",
        md: "linear-gradient(180deg, #4529E6 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 calc((((100% - 628px) * 0.015) + 280px)), #F1F3F5 100%)",
      }}
    >
      <AnnouncerPerfilCard
        bio={actualUser?.bio || ""}
        authorName={actualUser?.name || ""}
      />
      <ListProductsCard array={actualUser?.ads! || []} />
    </Flex>
  ) : (
    <Loading />
  );
};

export default AnnouncerProfile;
