import {CoursePageComponent} from "../../page-component";
import {withLayout} from "../../layouts/layout";
import Seo from "../../layouts/seo/seo";

const Index = () => {
    return(
        <Seo metaTitle={'SolveCode | All courses'} metaDescription={'We can give the best quality courses for you are in need'}>
            <CoursePageComponent />
        </Seo>
    )
}
export default withLayout(Index)