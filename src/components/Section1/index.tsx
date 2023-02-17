import * as S from "./styles";
import { Background1, TimelineDesktop, Selo } from "@/components/images/backgrounds/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";
import Image from "next/image";

const Section1 = () => {
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
          <span>&gt;</span> Olá, sou Wesley Araujo. <span>_</span>
        </S.Title>
        <Paragraph textAlign="center">
          Sou programador com 4 anos de experiência em desenvolvimento de softwares voltados para web, implementei também soluções com foco IoT. Já tive experiências com clientes direto ou por meio de agências para, Netflix, Caixa econômica federal, Ford, Unilever, Natura, África, Honda, Primepass e atualmente Cuponeria. E também já atuei como freelancer
        </Paragraph>
        <S.Timeline>
          <TitleH2 fontWeight={400}>
            Veja minhas experiências
          </TitleH2>
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
