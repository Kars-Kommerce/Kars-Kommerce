import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Avatar,
  Flex,
  Button,
} from "@chakra-ui/react";
import Tag from "../Tag";
import ModalCreateAd from "../Modal/CreateAd/ModalCreateAd";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
const AnnouncerPerfilCard = ({ authorName, bio, userId }: any) => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Card
        margin={"4.75rem 0"}
        w={"90%"}
        maxW="1240px"
        css={{ boxShadow: "none" }}
        borderRadius={"4px"}
        bg={"grey.white"}
        padding={"24px"}
        alignSelf={"center"}
      >
        <CardBody>
          <Flex alignItems="flex-start">
            <Avatar
              color={"grey.white"}
              size="xl"
              name={authorName}
              bgColor={"brand.1"}
            ></Avatar>
          </Flex>

          <Stack mt="6" spacing="7">
            <Flex gap="0.75rem" alignItems="center">
              <Heading
                size="md"
                fontSize="h6"
                textAlign={"center"}
                noOfLines={1}
              >
                {authorName}{" "}
              </Heading>
              <Tag tags={[{ tag: "Anunciante" }]} />
            </Flex>
            <Text color={"grey.2"} noOfLines={{ base: 6, md: 3 }}>
              {bio}
            </Text>
          </Stack>
        </CardBody>

        <CardFooter display={"flex"} justifyContent={"flex-start"}>
          {user?.id == userId && <ModalCreateAd />}
        </CardFooter>
      </Card>
    </>
  );
};

export default AnnouncerPerfilCard;
