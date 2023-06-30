import {
    Box,
    Button,
    Flex,
    HStack, Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorMode, useColorModeValue
} from "@chakra-ui/react";
import {DarkLogo, LightLogo } from "../../icons";
import {BsFillMoonFill, BsFillSunFill, BsTranslate} from 'react-icons/bs';
import Link from "next/link";
import {BiMenuAltLeft, BiUserCircle} from "react-icons/bi";
import {MdOutlineContactSupport} from "react-icons/md";
import {HeaderProps} from "./header.props";
import {language} from "../../config/constants";
import {useTranslation} from "react-i18next";
import {TbWorld} from "react-icons/tb";
import {useRouter} from "next/router";

const Header = ({onToggle}:HeaderProps): JSX.Element => {
    const {toggleColorMode, colorMode} = useColorMode()
    const router = useRouter()

    const { i18n, t } = useTranslation();

    const onLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        router.replace(router.asPath)
    };
    return <Box zIndex={1002} pos={"fixed"} left={0} right={0} top={0} w={'full'} h={'10vh'} px={10} borderBottom={'1px'} bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')} borderBottomColor={useColorModeValue("gray.200", "gray.700")}>
                <Flex h={'full'} justify={'space-between'} align={'center'}>
                    <HStack>
                        <Icon  as={BiMenuAltLeft} onClick={onToggle} w={6} h={6} cursor={'pointer'}/>
                        <Link  href={'/'}>
                            {colorMode== 'light' ? <DarkLogo /> : <LightLogo/>}
                        </Link>
                    </HStack>
                    <HStack>
                        <IconButton aria-label={'support'}  icon={<MdOutlineContactSupport/>} colorScheme={'facebook'} variant={'ghost'}/>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<TbWorld />} textTransform={'capitalize'} colorScheme={'facebook'} variant={'solid'}>
                                {i18n.resolvedLanguage}
                            </MenuButton>
                            <MenuList p={0}>
                                {language.map(item => (
                                    <MenuItem
                                        key={item.lng}
                                        onClick={() => onLanguage(item.lng)}
                                        icon={<item.icon />}
                                        backgroundColor={i18n.resolvedLanguage === item.lng ? 'facebook.500' : ''}
                                    >
                                        {item.nativeLng}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                        <IconButton aria-label={'color-mode'} onClick={toggleColorMode} icon={colorMode == 'light' ? <BsFillMoonFill/> : <BsFillSunFill />} colorScheme={'facebook'} variant={"outline"}/>
                        <Button rightIcon={<BiUserCircle />} colorScheme={'facebook'}>{t('login', {ns: 'layout'})}</Button>
                    </HStack>
                </Flex>
    </Box>
}

export default Header