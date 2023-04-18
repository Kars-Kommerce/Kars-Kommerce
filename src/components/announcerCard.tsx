import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,Button,ButtonGroup,Text,Avatar, Center, Link } from '@chakra-ui/react'
const AnnouncerCard = ({ authorName,description,link }: any) => {
   
    return (
        <>  
            <Card maxW='md' css={{boxShadow:'none'}} borderRadius={'4px'} bg={'grey.white'} padding={'15px 0'}>
  <CardBody >
    <Stack css={{display:"flex", alignItems: "center" }}>
        <Avatar size='xl' name={authorName} bgColor={'brand.1'}></Avatar>
    </Stack>
    
    <Stack mt='6' spacing='7'>
      <Heading  size='md' fontSize='h5' textAlign={'center'} noOfLines={1} >{authorName}  </Heading>
      <Text textAlign={'center'} color={'grey.2'} noOfLines={3} >
        {description}
      </Text>
     
    </Stack>
  </CardBody>

  <CardFooter display={'flex'} justifyContent={'center'}>
   
      <Link variant='solid' bg={'grey.0'} color={'grey.white'} _hover={{bg:'grey.2'}} padding={'12px 24px'} borderRadius={'4px'} href={link}>
      Ver todos anuncios
      </Link>

  </CardFooter>
</Card>
        </>
    )
    
  }
  
  export default AnnouncerCard;
  