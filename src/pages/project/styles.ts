import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  height: inherit;
  overflow-y: scroll;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1rem 1.2rem 4.4rem 1.2rem;
  grid-template-columns: auto 1fr;
  grid-column-gap: 2rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
    min-height: 90vh;
    grid-template-columns: auto;
    grid-column-gap: 0;
    grid-template-rows: repeat(2, auto) 1fr;
    padding: 1rem 0 0 0;
  }

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

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    width: 100vw;

    & h2, & p {
      padding: 0 1.2rem;
    }
  }
`

export const ColumnOne = styled.div`
  width: 20rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    width: 100vw;

    & h2 {
      padding: 0 1.2rem;
    }
  }
`

export const ListTechnologies = styled.ul`
  list-style: none;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    overflow-x: scroll;
    padding: 0 1.2rem;
  }
`

export const Technology = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    grid-template-columns: unset;
    grid-template-rows: auto auto;
    grid-row-gap: 0.5rem;
    justify-items: center;
    width: 4rem;

    & p {
      display: none;
    }
  }
`

export const TechnologyIcon = styled.img`
  width: 2.5rem;
`

export const TechnologyShortName = styled.span`
  display: none;
  font-size: .9em;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    display: inline-block;
  }
`

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

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: 12rem;
    width: ${({ $display }) => {
      if ($display === "horizontally") return "19rem"
      if ($display === "vertically") return "10rem"
      return "auto"
    }};

    .expand & {
      height: 18rem;
      width: ${({ $display }) => {
        if ($display === "horizontally") return "100vw"
        if ($display === "vertically") return "50vw"
        return "auto"
      }};
    }
  }
`;
