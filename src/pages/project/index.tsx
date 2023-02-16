import Head from 'next/head'

import * as S from "./styles"

import { Carousel } from '@/components/Carousel'
import HeaderProject from '@/components/HeaderProject'
import Image from 'next/image'

const Project = () => {
  return (
    <>
      <Head>
        <title>Programa de frente de caixa - Leydev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.SectionWrapper>
        <HeaderProject />
        <S.Content>


          <S.ColumnOne>
            <S.TitleH2>
              Tecnologias
            </S.TitleH2>
            <S.ListTechnologies>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <S.TechnologyDescription>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </S.TechnologyDescription>
              </S.Technology>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <S.TechnologyDescription>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </S.TechnologyDescription>
              </S.Technology>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <S.TechnologyDescription>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </S.TechnologyDescription>
              </S.Technology>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <S.TechnologyDescription>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </S.TechnologyDescription>
              </S.Technology>
            </S.ListTechnologies>
          </S.ColumnOne>

          <S.ColumnTwo>
            <Carousel>
              <S.ImageCard $display="horizontally">
                <Image src="/images/screenshots/asher_acaiteria/0.png" alt="Tela de caixa" fill />
              </S.ImageCard>
              <S.ImageCard $display="horizontally">
                <Image src="/images/screenshots/asher_acaiteria/1.png" alt="Tela de caixa" fill />
              </S.ImageCard>
            </Carousel>
            <S.Snippet>
              <S.TitleH2>
                Sobre a experiência
              </S.TitleH2>
              <S.SnippetParagraph>
                Lorem linguiça é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
              </S.SnippetParagraph>
            </S.Snippet>
          </S.ColumnTwo>
        </S.Content>
      </S.SectionWrapper>
    </>
  )
}

export default Project;
