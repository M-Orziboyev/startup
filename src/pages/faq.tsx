import {withLayout} from "../layouts/layout";
import {FaqPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const Faq = () => {
    return (
        <Seo metaTitle={'SolveCode | FAQ Page'} metaDescription={'The platform users often aks these question and those answers'}>
            <FaqPageComponent />
        </Seo>
    )
}

export default withLayout(Faq)