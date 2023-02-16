import styled from "styled-components"

export const ParagraphWrapper = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text};
`
