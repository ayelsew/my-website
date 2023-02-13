import * as S from "./styles";
import { Background1, TimelineDesktop } from "@/components/images/backgrounds/vectors";

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
        <S.Description>
          Trabalho na área de T.I à 4 anos. Inicialmente como suporte técnico e há um bom tempo como programador. Sou o típico generalista, conhecido como full stack |
        </S.Description>
        <S.Timeline>
          <span>Veja minhas experiências</span>
          <TimelineDesktop />
        </S.Timeline>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section1
