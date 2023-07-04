import {withLayout} from "../layouts/layout";
import {PricingPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const Pricing = () => {
    return (
        <Seo metaTitle={'SolveCode | Pricing Page'} metaDescription={'The best price teaching, watching, using and learning for SolveCode followers and students'}>
            <PricingPageComponent/>
        </Seo>)
}

export default withLayout(Pricing)