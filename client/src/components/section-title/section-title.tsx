import {SectionTitleProps} from "./section-title.props";
import {Box, Heading, Text} from "@chakra-ui/react";

const SectionTitle = ({title, subtitle, ...props}:SectionTitleProps):JSX.Element => {
    return <Box>
        <Heading as={'h3'}>{title}</Heading>
        <Text mt={'1px'} opacity={'.8'}>{subtitle}</Text>
    </Box>
}

export default SectionTitle