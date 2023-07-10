import {withLayout} from "../../layouts/layout";
import {GetServerSideProps} from "next";
import {Articles} from "../../services/article.service";
import {ArticleType} from "../../interfaces/article.interface";
import {Language} from "../../interfaces/constants.interface";
import {ArticlePageComponent} from "../../page-component";
import Seo from "../../layouts/seo/seo";
import {useTranslation} from "react-i18next";

const ArticlePage = ({articles}: ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <Seo
            metaTitle={
                `SolveCode | ${t('article_page_title', { ns: 'seo' })}` ||
                'SolveCode | Articles'
            }
            metaDescription={
                `SolveCode | ${t('article_page_description', { ns: 'seo' })}` ||
                'Useful articles of SolveCode'
            }
        >
            <ArticlePageComponent articles={articles} />
        </Seo>
    );
}

export default withLayout(ArticlePage)

export const getServerSideProps:GetServerSideProps = async ({req}) => {
    const lng: Language = req.cookies.i18next as Language;
    const articles = await Articles.getArticles(lng)

    return {
        props: {
            articles,
        }
    }
};

interface ArticlesPageProps extends Record<string, unknown>{
    articles: ArticleType[];
}