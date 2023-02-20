import * as S from "./styles";
import { Carousel } from "../Carousel";
import Card from "../Card";
import Button from "../ButtonLink";
import { Eye, Github } from "../images/icons/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";
import { FCT } from "react";
import Image from "next/image";

const Section3: FCT = ({ t }) => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        {/* Adicionar ?? */}
      </S.Background>
      <S.Content>

        <S.CarouselArea>
          <TitleH2>
            {t.portfolio.projects.title}
          </TitleH2>
          <Carousel salveScroll="projects">
            <>
              {t.portfolio.projects.items.map((project) => (
                <Card
                  title={project.title}
                  description={project.description}
                  background={project.background}
                  buttons={<>
                    <Button text={project.href_text} icon={<Eye size='20' />} href={project.href} />
                  </>}
                  profilePicture={<Image src={project.client} alt="" fill />}
                />
              ))}
            </>
          </Carousel>
        </S.CarouselArea>

        <div className="open-source-section">
          <S.Snippet className="open-source">
            <TitleH2>
              {t.portfolio.open_souce.title}
            </TitleH2>
            <Paragraph>
              {t.portfolio.open_souce.description}
            </Paragraph>

            <Button
              text="Ver Github"
              icon={<Github size="18" color="#fff" />}
              outline
              color="#fff"
              size="medium"
              stretch="50%"
              href={t.portfolio.open_souce.href_repository}
            />
          </S.Snippet>

          <S.FavCard>
            <Card
              title={t.portfolio.open_souce.favorite_card.title}
              description={t.portfolio.open_souce.favorite_card.description}
              background={t.portfolio.open_souce.favorite_card.background}
              buttons={
                <>
                  <Button text='Repositório' icon={<Eye size='20' />} href={t.portfolio.open_souce.favorite_card.href_code} />
                  <Button text='Abrir app' icon={<Eye size='20' />} href={t.portfolio.open_souce.favorite_card.href_app} />
                </>
              }
            />
            <Button
              text="Ver Github"
              icon={<Github size="18" color="#fff" />}
              outline
              color="#fff"
              size="medium"
              stretch="70%"
              href={t.portfolio.open_souce.href_repository}
            />
          </S.FavCard>
        </div>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section3
