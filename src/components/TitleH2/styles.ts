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

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    font-size: 1.2em;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`
