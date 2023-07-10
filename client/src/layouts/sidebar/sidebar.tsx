import {Box, Button, Container, HStack, Icon, Text, useColorModeValue} from "@chakra-ui/react";
import {navigation} from "../../config/constants";
import Link from "next/link";
import {useRouter} from "next/router";
import {SidebarProps} from "./sidebar.props";
import {useTranslation} from "react-i18next";

const Sidebar = ({toggle}: SidebarProps): JSX.Element => {
    const router = useRouter()
    const {t} = useTranslation()
    return <Box zIndex={1002} pos={'fixed'} left={{base: toggle ? 0 : '-100%', lg: '0'}} transition={'all .6s ease'}
                overflowY={"scroll"} css={{
        '&::-webkit-scrollbar': {width: '3px'},
        '&::-webkit-scrollbar-track': {width: '1px'},
        '&::-webkit-scrollbar-thumb': {background: 'gray'},
    }} right={0} top={'10vh'} w={{base: 'full', lg: '300px'}} h={'90vh'}
                bg={useColorModeValue('gray.50', 'gray.900')} borderRight={'1px'}
                color={useColorModeValue('gray.700', 'gray.200')}
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container maxW={'container.xl'}>
            {navigation.map((item) => (
                <Box key={t(item.title,{ns: 'layout'})} mt={10}>
                    <Text>{t(item.title, {ns: 'layout'})}</Text>
                    {item.links.map((nav, idx) => {
                        const active = `/${router.pathname.split('/')[1]}` == nav.route
                        return (
                            <Link href={`/${nav.route}`} key={idx}>
                                <Button colorScheme={'facebook'} variant={active ? 'solid' : 'ghost'} w={'full'}
                                        justifyContent={'flex-start'} h={14} mt={2}>
                                    <HStack gap={2}>
                                        <Icon as={nav.icon}/>
                                        <Text>{t(nav.label, {ns: 'layout'})}</Text>
                                    </HStack>
                                </Button>
                            </Link>
                        )
                    })}
                </Box>
            ))}
        </Container>
    </Box>
}

export default Sidebar