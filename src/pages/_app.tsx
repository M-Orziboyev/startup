import type {AppProps} from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import 'react-multi-carousel/lib/styles.css';
import {I18nextProvider} from 'react-i18next';
import i18n from '../i18n/index';

export default function App({Component, pageProps}: AppProps) {
    return (
    <I18nextProvider i18n={i18n}>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    </I18nextProvider>
    )
}
