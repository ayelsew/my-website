import { CSSProperties, FC, ReactElement } from "react";

import * as S from "./styles";

interface TitleH2Props {
  children: ReactElement | string
  fontWeight?: CSSProperties["fontWeight"]
}

const TitleH2: FC<TitleH2Props> = ({ children, fontWeight }) => {
  return (
    <S.TitleH2Wrapper $fontWeight={fontWeight}>
      {children}
    </S.TitleH2Wrapper>
  )
}

export default TitleH2
