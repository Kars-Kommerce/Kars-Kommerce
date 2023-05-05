import { createContext, ReactNode, useEffect, useState } from "react";
import Api from "../utils/Api";
import { Flex, Spinner, useToast } from "@chakra-ui/react";

interface IAdsProviderProps {
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
interface IErro {
  response: {
    data: {
      message: string;
    };
  };
}
interface IResponseAdsApi {
  data: {
    data: IAdvertisementResponse[];
    page: number;
    pageCount: number;
    total: number;
  };
}
interface IAdsContext {
  loadingAds: boolean;
  reloadingAds(): void;
  ads: IAdvertisementResponse[];
}

export const AdsContext = createContext<IAdsContext>({} as IAdsContext);

export function AdsProvider({ children }: IAdsProviderProps) {
  const [loadingAds, setLoadingAds] = useState<boolean>(true);
  const [ads, setAds] = useState<IAdvertisementResponse[]>([]);

  const toast = useToast();

  useEffect(() => {
    const getAds = async () => {
      try {
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
      } finally {
        setLoadingAds(false);
      }
    };

    getAds();
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
