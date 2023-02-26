import Footer from '@/components/Footer';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import { getDictionary } from '@/utils/getDictionary';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { FCT } from 'react';

import * as S from "./styles";

interface HomeProps {}

const Home: FCT<HomeProps> = ({ t }) => {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{t.who_am_I.head.title}</title>
        <meta name="description" content={t.who_am_I.head.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <S.Section id="who-am-I">
        <Section1 t={t} />
      </S.Section>
      <S.Section id="skills">
        <Section2 t={t} />
      </S.Section>
      <S.Section id="portfolio">
        <Section3 t={t} />
      </S.Section>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const t = await getDictionary();
  return {
    props: { t }
  }
}

export default Home;
