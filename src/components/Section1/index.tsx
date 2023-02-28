import * as S from "./styles";
import { Background1, TimelineDesktop, Selo, TimelineMobile } from "@/components/images/backgrounds/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";
import Image from "next/image";
import { FCT } from "react";
import { Github, Leydev } from "../images/icons/vectors";
import ButtonLink from "../ButtonLink";

const Section1: FCT = ({ t }) => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        <Background1 />
      </S.Background>
      <S.Content>
        <S.ContentPictureLogo>
          <S.HeaderMobile>
            <ButtonLink
              icon={<Github size="20" color="white" />}
              href="https://github.com/ayelsew"
              color="#2D2D2D"
              circle
            />
            <Leydev size="18" />
            <ButtonLink
              icon={<Github size="20" color="#202123" />}
              href="#"
              color="#202123"
              circle
            />
          </S.HeaderMobile>
          <S.ProfilePicture>
            <Image
              src={t?.menu.profilePicture}
              alt="Wesley"
              fill
            />
          </S.ProfilePicture>
        </S.ContentPictureLogo>
        <S.Title>
          <span>&gt;</span>{t.who_am_I.my_name_is} Wesley Araujo. <span>_</span>
        </S.Title>
        <Paragraph textAlign="center">
          {t.who_am_I.about}
        </Paragraph>
        <S.Timeline>
          <TitleH2 fontWeight={400}>
            {t.who_am_I.my_experience}
          </TitleH2>
          <TimelineDesktop />
          <TimelineMobile />
        </S.Timeline>
        <S.Selo>
          <Selo />
        </S.Selo>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section1
