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
  padding: 1rem 4rem 4.4rem 4rem;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (min-width: 576px) {  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 1rem 14rem 4.4rem 14rem;
  }
`

export const Snippet = styled.article``


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

interface ImageCardProps {
  readonly $display?: "vertically" | "horizontally"
}

export const ImageCard = styled.div<ImageCardProps>`
  position: relative;
  height: 18rem;
  width: ${({ $display }) => {
    if ($display === "horizontally") return "30rem"
    if ($display === "vertically") return "10rem"
    return "auto"
  }};
  border-radius: 10px;
  overflow: hidden;

  .expand & {
    height: 35rem;
    width: ${({ $display }) => {
      if ($display === "horizontally") return "60rem"
      if ($display === "vertically") return "10rem"
      return "auto"
    }};
  }
`;
