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

interface CompanyProps {
  post: Awaited<ReturnType<typeof getDictionary>>["companies"][0]
}

const Company: FCT<CompanyProps> = ({ t, post }) => {
  return (
    <>
      <Head>
        <title>{post.name}</title>
        <meta name="description" content={post.about_experience} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
              Projetos
            </TitleH2>
            <Carousel>
              <>
                {t.projects.map((project, index) => (
                  <Card
                    key={project.title}
                    title={project.title}
                    description={project.short_description}
                    background={project.cover}
                    buttons={<>
                      <Button text={project.href_text} icon={<Eye size='20' />} href={`/project/${index}`} />
                    </>}
                    profilePicture={<Image src={project.icon} alt="" fill />}
                  />
                ))}
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

  return {
    props: {
      t,
      post: t.companies.find(({ slug }) => slug === params?.slug )
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
