import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "../theme"
import { GetStaticProps } from 'next'
import { getDictionary } from '@/utils/getDictionary'
import { Translation } from 'react'
import { useRouter } from 'next/router'
import * as utils from "@/utils"

interface Props {
  t: Translation<{}>["t"]
}

function App({ Component, pageProps }: AppProps<Props>) {

  return (
    <>
      <Head>
        <link rel="canonical" href={utils.resolveURL({ path: useRouter().asPath.replace(/(\/#\/?).*/,'') })}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout t={pageProps.t}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const t = await getDictionary();

  return {
    props: { t }
  }
}

export default App
