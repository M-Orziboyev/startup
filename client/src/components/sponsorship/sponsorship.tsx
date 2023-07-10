import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";
import {sponshipCarousel} from "../../config/carousel";
import {trustedCompany} from "../../config/constants";
import {Icon, Text} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

const Sponsorship = () => {
    const {t} = useTranslation()
    return <>
        <Text textAlign={'center'}>
            <SectionTitle title={''} subtitle={t('sponsor_title', {ns: 'home'})} textAlign={'center'} mb={5}/>
        </Text>
        <Carousel responsive={sponshipCarousel} arrows={false} autoPlay={true} autoPlaySpeed={1000} showDots={false}
                  infinite>
            {trustedCompany.map((item, idx) => (
                <Icon key={idx} as={item} fontSize={50} justifyContent={'space-around'}/>
            ))}
        </Carousel>
    </>
}
export default Sponsorship