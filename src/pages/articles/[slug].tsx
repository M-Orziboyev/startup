import {withLayout} from "../../layouts/layout";
import {Articles} from "../../services/article.service";
import {ArticleType} from "../../interfaces/article.interface";
import {GetServerSideProps} from "next";
import {ArticleDetailedComponent} from "../../page-component";
import {Language} from "../../interfaces/constants.interface";
import {language} from "../../config/constants";
import {redirect} from "next/navigation";
import {defaultStandaloneParam} from "@chakra-ui/toast/dist/create-standalone-toast";
import {prepareDestination} from "next/dist/shared/lib/router/utils/prepare-destination";

const ArticleDetailPage = ({article} : ArticleDetailPageProps) => {
    return <ArticleDetailedComponent  article={article}/>
}

export default withLayout(ArticleDetailPage)


export const getServerSideProps:GetServerSideProps<ArticleDetailPageProps> = async ({query,req}) => {
    const slug = query.slug as string
    const lng: Language = req.cookies.i18next as Language
    const article = await Articles.getDetailedArticle(slug)

    if (article.language === lng ){
        return {
            props: {
                article,
            }

        }
    }
    return {
        redirect: {
            destination:'/articles',
            permanent: false
        }
    }

}

interface ArticleDetailPageProps extends Record<string, unknown> {
    article: ArticleType
}
