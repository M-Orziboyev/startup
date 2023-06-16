import {LayoutProps} from "./layout.props";
import {Box} from "@chakra-ui/react";
import Header from "./headar/header";
import {FunctionComponent} from "react";
import Sidebar from "./sidebar/sidebar";

const Layout = ({children}: LayoutProps):JSX.Element => {
    return <Box maxWidth={'full'} overflow={'hidden'} >
        <Header />
        <Sidebar />
        <Box>{children}</Box>
    </Box>
}

export default Layout

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}