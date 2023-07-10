import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import CoursesPageComponent from "../../page-component/course-page-component/course-page-component";

const Courses = () => {
    const { t } = useTranslation();

    return (
        <Seo
            metaTitle={
                `SolveCode | ${t('course_page_title', { ns: 'seo' })}` ||
                'SolveCode | All Courses'
            }
            metaDescription={
                `SolveCode | ${t('course_page_description', { ns: 'seo' })}` ||
                'All courses in SolveCode platform just learn and relax'
            }
        >
            <CoursesPageComponent />
        </Seo>
    );
};

export default withLayout(Courses);