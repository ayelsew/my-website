import styled from "styled-components";

export const Section1Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 80px 40px;
  grid-template-columns: repeat(12, auto);
  grid-template-rows: auto auto;
  align-content: center;
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 0px;
  align-content: space-between;
`

export const CarouselArea = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 14;
`

export const Snippet = styled.article`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 10;

  &.open-source {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
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

export const FavCard = styled.div`
 grid-row-start: 2;
 grid-column-start: 12;
 /* padding-right: 35px; */
`
