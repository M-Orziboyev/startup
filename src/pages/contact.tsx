import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import Seo from 'src/layouts/seo/seo';
import { ContactPageComponent } from 'src/page-component';

const ContactPage = () => {
    const { t } = useTranslation();

    return (
        <Seo
            metaTitle={
                `SolveCode | ${t('contact_page_title', { ns: 'seo' })}` ||
                'SolveCode | Contact us'
            }
            metaDescription={
                `SolveCode | ${t('contact_page_description', { ns: 'seo' })}` ||
                'Contact with SolveCode and you can ask any questions'
            }
        >
            <ContactPageComponent />
        </Seo>
    );
};

export default withLayout(ContactPage);