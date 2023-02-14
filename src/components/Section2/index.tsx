import * as S from "./styles";
import { Background2 } from "@/components/images/backgrounds/vectors";
import { CrossPlatform, Syncronism } from "@/components/images/vectors";

const Section2 = () => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        <Background2 />
      </S.Background>
      <S.Content>
        <S.Snippet>
          <S.SnippetTitle>
            Soluções multiplataforma
          </S.SnippetTitle>
          <S.SnippetParagraph>
            Elaboração de programas que podem ser executados nos três principais sistemas operacionais, sem a necessidade de reescrever o código para cada plataforma, usando o ecosistema de frameworks como Electron e Tauri.
          </S.SnippetParagraph>
        </S.Snippet>
        <S.ImageContainer>
          <CrossPlatform />
        </S.ImageContainer>
        <S.ImageContainer>
          <Syncronism />
        </S.ImageContainer>
        <S.Snippet>
          <S.SnippetTitle>
            Centralização e sincronismo
          </S.SnippetTitle>
          <S.SnippetParagraph>
            Desenvolvimento de APIs sobre HTTP, permitindo fácil integração com outros sistemas, usando Nginx, MySQL MongoBD e outros. Combinado com fatores para aumentar a segurança do armazenamento e tráfego dos dados como Firewall, SSL, Bcrypt e JWT.
          </S.SnippetParagraph>
        </S.Snippet>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section2
