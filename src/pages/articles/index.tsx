import {withLayout} from "../../layouts/layout";
import {GetServerSideProps} from "next";
import {Articles} from "../../services/article.service";
import {ArticleType} from "../../interfaces/article.interface";
import {Language} from "../../interfaces/constants.interface";
import {ArticlePageComponent} from "../../page-component";

const ArticlePage = ({articles}: ArticlesPageProps) => {
    return <ArticlePageComponent articles={articles} />
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