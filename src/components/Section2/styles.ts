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
  padding: 4.4rem 4rem;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-content: center;
  justify-items: center;
  align-content: space-between;
`

export const Snippet = styled.article``

export const SnippetTitle = styled.h2`
  font-size: 1.5em;
  line-height: 41px;
  color: ${({ theme }) => theme.color.title};
  margin-bottom: 20px;
`

export const ImageContainer = styled.div`
  svg {
    height: 200px;
  }
  svg#crossplatform-svg {
    height: 240px;
  }
`