import * as S from "./styles";
import { Background2 } from "@/components/images/backgrounds/vectors";
import { CrossPlatform, Syncronism } from "@/components/images/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";
import { FCT } from "react";

const Section2: FCT = ({ t }) => {
  return (
    <S.Section2Wrapper>
      <S.Background>
        <Background2 />
      </S.Background>
      <S.Content>
        <div>
          <S.Snippet>
            <TitleH2>
              {t.skills.crossplatform.title}
            </TitleH2>
            <Paragraph>
              {t.skills.crossplatform.description}
            </Paragraph>
          </S.Snippet>
          <S.ImageContainer>
            <CrossPlatform />
          </S.ImageContainer>
        </div>
        <div>
          <S.ImageContainer id="img-syncronism">
            <Syncronism />
          </S.ImageContainer>
          <S.Snippet>
            <TitleH2>
              {t.skills.syncronism.title}
            </TitleH2>
            <Paragraph>
              {t.skills.syncronism.description}
            </Paragraph>
          </S.Snippet>
        </div>
      </S.Content>
    </S.Section2Wrapper>
  )
}

export default Section2
