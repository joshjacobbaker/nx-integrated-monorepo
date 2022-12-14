import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mira!</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
