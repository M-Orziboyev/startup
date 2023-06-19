import SectionTitle from "../section-title/section-title";
import Carousel from "react-multi-carousel";
import {sponshipCarousel} from "../../config/carousel";
import {trustedCompeny} from "../../config/constants";
import {Icon, Text} from "@chakra-ui/react";

const Sponsorship = () => {
    return <>
        <Text textAlign={'center'}>
            <SectionTitle title={''} subtitle={'Trusted by the world\'\s best'} textAlign={'center'} mb={5}/>
        </Text>
        <Carousel responsive={sponshipCarousel} arrows={false} autoPlay={true} autoPlaySpeed={1000} showDots={false}
                  infinite>
            {trustedCompeny.map((item, idx) => (
                <Icon key={idx} as={item} fontSize={50} justifyContent={'space-around'}/>
            ))}
        </Carousel>
    </>
}
export default Sponsorship