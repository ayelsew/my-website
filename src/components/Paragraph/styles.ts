import { CSSProperties } from "react"
import styled from "styled-components"

interface ParagraphWrapperProps {
  readonly $textAlign?: CSSProperties["textAlign"]
}

export const ParagraphWrapper = styled.p<ParagraphWrapperProps>`
  font-weight: 400;
  font-size: 1.1em;
  line-height: 1.3rem;
  color: ${({ theme }) => theme.color.text};
  text-align: ${({ $textAlign }) => $textAlign ?? "left" };

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    font-size: 1em;
    line-height: 1.2rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    font-size: 1.3em;
    line-height: 1.5rem;
  }
`
