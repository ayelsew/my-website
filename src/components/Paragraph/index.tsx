import { CSSProperties, FC, ReactElement } from "react";

import * as S from "./styles";

interface ParagraphProps {
  children: ReactElement | string
  textAlign?: CSSProperties["textAlign"]
}

const Paragraph: FC<ParagraphProps> = ({ children, textAlign }) => {
  return (
    <S.ParagraphWrapper $textAlign={textAlign}>
      {children}
    </S.ParagraphWrapper>
  )
}

export default Paragraph
