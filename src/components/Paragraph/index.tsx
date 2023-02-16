import { FC, ReactElement } from "react";

import * as S from "./styles";

interface ParagraphProps {
  children: ReactElement | string
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return (
    <S.ParagraphWrapper>
      {children}
    </S.ParagraphWrapper>
  )
}

export default Paragraph
