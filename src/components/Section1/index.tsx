import * as S from "./styles";
import { Background1, TimelineDesktop, Selo } from "@/components/images/backgrounds/vectors";
import Paragraph from "../Paragraph";

const Section1 = () => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        <Background1 />
      </S.Background>
      <S.Content>
        <S.Title>
          <span>&gt;</span> Olá, sou Wesley Araujo. <span>_</span>
        </S.Title>
        <Paragraph>
          Trabalho na área de T.I à 4 anos. Inicialmente como suporte técnico e há um bom tempo como programador. Sou o típico generalista, conhecido como full stack |
        </Paragraph>
        <span>Veja minhas experiências</span>
        <S.Timeline>
          <TimelineDesktop />
        </S.Timeline>
        <S.Selo>
          <Selo />
        </S.Selo>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section1
