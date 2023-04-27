import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { LogoBlack } from "../Logo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";

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
          <Stack
            flex={{ base: 1, md: 0 }}
            display={{ base: "none", md: "flex" }}
            justify={"flex-start"}
            direction={"row"}
            spacing={2}
            borderLeft={"2px solid"}
            borderColor={"grey.6"}
            paddingLeft={"20px"}
            alignItems={"center"}
            minW={"25%"}
            minH={"100%"}
            onClick={logout}
          >
            <Avatar bg={"brand.1"} size={"sm"} name={user.name} />
            <Text>{user.name}</Text>
          </Stack>
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
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: NavItem[];
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Login",
    href: "#",
  },
  {
    label: "Cadastro",
    href: "#",
  },
];
