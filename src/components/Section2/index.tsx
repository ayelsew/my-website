import * as S from "./styles";
import { Background2 } from "@/components/images/backgrounds/vectors";
import { CrossPlatform, Syncronism } from "@/components/images/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";

const Section2 = () => {
  return (
    <S.Section2Wrapper>
      <S.Background>
        <Background2 />
      </S.Background>
      <S.Content>
        <S.Snippet>
          <TitleH2>
            Soluções multiplataforma
          </TitleH2>
          <Paragraph>
            Elaboração de programas que podem ser executados nos três principais sistemas operacionais, sem a necessidade de reescrever o código para cada plataforma, usando o ecosistema de frameworks como Electron e Tauri.
          </Paragraph>
        </S.Snippet>
        <S.ImageContainer>
          <CrossPlatform />
        </S.ImageContainer>
        <S.ImageContainer>
          <Syncronism />
        </S.ImageContainer>
        <S.Snippet>
          <TitleH2>
            Centralização e sincronismo
          </TitleH2>
          <Paragraph>
            Desenvolvimento de APIs sobre HTTP, permitindo fácil integração com outros sistemas, usando Nginx, MySQL MongoBD e outros. Combinado com fatores para aumentar a segurança do armazenamento e tráfego dos dados como Firewall, SSL, Bcrypt e JWT.
          </Paragraph>
        </S.Snippet>
      </S.Content>
    </S.Section2Wrapper>
  )
}

export default Section2
