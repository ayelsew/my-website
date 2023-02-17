import styled from "styled-components";

interface SectionProps {
  readonly $bgColor?: string
}

export const Section = styled.section<SectionProps>`
  width: inherit;
  height: inherit;
  scroll-snap-align: end;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.bgPages};

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
  }
`
