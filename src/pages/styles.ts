import styled from "styled-components";

interface SectionProps {
  readonly $bgColor?: string
}

export const Section = styled.section<SectionProps>`
  width: 75vw;
  height: 100%;
  scroll-snap-align: end;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.bgPages};
`
