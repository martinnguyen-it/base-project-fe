import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css';
import { store } from '@stores';
import { Provider } from 'jotai';
import { Router } from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: true, minimum: 0.1 });

export default function App({
    Component,
    pageProps: { ...pageProps },
}: AppProps) {
    Router.events.on('routeChangeStart', () => {
        NProgress.start();
    });
    Router.events.on('routeChangeComplete', () => {
        NProgress.done();
    });
    return (
        <>
            <Head>
                <title>Digital Assets Accounting</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <Provider store={store}>
                <ToastContainer autoClose={6000} />
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
