import {withLayout} from "../layouts/layout";
import {AboutPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const About = () => {
    return (
        <Seo metaTitle={'SolveCode | About us'} metaDescription={'We prefer advice the best things for your future'}>
            <AboutPageComponent />
        </Seo>
    )
}

export default withLayout(About)