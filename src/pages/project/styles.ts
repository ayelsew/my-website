import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1rem 40px;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;
`

export const Snippet = styled.article``

export const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 1.5em;
  color: ${({ theme }) => theme.color.title};
  margin-bottom: 20px;
`

export const SnippetParagraph = styled.p`
  font-weight: 400;
  font-size: 1em;
  line-height: 20px;
  color: ${({ theme }) => theme.color.text};
`

export const ColumnTwo = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: 2rem;
`

export const ColumnOne = styled.div`
  width: 20rem;
`

export const ListTechnologies = styled.ul`
  list-style: none;
`

export const Technology = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
`

export const TechnologyIcon = styled.img``

export const TechnologyDescription = styled.p`
  font-weight: 400;
  font-size: 1em;
  color: ${({ theme }) => theme.color.text};
`
