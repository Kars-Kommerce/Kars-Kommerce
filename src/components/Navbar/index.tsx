import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { LogoBlack } from "../Logo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import ModalEditProfile from "../Modal/EditProfile/ModalEditProfile";
import ModalEditAddress from "../Modal/EditAddress/ModalEditAddress";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h={"60px"}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          cursor={"pointer"}
          maxW={"fit-content"}
          flex={{ base: 1 }}
          justify={"start"}
          onClick={() => navigate("/")}
        >
          <LogoBlack />
        </Flex>
        {user ? (
          <Menu>
            <MenuButton
              minW={"25%"}
              minH={"100%"}
              as={Button}
              bg={"transparent"}
              _hover={{ bg: "none" }}
              py={0}
              borderLeft={"2px solid"}
              borderColor={"grey.6"}
              borderRadius={0}
              display={{ base: "none", md: "flex" }}
            >
              <Stack
                flex={{ base: 1, md: 0 }}
                display={{ base: "none", md: "flex" }}
                justify={"flex-start"}
                direction={"row"}
                spacing={2}
                paddingLeft={"20px"}
                alignItems={"center"}
                minW={"25%"}
                minH={"100%"}
              >
                <Avatar bg={"brand.1"} size={"sm"} name={user.name} />
                <Text color={"grey.2"}>{user.name}</Text>
              </Stack>
            </MenuButton>
            <MenuList>
              <ModalEditProfile></ModalEditProfile>
              <ModalEditAddress></ModalEditAddress>
              {user.is_advertiser && (
                <MenuItem onClick={() => navigate("/profile")}>
                  Meus Anúncios
                </MenuItem>
              )}
              <MenuItem onClick={logout}>Sair</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Stack
            flex={{ base: 1, md: 0 }}
            display={{ base: "none", md: "flex" }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            borderLeft={"2px solid"}
            borderColor={"grey.6"}
            paddingLeft={"20px"}
            minH={"100%"}
            alignItems={"center"}
          >
            <Button onClick={() => navigate("/login")} variant={"linkButton"}>
              Fazer Login
            </Button>
            <Button onClick={() => navigate("/register")} variant={"outline2"}>
              Cadastrar
            </Button>
          </Stack>
        )}

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          justifyContent={"flex-end"}
        >
          <IconButton
            onClick={onToggle}
            maxW={"fit-content"}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ base: "flex", md: "none" }}
    >
      <Flex
        flexDirection={"column"}
        gap={"1rem"}
        alignSelf={"center"}
        w={"100%"}
      >
        {user ? (
          <Flex
            align={"center"}
            alignSelf={"center"}
            direction={"column"}
            w={"90%"}
            h={"100%"}
            gap={"1rem"}
          >
            <Button variant={"linkButton"} w={"90%"} onClick={onOpen}>
              Editar Perfil
            </Button>
            <Button variant={"linkButton"} w={"90%"}>
              Editar Endereço
            </Button>
            {user.is_advertiser && (
              <Button
                onClick={() => navigate("/profile")}
                variant={"linkButton"}
                w={"90%"}
              >
                Meus anuncios
              </Button>
            )}
            <Button onClick={logout} variant={"linkButton"} w={"90%"}>
              Sair
            </Button>
          </Flex>
        ) : (
          <>
            <Link
              onClick={() => navigate("/login")}
              fontWeight={"600"}
              color={"grey.2"}
              fontSize={"b1"}
            >
              Fazer Login
            </Link>
            <Button
              onClick={() => navigate("/register")}
              variant={"outline2"}
              maxW={"333px"}
              w={"90%"}
            >
              Cadastrar
            </Button>
          </>
        )}
      </Flex>
    </Stack>
  );
};
