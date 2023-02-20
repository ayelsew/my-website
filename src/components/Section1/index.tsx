import * as S from "./styles";
import { Background1, TimelineDesktop, Selo, TimelineMobile } from "@/components/images/backgrounds/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";
import Image from "next/image";
import { FCT } from "react";

const Section1: FCT = ({ t }) => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        <Background1 />
      </S.Background>
      <S.Content>
        <S.ProfilePicture>
          <Image
            src="https://avatars.githubusercontent.com/u/33585141"
            alt="Wesley"
            fill
          />
        </S.ProfilePicture>
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
