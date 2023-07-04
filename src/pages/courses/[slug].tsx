import {withLayout} from "../../layouts/layout";
import {DetailedCourseComponent} from "../../page-component";
import {useRouter} from "next/router";
import Seo from "../../layouts/seo/seo";

const DetailedCoursePage = () => {
    const router = useRouter()
    return (
        <Seo metaTitle={`SolveCode | ${router.query.slug}`}>
            <DetailedCourseComponent/>
        </Seo>
    )

}

export default withLayout(DetailedCoursePage)