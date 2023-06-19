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
import {DarkLogo, EngLogo, LightLogo, RusLogo, UzbLogo} from "../../icons";
import {BsFillMoonFill, BsFillSunFill, BsTranslate} from 'react-icons/bs';
import Link from "next/link";
import {BiMenuAltLeft, BiUserCircle} from "react-icons/bi";
import {MdOutlineContactSupport} from "react-icons/md";
import {HeaderProps} from "./header.props";

const Header = ({onToggle}:HeaderProps): JSX.Element => {
    const {toggleColorMode, colorMode} = useColorMode()
    return <Box zIndex={1002} pos={"fixed"} left={0} right={0} top={0} w={'full'} h={'10vh'} px={10} borderBottom={'1px'}bg={useColorModeValue('gray.50', 'gray.900')}
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
                            <MenuButton as={IconButton} icon={<BsTranslate />} colorScheme={'facebook'} variant={'solid'}/>
                            <MenuList>
                                <MenuItem icon={<UzbLogo/>}>UZB</MenuItem>
                                <MenuItem icon={<RusLogo/>}>RUS</MenuItem>
                                <MenuItem icon={<EngLogo/>}>ENG</MenuItem>
                            </MenuList>
                        </Menu>
                        <IconButton aria-label={'color-mode'} onClick={toggleColorMode} icon={colorMode == 'light' ? <BsFillMoonFill/> : <BsFillSunFill />} colorScheme={'facebook'} variant={"outline"}/>
                        <Button rightIcon={<BiUserCircle />} colorScheme={'facebook'}>Login</Button>
                    </HStack>
                </Flex>
    </Box>
}

export default Header