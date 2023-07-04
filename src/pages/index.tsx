import {withLayout} from "../layouts/layout";
import {HomePageComponent} from "../page-component";
import Seo from "../layouts/seo/seo";

const Home = () => {
  return (
      <Seo>
        <HomePageComponent />
      </Seo>
  )
}

export default withLayout(Home)