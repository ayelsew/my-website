import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

import * as S from "./styles"

import { Carousel } from '@/components/Carousel'
import HeaderProject from '@/components/HeaderProject'
import ExpandOnScreeen from '@/components/ExpandOnScreen'
import Paragraph from '@/components/Paragraph'
import TitleH2 from '@/components/TitleH2'


const Project = () => {
  const [expand, setExpand] = useState<boolean>(false)
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
            <TitleH2>
              Tecnologias
            </TitleH2>
            <S.ListTechnologies>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <Paragraph>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </Paragraph>
              </S.Technology>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <Paragraph>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </Paragraph>
              </S.Technology>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <Paragraph>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </Paragraph>
              </S.Technology>
              <S.Technology>
                <S.TechnologyIcon src="/images/vectors/react.svg" />
                <Paragraph>
                  React é uma biblioteca JavaScript para criar interfaces de usuário.
                </Paragraph>
              </S.Technology>
            </S.ListTechnologies>
          </S.ColumnOne>

          <S.ColumnTwo>
            <ExpandOnScreeen expand={expand} onClose={() => setExpand(false)}>
              <Carousel>
                <S.ImageCard $display="horizontally" onClick={() => setExpand(true)}>
                  <Image src="/images/screenshots/asher_acaiteria/0.png" alt="Tela de caixa" fill />
                </S.ImageCard>
                <S.ImageCard $display="horizontally" onClick={() => setExpand(true)}>
                  <Image src="/images/screenshots/asher_acaiteria/1.png" alt="Tela de caixa" fill />
                </S.ImageCard>
                <S.ImageCard $display="horizontally" onClick={() => setExpand(true)}>
                  <Image src="/images/screenshots/asher_acaiteria/0.png" alt="Tela de caixa" fill />
                </S.ImageCard>
                <S.ImageCard $display="horizontally" onClick={() => setExpand(true)}>
                  <Image src="/images/screenshots/asher_acaiteria/1.png" alt="Tela de caixa" fill />
                </S.ImageCard>
              </Carousel>
            </ExpandOnScreeen>
            <S.Snippet>
              <TitleH2>
                Sobre a experiência
              </TitleH2>
              <Paragraph>
                Lorem linguiça é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
              </Paragraph>
            </S.Snippet>
          </S.ColumnTwo>
        </S.Content>
      </S.SectionWrapper>
    </>
  )
}

export default Project;
