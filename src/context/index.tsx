import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../utils/Api";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IAdsAuthorProps } from "../utils/Mock";

interface IUserProviderProps {
  children: ReactNode;
}

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
}

interface IAdvertisementResponseProps {
  id: number;
  author: IAdsAuthorProps;
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

interface IErro {
  response: {
    data: {
      message: string;
    };
  };
}

interface IResponseUserApi {
  data: IUser;
}
interface IResponseAdsApi {
  data: {
    data: IAdvertisementResponseProps[];
    page: number;
    pageCount: number;
    total: number;
  };
}

interface IResponseLoginApi {
  data: {
    token: string;
  };
}

interface IFormLogin {
  email: string;
  password: string;
}
interface IFormRegister {
  name: string;
  username: string;
  password: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  bio?: string;
  is_advertiser?: boolean;
}

interface IUserContext {
  user: IUser | null;
  loading: boolean;
  deleteUser(): void;
  apiLogin(dataForm: IFormLogin): Promise<void>;
  apiRegister(dataForm: IFormRegister): Promise<void>;
  loadingTechs(): void;
  ads: IAdvertisementResponseProps[];
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: IUserProviderProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [ads, setAds] = useState<IAdvertisementResponseProps[]>([]);

  const toast = useToast();

  useEffect(() => {
    async function getUser() {
      const token = window.localStorage.getItem("@TOKEN");
      if (token && loading) {
        try {
          Api.defaults.headers.Authorization = `Bearer ${token}`;
          const { data }: IResponseUserApi = await Api.get(`/profile`);
          setUser(data);
          //   navigate(`/`);
        } catch {
          toast({
            title: "Error",
            description: "Usuario não encontrado, conecte novamente",
            status: "error",
            duration: 1500,
            isClosable: true,
            position: "top-right",
          });
          window.localStorage.clear();
          //   navigate(`/login`);
        }
        setLoading(false);
      } else {
        // navigate(`/login`);
      }
      setLoading(false);
    }
    async function getAds() {
      try {
        const { data }: IResponseAdsApi = await Api.get(`/ads`);
        setAds(data.data);
        //   navigate(`/`);
      } catch {
        toast({
          title: "Error",
          description: "Algo deu errado",
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top-right",
        });
        //   navigate(`/login`);
      }
    }

    getAds();
    setLoading(false);
  }, [loading]);

  function deleteUser(): void {
    setUser(null);
    setLoading(true);
  }

  function loadingTechs(): void {
    setLoading(true);
  }

  async function apiLogin(dataForm: IFormLogin): Promise<void> {
    try {
      const { data }: IResponseLoginApi = await Api.post("/sessions", dataForm);
      //   toast.success("Login realizado com sucesso!");
      window.localStorage.setItem("@TOKEN", data.token);
      setLoading(true);
    } catch (err) {
      //   toast.error((err as iErro).response.data.message);
    }
  }

  async function apiRegister(dataForm: IFormRegister): Promise<void> {
    try {
      await Api.post("/users", dataForm);
      //   toast.success(
      //     "Você se registrou, estamos te redirecionando para o login!"
      //   );
      //   navigate("/login");
    } catch (err) {
      //   toast.error((err as iErro).response.data.message);
    }
  }
  if (loading) {
    return (
      <Flex w={"100vw"} h="100vh" align={"center"} justify={"center"}>
        <Spinner size="xl" color="brand.1" thickness="4px" />
      </Flex>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        deleteUser,
        apiLogin,
        apiRegister,
        loadingTechs,
        ads,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
