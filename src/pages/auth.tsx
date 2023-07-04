import {AuthPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const Auth = () => {
    return (
        <Seo metaTitle={'SolveCode | Auth Page'} metaDescription={'LogIn or Create own account for using this platform'}>
            <AuthPageComponent />
        </Seo>
    )
}

export default Auth