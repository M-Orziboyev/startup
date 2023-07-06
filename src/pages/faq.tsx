import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { FaqPageComponent } from 'src/page-component';

const FaqPage = () => {
    const { t } = useTranslation();

    return (
        <Seo
            metaTitle={
                `SolveCode | ${t('faq_page_title', { ns: 'seo' })}` || 'SolveCode | FAQ'
            }
            metaDescription={
                `SolveCode | ${t('faq_page_description', { ns: 'seo' })}` ||
                'More users in SolveCode platform frequently asked question'
            }
        >
            <FaqPageComponent />
        </Seo>
    );
};

export default withLayout(FaqPage);