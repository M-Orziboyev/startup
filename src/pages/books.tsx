import {withLayout} from "../layouts/layout";
import {BooksPageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const Books = () => {
    return (
        <Seo metaTitle={'SolveCode | Books page'} metaDescription={'We can advice GOAT (Great of all time) books collections and give you pdf version'}>
            <BooksPageComponent/>
        </Seo>
    )
}

export default withLayout(Books)