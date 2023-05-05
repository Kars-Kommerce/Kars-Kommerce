import { Box,  Heading } from "@chakra-ui/react";

import ptBR from 'date-fns/locale/pt-BR'
import CommentCard from "../CommentCard";


interface IComment {
    id: number;
    name:string;
    text:string;
    created_at:string;

}

const CommentBox = (list:IComment[]) => {
  return (
    <>
         <Box
        p={4}
        w="90%"
        maxW={"750px"}
        maxH="352px"
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
        {
            list.map( comment=> <CommentCard key={comment.id} name={comment.name} text={comment.text} date={comment.created_at}></CommentCard>)
        }
      </Box>
    </>
  );
};

export default CommentBox;
