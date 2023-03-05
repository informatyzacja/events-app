import { Layout } from '@/components/Layout';
import { theme } from '@/styles/theme';
import { api } from '@/utils/api';
import { ChakraProvider } from '@chakra-ui/react';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import Head from 'next/head';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>Wydarzenia</title>
        <meta
          name="description"
          content="Strona do przeglądania wydarzeń studenckich w obrębie Politechniki Wrocławskiej"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ChakraProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
