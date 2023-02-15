import Head from 'next/head'

import * as S from "./styles"
import { Carousel } from '@/components/Carousel'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { Eye } from '@/components/images/icons/vectors'
import HeaderProject from '@/components/HeaderProject'

const Project = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.SectionWrapper>
        <HeaderProject /> 
        <S.Content>
          

          <S.Snippet>
            <S.SnippetTitle>
              Sobre a experiência
            </S.SnippetTitle>
            <S.SnippetParagraph>
              Lorem linguiça é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
            </S.SnippetParagraph>
          </S.Snippet>

          <S.CarouselArea>
            <S.SnippetTitle>
              Projetos
            </S.SnippetTitle>
            <Carousel>
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} />
                </>}
              />
              <Card
                title="IP Sync Cloudflare"
                description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
                background="/images/ip_sync_cloudflare.png"
                buttons={<>
                  <Button text='Vizualizar' icon={<Eye size='20' />} />
                </>}
              />
            </Carousel>
          </S.CarouselArea>
        </S.Content>
      </S.SectionWrapper>
    </>
  )
}

export default Project;
