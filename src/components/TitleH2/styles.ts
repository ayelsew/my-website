import { CSSProperties } from "react"
import styled from "styled-components"

interface TitleH2WrapperProps {
  readonly $fontWeight?: CSSProperties["fontWeight"]
}

export const TitleH2Wrapper = styled.h2<TitleH2WrapperProps>`
  font-size: 1.5em;
  line-height: 41px;
  color: ${({ theme }) => theme.color.title};
  margin-bottom: 20px;
  font-weight:  ${({ $fontWeight }) => $fontWeight ?? 700};

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    font-size: 1.2em;
    line-height: 1.2rem;
  }
`
