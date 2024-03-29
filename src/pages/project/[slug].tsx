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
import * as utils from '@/utils'

interface ProjectProps {
  post: Awaited<ReturnType<typeof getDictionary>>["projects"][0]
}


const Project: FCT<ProjectProps> = ({ t, post }) => {
  const [expand, setExpand] = useState<boolean>(false)

  return (
    <>
      <Head>
        <title>{post.title} - Leydev</title>
        <meta name="description" content={post.short_description} />
        <meta property="og:url" content={utils.resolveURL({ path: `/project/${post.slug}` })} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} - Leydev`} />
        <meta property="og:description" content={post.short_description} />
        <meta property="og:image" content={utils.resolveURL({ path: post.cover[1] })} />
        <meta property="og:image:width" content="711" />
        <meta property="og:image:height" content="432" />
      </Head>
      <S.SectionWrapper>
        <HeaderProject
          background={post.cover}
          company={post.client}
          title={post.title}
          clientLogo={post.icon}
          actions={post.actions ?? []}
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
                  <S.TechnologyIcon >
                    <Image src={item.icon} fill alt={`Logo ${item.name}`} />
                  </S.TechnologyIcon>
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
                            (item.src as string[]).map((src) => {
                              const type = src.slice(-4).replace(".", "")
                              if (/audio\.webm$/gi.test(src)) {
                                return { src, type: `audio/${type}` }
                              }
                              return { src, type: `video/${type}` }
                            })
                          }
                          t={t}
                        />
                      </S.VideoCard>
                    );

                    return (
                      <S.ImageCard key={item.src.join(":")} className={item.orientation} onClick={() => setExpand(true)}>
                        {item.src.map((img) => <source key={`header-${img}`} srcSet={img} type={`image/${img.split(".")[1]}`} />)}
                        <Image src={item.src[0] as string} alt={`${post.title} imagem ${item.src}`} fill />
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
              <Paragraph renderHTML>
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
