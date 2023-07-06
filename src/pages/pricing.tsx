import {withLayout} from "../layouts/layout";
import {PricingPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";
import {useTranslation} from "react-i18next";

const Pricing = () => {
    const { t } = useTranslation();

    return (
        <Seo
            metaTitle={
                `SolveCode | ${t('pricing_page_title', { ns: 'seo' })}` ||
                'SolveCode | Pricing Package'
            }
            metaDescription={
                `SolveCode | ${t('pricing_page_description', { ns: 'seo' })}` ||
                'The best package for using and doing lesson on SolveCode academy'
            }
        >
            <PricingPageComponent />
        </Seo>
    );
}

export default withLayout(Pricing)