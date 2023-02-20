import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "../theme"
import { GetStaticProps } from 'next'
import { getDictionary } from '@/utils/getDictionary'
import { Translation } from 'react'

interface Props {
  t: Translation<{}>["t"]
}

function App({ Component, pageProps }: AppProps<Props>) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout t={pageProps.t}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t = await getDictionary();
  return {
    props: { t }
  }
}

export default App
