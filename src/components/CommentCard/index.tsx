import { Avatar, Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { formatDistanceToNow, formatRelative } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface iCommentProps {
  name: string;
  date: Date;
  text: string;
}

const CommentCard = ({ name, date, text }: iCommentProps) => {
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsed = formatDistanceToNow(new Date(date).getTime(), {
        locale: ptBR,
      });
      setTimeElapsed(elapsed);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <Box maxW={"90%"}>
      <Flex alignItems={"center"} gap={"10px"}>
        <Avatar
          color={"grey.white"}
          size="sm"
          name={name}
          bg={"brand.1"}
        ></Avatar>
        <Heading fontWeight={"500"} color={"grey.2"} fontSize={"h7"}>
          {name}
        </Heading>
        <Text fontSize={"b2"} color={"grey.3"}>{`\u00B7 há ${timeElapsed
          .split(" ")
          .slice(-2)
          .join(" ")}`}</Text>
      </Flex>
      <Text marginTop={"10px"}>{text}</Text>
    </Box>
  );
};

export default CommentCard;
