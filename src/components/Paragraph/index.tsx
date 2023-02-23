import { CSSProperties, FC, ReactElement, useEffect } from "react";

import * as S from "./styles";

interface ParagraphProps {
  children: ReactElement | string
  textAlign?: CSSProperties["textAlign"],
  renderHTML?: boolean
}

const Paragraph: FC<ParagraphProps> = ({ children, textAlign, renderHTML }) => {
  return (
    <>
      {renderHTML ?
        <S.ParagraphWrapper $textAlign={textAlign} dangerouslySetInnerHTML={{ __html: children as string }} /> :
        <S.ParagraphWrapper $textAlign={textAlign} >
          {children}
        </S.ParagraphWrapper>

      }
    </>
  )
}

export default Paragraph
