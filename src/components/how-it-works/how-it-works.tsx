import SectionTitle from "../section-title/section-title";
import {FinishRightIcon, OnlineCourseIcons, OnlineLearningIcons, OnlineStudentIcons, RightLineIcons} from "../../icons";
import {Box, Flex, SimpleGrid, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {Fragment} from "react";

const HowItWorks = () => {
    const backgroundColor = useColorModeValue('gray.200', 'gray.700')
    return <>
        <Text textAlign={'center'}>
            <SectionTitle title={'How it works?'} subtitle={'10,000+ unique online course list designs'}/>
        </Text>
        <SimpleGrid mt={10} columns={5} spacing={10} alignItems={'center'}>
            {data.map((item, idx) => {
                const odd = idx % 2

                return (
                    <Fragment key={idx}>
                        {!odd ? (
                            <Stack justify={'center'} align={'center'}>
                                <Flex w={100} h={100} justify={'center'} align={'center'}
                                      backgroundColor={backgroundColor} borderRadius={'full'}>
                                    {item.icon}
                                </Flex>
                                <Text textAlign={'center'}>{item.title}</Text>
                            </Stack>
                        ) : (
                            <Stack justify={'center'}>{item.icon}</Stack>
                        )}
                    </Fragment>
                )
            })}
        </SimpleGrid>
    </>
}
export default HowItWorks

const data = [
    {title: 'Signup Platform', icon: <OnlineCourseIcons/>},
    {icon: <RightLineIcons/>},
    {title: 'Find Courses', icon: <OnlineLearningIcons/>},
    {icon: <FinishRightIcon/>},
    {title: 'Learn Relaxing', icon: <OnlineStudentIcons/>},
];