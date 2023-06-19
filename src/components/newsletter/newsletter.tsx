import {Card, CardBody} from "@chakra-ui/card";
import {Box, Button, Input, Stack} from "@chakra-ui/react";
import SectionTitle from "../section-title/section-title";

const Newsletter = () => {
    return <>
        <Card mt={10}>
            <CardBody minH={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Stack spacing={3} textAlign={'center'} maxW={'container.sm'}>
                    <SectionTitle title={'Subscribe our Newsletter &'} subtitle={'Our platform what is education platform give educational video courses every day. Our instructors give technical materials belong to video lessons'} />
                    <Box pos={'relative'}>
                        <Input h={14} w={'full'} bg={'white'} color={'gray.900'} placeholder={'Your Email'} _placeholder={{color: 'gray.500'}}/>
                        <Button pos={'absolute'} right={2} top={2} colorScheme={'facebook'} zIndex={999}>Submit</Button>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    </>
}
export default Newsletter