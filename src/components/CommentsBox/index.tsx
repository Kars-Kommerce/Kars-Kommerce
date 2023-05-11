import { Box, Heading } from "@chakra-ui/react";

import ptBR from "date-fns/locale/pt-BR";
import CommentCard from "../CommentCard";

interface IAdsAuthorProps {
  id: string;
  name: string;
  bio: string;
  is_advertiser: boolean;
}
interface IComment {
  id: number;
  author: IAdsAuthorProps;
  text: string;
  created_at: Date;
}
interface ICommentProps {
  list: IComment[];
}

const CommentBox = ({ list }: ICommentProps) => {
  return (
    <>
      <Box
        // p={4}
        w="90%"
        // maxW={"90%"}
        borderRadius="4px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        gap="32px"
        bg="grey.10"
        padding="36px 44px"
        alignSelf={"center"}
      >
        <Heading size="md" mb={4}>
          Comentarios
        </Heading>
        {list.map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.author.name}
            text={comment.text}
            date={comment.created_at}
          ></CommentCard>
        ))}
      </Box>
    </>
  );
};

export default CommentBox;
