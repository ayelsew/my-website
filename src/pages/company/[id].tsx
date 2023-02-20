import Head from 'next/head'

import HeaderCompany from '@/components/HeaderCompany'

import * as S from "./styles"
import { Carousel } from '@/components/Carousel'
import Card from '@/components/Card'
import Button from '@/components/ButtonLink'
import { Eye } from '@/components/images/icons/vectors'
import Paragraph from '@/components/Paragraph'
import TitleH2 from '@/components/TitleH2'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getDictionary } from '@/utils/getDictionary'
import { FCT } from 'react'

const Company: FCT<{ id: number }> = ({ t, id }) => {
  return (
    <>
      <Head>
        <title>{t.companies[id].name}</title>
        <meta name="description" content={t.companies[id].about_experience} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <S.Section1Wrapper>
        <S.Content>
          <HeaderCompany
            icon={t.companies[id].icon}
            title={t.companies[id].name}
            role={t.companies[id].role}
            period={t.companies[id].period}
            t={t}
          />

          <S.Snippet>
            <TitleH2>
              Sobre a experiência
            </TitleH2>
            <Paragraph>
              {t.companies[id].about_experience}
            </Paragraph>
          </S.Snippet>

          <S.CarouselArea>
            <TitleH2>
              Projetos
            </TitleH2>
            <Carousel>
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} href="/project" />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} href="/project" />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} href="/project" />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} href="/project" />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} href="/project" />
                </>}
              />
            </Carousel>
          </S.CarouselArea>
        </S.Content>
      </S.Section1Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const t = await getDictionary();

  return {
    props: {
      t,
      id: Number(params?.id)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      "/company/0"
    ],
    fallback: "blocking"
  }
}

export default Company;
