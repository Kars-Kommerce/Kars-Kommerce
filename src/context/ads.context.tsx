import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../utils/Api";
import { Flex, Spinner, useToast } from "@chakra-ui/react";
import { IAdsAuthorProps } from "../utils/Mock";

interface IAdsProviderProps {
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
interface IAdsResponseProps {
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
interface IResponseAdsApi {
  data: {
    data: IAdsResponseProps[];
    page: number;
    pageCount: number;
    total: number;
  };
}
interface IAdsContext {
  loadingAds: boolean;
  reloadingAds(): void;
  ads: IAdsResponseProps[];
}

export const AdsContext = createContext<IAdsContext>({} as IAdsContext);

export function AdsProvider({ children }: IAdsProviderProps) {
  const [loadingAds, setLoadingAds] = useState<boolean>(true);
  const [ads, setAds] = useState<IAdsResponseProps[]>([]);

  const toast = useToast();

  useEffect(() => {
    async function getAds() {
      if (loadingAds) {
        try {
          const { data }: IResponseAdsApi = await Api.get(`/ads`);
          setAds(data.data);
        } catch (err) {
          toast({
            title: "Error",
            description: (err as IErro).response.data.message,
            status: "error",
            duration: 1500,
            isClosable: true,
            position: "top-right",
          });
        }
      }
    }

    getAds();
    setLoadingAds(false);
  }, [loadingAds]);

  function reloadingAds(): void {
    setLoadingAds(true);
  }

  if (loadingAds) {
    return (
      <Flex w={"100vw"} h="100vh" align={"center"} justify={"center"}>
        <Spinner size="xl" color="brand.1" thickness="4px" />
      </Flex>
    );
  }

  return (
    <AdsContext.Provider
      value={{
        loadingAds,
        reloadingAds,
        ads,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
}
