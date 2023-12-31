import SectionTitle from "../section-title/section-title";
import {CourseType} from "../../interfaces/course-interfaces";
import Carousel from "react-multi-carousel";
import {Divider, Flex, Heading, HStack, Icon, Image, Stack, Text} from "@chakra-ui/react";
import ReactStars from "react-stars";
import {CiViewList} from "react-icons/ci";
import {AiOutlineClockCircle} from "react-icons/ai";
import {SiGoogleanalytics} from "react-icons/si";
import {courseCarousel} from "../../config/carousel";
import {useTranslation} from "react-i18next";

const PopularCourses = () => {
    const {t} = useTranslation()
    return <>
        <SectionTitle title={t('popular_courses_title', {ns: 'home'})} subtitle={t('popular_courses_description', {ns: 'home'})} />
        <Carousel responsive={courseCarousel} arrows={true} showDots={false} autoPlaySpeed={5000} autoPlay={true} infinite >
            {data.map(item => (
                <Stack key={item.title} spacing={3} p={3} cursor={'pointer'}>
                    <Image src={item.image} alt={item.title} objectFit={'cover'} h={'210px'} w={'full'} borderRadius={'lg'} />
                    <HStack>
                        <Text color={'#e59819'}>{item.reviewAvarage.toFixed(1)}</Text>
                        <ReactStars edit={false}  value={item.reviewAvarage} color2={'#e59819'}/>
                        <Text opacity={'.8'}>({item.reviewCount})</Text>
                    </HStack>
                    <Heading fontSize={'xl'}>{item.title}</Heading>
                    <HStack>
                        <Flex align={'center'} gap={1}>
                            <Icon as={CiViewList} />
                            <Text >{item.lessonCount} Lessons</Text>
                        </Flex>
                        <Flex align={'center'} gap={1}>
                            <Icon as={AiOutlineClockCircle} />
                            <Text >{item.totalHour} Hours</Text>
                        </Flex>
                        <Flex align={'center'} gap={1}>
                            <Icon as={SiGoogleanalytics} />
                            <Text >{item.level}</Text>
                        </Flex>
                    </HStack>
                    <Divider />
                    <Flex justify={'space-between'} align={'center'}>
                        <HStack align={'center'}>
                            <Image src={item.author.avatar} alt={item.author.firstName} w={50} h={50} borderRadius={'full'}/>
                        <Text>{item.author.firstName} {item.author.lastName[0]}.</Text>
                        </HStack>
                        <Text>{item.price.toLocaleString("en-US", {style: 'currency', currency: 'USD'})}</Text>
                    </Flex>
                </Stack>
            ))}
        </Carousel>
    </>
}

export default PopularCourses

const data: CourseType[] = [
    {
        image: 'https://media.graphassets.com/3gf746AKRbWNjB8OCoEB',
        title: 'JavaScript full course',
        lessonCount: 96,
        totalHour: 13.6,
        level: 'Beginner',
        price: 20,
        reviewAvarage: 4.5,
        reviewCount: 200,
        author: {
            firstName: 'Muzaffar',
            lastName: 'Orziboyev',
            avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
        },
    },
    {
        image: 'https://media.graphassets.com/54vR0DStGoFuZBVkFwWQ',
        title: 'VueJS full course',
        lessonCount: 30,
        totalHour: 10.6,
        level: 'Beginner',
        price: 20,
        reviewAvarage: 4.5,
        reviewCount: 250,
        author: {
            firstName: 'Muzaffarr',
            lastName: 'Orziboyev',
            avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
        },
    },
    {
        image: 'https://media.graphassets.com/65rcPxsLT9ysJDisXF80',
        title: 'ReactJS full course',
        lessonCount: 70,
        totalHour: 19,
        level: 'Beginner',
        price: 20,
        reviewAvarage: 4.5,
        reviewCount: 150,
        author: {
            firstName: 'Muzaffar',
            lastName: 'Orziboyev',
            avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
        },
    },
    {
        image: 'https://media.graphassets.com/xactyo8TtyTIkAcMWvSm',
        title: 'VueX full course',
        lessonCount: 120,
        totalHour: 24.6,
        level: 'Beginner',
        price: 20,
        reviewAvarage: 5,
        reviewCount: 250,
        author: {
            firstName: 'Muzaffar',
            lastName: 'Orziboyev',
            avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
        },
    },
    {
        image: 'https://media.graphassets.com/Ql2hDpJhQsaBT3inNuZ4',
        title: 'Redux full course',
        lessonCount: 39,
        totalHour: 8.2,
        level: 'Beginner',
        price: 20,
        reviewAvarage: 4.9,
        reviewCount: 120,
        author: {
            firstName: 'Muzaffar',
            lastName: 'Orziboyev',
            avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
        },
    },
    {
        image: 'https://media.graphassets.com/mDcwhbguQpyM74jb18M5',
        title: 'NodeJS full course',
        lessonCount: 56,
        totalHour: 20.6,
        level: 'Beginner',
        price: 20,
        reviewAvarage: 5,
        reviewCount: 250,
        author: {
            firstName: 'Muzaffar',
            lastName: 'Orziboyev',
            avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
        },
    },
];