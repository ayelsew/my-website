import styled from "styled-components";

export const Section1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 80px 40px;
  grid-template-rows: auto 1fr 1fr;
  align-content: space-between;
  grid-row-gap: 1rem;
`

export const Snippet = styled.article`

`

export const SnippetTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5em;
  line-height: 41px;
  color: ${({ theme }) => theme.color.title};
  margin-bottom: 20px;
`

export const SnippetParagraph = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text};
`

export const CarouselArea = styled.div`

`
