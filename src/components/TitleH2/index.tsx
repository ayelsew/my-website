import { FC, ReactElement } from "react";

import * as S from "./styles";

interface TitleH2Props {
  children: ReactElement | string
}

const TitleH2: FC<TitleH2Props> = ({ children }) => {
  return (
    <S.TitleH2Wrapper>
      {children}
    </S.TitleH2Wrapper>
  )
}

export default TitleH2
