import Head from 'next/head'
import { FCT, useState } from 'react'
import Image from 'next/image'

import * as S from "./styles"

import { Carousel } from '@/components/Carousel'
import HeaderProject from '@/components/HeaderProject'
import ExpandOnScreeen from '@/components/ExpandOnScreen'
import Paragraph from '@/components/Paragraph'
import TitleH2 from '@/components/TitleH2'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getDictionary } from '@/utils/getDictionary'
import VideoPlayer from '@/components/VideoPlayer'

interface ProjectProps {
  post: Awaited<ReturnType<typeof getDictionary>>["projects"][0]
}


const Project: FCT<ProjectProps> = ({ t, post }) => {
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>{post.title} - Leydev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.SectionWrapper>
        <HeaderProject
          background={post.cover}
          company={post.client}
          title={post.title}
          clientLogo={post.icon}
          t={t}
        />
        <S.Content>

          <S.ColumnOne>
            <TitleH2>
              {t.project.technologies}
            </TitleH2>
            <S.ListTechnologies>
              {post.technologies.map((item) => (
                <S.Technology key={item.icon}>
                  <S.TechnologyIcon src={item.icon} />
                  <S.TechnologyShortName>{item.name}</S.TechnologyShortName>
                  <Paragraph>
                    {item.description}
                  </Paragraph>
                </S.Technology>
              ))}
            </S.ListTechnologies>
          </S.ColumnOne>

          <S.ColumnTwo>
            <ExpandOnScreeen expand={expand} onClose={() => setExpand(false)}>
              <Carousel>
                <>
                  {post.images.map((item) => {
                    if (item.type === "video") return (
                      <S.VideoCard key={`${item.src[0]}${item.orientation}`} className={item.orientation}>
                        <VideoPlayer
                          srcs={
                            (item.src as string[]).map((src) => ({ src, type: src.slice(-4).replace(".","") }))
                          }
                          t={t}
                        />
                      </S.VideoCard>
                    );

                    return (
                      <S.ImageCard key={item.src as string} className={item.orientation} onClick={() => setExpand(true)}>
                        <Image src={item.src as string} alt="Tela de caixa" fill />
                      </S.ImageCard>
                    )
                  })}
                </>
              </Carousel>
            </ExpandOnScreeen>
            <S.Snippet>
              <TitleH2>
                {t.project.about_project}
              </TitleH2>
              <Paragraph>
                {post.description}
              </Paragraph>
            </S.Snippet>
          </S.ColumnTwo>
        </S.Content>
      </S.SectionWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const t = await getDictionary();
  const post = t.projects.find(({ slug }) => slug === params?.slug)

  if (!post) return {
    notFound: true,
  }

  return {
    props: {
      t,
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const t = await getDictionary();

  return {
    paths: [
      ...t.projects.map(({ slug }) => `/project/${slug}`)
    ],
    fallback: "blocking"
  }
}

export default Project;
