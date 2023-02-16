import { CSSProperties } from "react"
import styled from "styled-components"

interface ParagraphWrapperProps {
  readonly $textAlign?: CSSProperties["textAlign"]
}

export const ParagraphWrapper = styled.p<ParagraphWrapperProps>`
  font-weight: 400;
  font-size: 1.1em;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text};
  text-align: ${({ $textAlign }) => $textAlign ?? "left" };
`
