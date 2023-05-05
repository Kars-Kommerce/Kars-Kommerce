import { Avatar, Box, Button, Flex, Heading, IconButtonProps, Textarea } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import Api from "../../utils/Api";


const schema = z.object({
  text: z.string().nonempty(),
});

interface iCreateComentProps {
  adId:number
}

const CreateComment = ({adId}:iCreateComentProps) => {
  const user = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => Api.post(`/ads/${adId}/comment`, data);
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
        <Flex alignItems={'center'} gap={'10px'}>
          <Avatar
            color={"grey.white"}
            size="sm" name={user.user?.name}
            bg={'brand.1'}>
          </Avatar>
          <Heading fontWeight={'500'} color={'grey.2'} fontSize={'h7'}>{user.user?.name}</Heading>
        </Flex>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <Flex w={'100%'} gap={'20px'} border={'1px solid'} borderColor={'grey.7'} padding={'0px 0 20px 20px'} flexDirection={'column'} position={'relative'}>
            <Textarea   maxW={'75%'} boxSizing={'border-box'} border={'none'} {...register("text")} ></Textarea>
            <Button marginTop={'20px'} boxSizing="border-box" position={'absolute'} bottom={'10px'} right={'10px'} type="submit">Comentar</Button>
          </Flex>
        </form>

      </Box>
    </>
  );
};

export default CreateComment;
