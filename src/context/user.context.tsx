import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../utils/Api";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IAdsAuthorProps } from "../utils/Mock";
import Loading from "../components/Loading";

interface IUserProviderProps {
  children: ReactNode;
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

interface IResponseUserApi {
  data: IUser;
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

interface IFormResetPassword {
  password: string;
}

interface IFormSendEmail {
  email: string;
}

export interface IFormRegister {
  name: string;
  username: string;
  email: string;
  cpf: string;
  cellphone: string;
  birth_date: string;
  bio?: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
  is_advertiser: boolean;
  password: string;
}

export interface IFormEdit {
  name?: string;
  email?: string;
  cpf?: string;
  cellphone?: string;
  birth_date?: string;
  bio?: string;
}

export interface IFormEditAddress {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

interface IUserContext {
  user: IUser | null;
  loadingUser: boolean;
  logout(): void;
  apiLogin(dataForm: IFormLogin): Promise<void>;
  apiRegister(dataForm: IFormRegister): Promise<void>;
  apiResetPassword(token: any, dataForm: IFormResetPassword): Promise<void>;
  apiSendEmail(dataForm: IFormSendEmail): Promise<void>;
  apiEditProfile(dataForm: IFormEdit, user: IUser): Promise<void>;
  apiEditAddress(dataForm: IFormEditAddress, user: IUser): Promise<void>;
  reloadUser(): void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserProvider({ children }: IUserProviderProps) {
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const toast = useToast();

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("@TOKEN");
      try {
        if (token && loadingUser) {
          try {
            Api.defaults.headers.Authorization = `Bearer ${token}`;
            const { data }: IResponseUserApi = await Api.get(`/users/profile`);
            setUser(data);
          } catch {
            toast({
              title: "Atenção",
              description: "Sessao expirada, conecte novamente",
              status: "info",
              duration: 1500,
              isClosable: true,
              position: "top-right",
            });
            window.localStorage.removeItem("@TOKEN");
          }
        }
      } catch {
      } finally {
        setLoadingUser(false);
      }
    }

    getUser();
  }, [loadingUser]);

  function logout(): void {
    setUser(null);
    setLoadingUser(true);
    window.localStorage.removeItem("@TOKEN");
  }

  function reloadUser(): void {
    setLoadingUser(true);
  }

  async function apiLogin(dataForm: IFormLogin): Promise<void> {
    try {
      const { data }: IResponseLoginApi = await Api.post("/login", dataForm);
      toast({
        title: "Sucesso",
        description: "Login realizado!",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
      window.localStorage.setItem("@TOKEN", data.token);
      setLoadingUser(true);
      navigate("/");
    } catch (err) {
      toast({
        title: "Ops!",
        description: (err as IErro).response.data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  async function apiRegister(dataForm: IFormRegister): Promise<void> {
    try {
      console.log(dataForm);
      await Api.post("/users", dataForm);

      toast({
        title: "Sucesso",
        description:
          "Você se registrou, estamos te redirecionando para o login!",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast({
        title: "Ops!",
        description: (err as IErro).response.data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  async function apiResetPassword(
    token: any,
    dataForm: IFormResetPassword
  ): Promise<void> {
    try {
      await Api.put(`/password-reset/${token}`, dataForm);
      toast({
        title: "Senha redefinida",
        description: "Você redefiniu sua senha, redirecionando para o login!",
        status: "info",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
      navigate("/login");
    } catch (err) {
      toast({
        title: "Ops!",
        description: (err as IErro).response.data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  async function apiSendEmail(dataForm: IFormSendEmail): Promise<void> {
    try {
      await Api.post("/password-reset", dataForm);
      toast({
        title: "Email enviado",
        description: "Você recebera o email em instantes!",
        status: "info",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
      navigate("/login");
    } catch (err) {
      toast({
        title: "Ops!",
        description: (err as IErro).response.data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  async function apiEditProfile(
    dataForm: IFormEdit,
    user: IUser
  ): Promise<void> {
    console.log(user, dataForm);
    if (dataForm.name === "") {
      delete dataForm.name;
    }
    if (dataForm.email === "") {
      delete dataForm.email;
    }
    if (dataForm.cellphone === "") {
      delete dataForm.cellphone;
    }
    if (dataForm.cpf === "") {
      delete dataForm.cpf;
    }
    if (dataForm.birth_date === "") {
      delete dataForm.birth_date;
    }
    if (dataForm.bio === "") {
      delete dataForm.bio;
    }
    try {
      await Api.patch(`/users/profile`, dataForm);
      toast({
        title: "Usuário editado",
        description: "Você editou o perfil com sucesso!",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    } catch (err) {
      toast({
        title: "Ops!",
        description: (err as IErro).response.data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  async function apiEditAddress(
    dataForm: IFormEditAddress,
    user: IUser
  ): Promise<void> {
    console.log(user, dataForm);
    if (dataForm.cep === "") {
      delete dataForm.cep;
    }
    if (dataForm.state === "") {
      delete dataForm.state;
    }
    if (dataForm.city === "") {
      delete dataForm.city;
    }
    if (dataForm.street === "") {
      delete dataForm.street;
    }
    if (dataForm.number === "") {
      delete dataForm.number;
    }
    if (dataForm.complement === "") {
      delete dataForm.complement;
    }
    try {
      await Api.patch(`/address/${user.id}`, dataForm);
      toast({
        title: "Endereço editado",
        description: "Você editou o endereço com sucesso",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    } catch (err) {
      toast({
        title: "Ops!",
        description: (err as IErro).response.data.message,
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loadingUser,
        logout,
        apiLogin,
        apiRegister,
        apiResetPassword,
        apiSendEmail,
        apiEditProfile,
        apiEditAddress,
        reloadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
