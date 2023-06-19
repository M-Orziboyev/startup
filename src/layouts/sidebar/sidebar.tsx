import {Box, Button, Container, HStack, Icon, Text, useColorModeValue} from "@chakra-ui/react";
import {navigation} from "../../config/constants";
import Link from "next/link";
import {useRouter} from "next/router";
import {SidebarProps} from "./sidebar.props";

const Sidebar = ({toggle}: SidebarProps):JSX.Element => {
    const router = useRouter()
    return <Box zIndex={1002} pos={'fixed'} left={{base: toggle ? 0 : '-100%', lg: '0'}} transition={'all .6s ease'} overflowY={"scroll"} css = {{
        '&::-webkit-scrollbar': { width: '3px' },
        '&::-webkit-scrollbar-track': { width: '1px' },
        '&::-webkit-scrollbar-thumb': { background: 'gray' },
    }} right={0} top={'10vh'} w={{base: 'full', lg: '300px'}} h={'90vh'}
                bg={useColorModeValue('gray.50', 'gray.900')} borderRight={'1px'}
                color={useColorModeValue('gray.700', 'gray.200')}
                borderRightColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container maxW={'container.xl'}>
            {navigation.map((item) => (
                <Box key={item.title} mt={10}>
                    <Text>{item.title}</Text>
                    {item.links.map((nav, idx) => {
                        const active = router.asPath == nav.route
                        return (
                            <Link href={`/${nav.route}`} key={idx}>
                                <Button colorScheme={'facebook'} variant={active ? 'solid' : 'ghost'} w={'full'}
                                        justifyContent={'flex-start'} h={14} mt={2}>
                                    <HStack gap={2}>
                                        <Icon as={nav.icon}/>
                                        <Text>{nav.label}</Text>
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