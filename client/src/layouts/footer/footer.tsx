import {Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue} from "@chakra-ui/react";
import {format} from 'date-fns'
import {FaFacebook, FaInstagram, FaTelegram} from "react-icons/fa";
import {useTranslation} from "react-i18next";
const Footer = () => {
    const {t} = useTranslation()
    return <Box pl={{base: 0, lg: '320px'}} mt={10} pt={3} pb={3} w={'full'} borderTop={'1px'}
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}
                borderTopColor={useColorModeValue("gray.200", "gray.700")}
                h={'10hv'}
    >
        <Flex justify={'space-between'} align={'center'} h={'full'}>
            <Text>&#169; {format(new Date(), 'yyyy')}  SolveCode. {t('footer', {ns: 'home'})}</Text>
            <Flex gap={3} mr={10}>
                <IconButton aria-label={'telegram'} colorScheme={'facebook'} variant={'outline'} icon={<FaTelegram />}/>
                <IconButton aria-label={'Instagram'} colorScheme={'facebook'} variant={'outline'} icon={<FaInstagram />} />
                <IconButton aria-label={'Facebook'} colorScheme={'facebook'} variant={'outline'} icon={<FaFacebook />} />
            </Flex>
        </Flex>
    </Box>
}

export default Footer