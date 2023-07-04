import {withLayout} from "../layouts/layout";
import {ContactPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const Contact = () => {
    return (
        <Seo metaTitle={'SolveCode | Contact Page'} metaDescription={'Contact with us'}>
            <ContactPageComponent />
        </Seo>
    )
}

export default withLayout(Contact)