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
import Image from 'next/image'
import * as utils from '@/utils';

interface CompanyProps {
  post: Awaited<ReturnType<typeof getDictionary>>["companies"][0]
  projects: Awaited<ReturnType<typeof getDictionary>>["projects"]
}

const Company: FCT<CompanyProps> = ({ t, post, projects }) => {

  return (
    <>
      <Head>
        <title>{post.name} - Leydev</title>
        <meta name="description" content={post.about_experience} />
        <meta property="og:url" content={utils.resolveURL({ path: `/company/${post.slug}` })} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.name} - Leydev`} />
        <meta property="og:description" content={post.about_experience} />
        <meta property="og:image" content={utils.resolveURL({ path: projects[0]?.cover[1] })} />
        <meta property="og:image:width" content="711" />
        <meta property="og:image:height" content="432" />
      </Head>
      <S.Section1Wrapper>
        <S.Content>
          <HeaderCompany
            icon={post.icon}
            title={post.name}
            role={post.role}
            period={post.period}
            t={t}
          />

          <S.Snippet>
            <TitleH2>
              Sobre a experiência
            </TitleH2>
            <Paragraph>
              {post.about_experience}
            </Paragraph>
          </S.Snippet>

          <S.CarouselArea>
            <TitleH2>
              Projetos nesta empresa
            </TitleH2>
            <Carousel>
              <>
                {projects.length ?
                  projects.map((project, index) => (
                    <Card
                      key={project.title}
                      title={project.title}
                      description={project.short_description}
                      background={project.cover}
                      buttons={<>
                        <Button title={`Ver detalhes sobre o projeto ${project.title}`} text={project.href_text} icon={<Eye size='20' />} href={`/project/${project.slug}`} />
                      </>}
                      profilePicture={<Image src={project.icon} alt="" fill />}
                    />
                  )) :
                  <S.projectsNotFound>Não há projeto para exibir :(</S.projectsNotFound>
                }
              </>
            </Carousel>
          </S.CarouselArea>
        </S.Content>
      </S.Section1Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const t = await getDictionary();
  const post = t.companies.find(({ slug }) => slug === params?.slug)

  if (!post) return {
    notFound: true,
  }

  return {
    props: {
      t,
      post,
      projects: t.projects.filter(({ company }) => company === post.slug)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const t = await getDictionary();

  return {
    paths: [
      ...t.companies.map(({ slug }) => `/company/${slug}`)
    ],
    fallback: "blocking"
  }
}

export default Company;
