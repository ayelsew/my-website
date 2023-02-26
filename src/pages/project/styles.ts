import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  height: inherit;
  overflow-y: scroll;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
    padding-bottom: 4.5rem;
  }


  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    height: fit-content;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 1rem 4rem 4.4rem 4rem;
  grid-template-columns: 20rem calc(100% - 20rem);
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
  @media (min-width: 768px) and (max-width: 992px) { 
    height: fit-content;
    grid-template-columns: 100%;
    padding: 1rem 0 0 0;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 3rem 10rem 4.4rem 10rem;
  }
`

export const Snippet = styled.article`
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
      padding: 0 2rem;
  }
`


export const ColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    width: 100vw;

    & h2, & p {
      padding: 0 1.2rem;
    }
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    width: 100%;
  }
`

export const ColumnOne = styled.div`
  width: 100%;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    width: 100vw;

    & h2 {
      padding: 0 1.2rem;
    }
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    width: 100%;
    & h2 {
      padding: 0 2rem;
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
    grid-column-gap: 0.5rem;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
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

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
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

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    display: inline-block;
  }
`

export const VideoCard = styled.div`
  position: relative;
  height: 18rem;
  border-radius: 10px;
  overflow: hidden;

  &.horizontally {
    width: 28rem;
  }

  &.vertically {
    width: 10rem;
  }

  .expand & {
    height: 70vh;
  }

  .expand &.horizontally  {
    width: 55vw;
  }

  .expand &.vertically {
    width: 18vw;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: 12rem;
    width: 90vw;

    &.horizontally {
      width: 85vw;
    }

    .expand &  {
      width: 90vw;

    .expand &.horizontally {
      width: 28rem;
    }

    .expand &.vertically {
        width: 10rem;
      }
    }
  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    height: 18rem;

    &.horizontally  {
      width: 27rem;
    }

    .expand &  {
      height: 70vh;
    }

    .expand &.horizontally  {
      width: 60vw;
    }


    .expand &.vertically {
      width: 30vw;
    }
  }
`;

interface ImageCardProps {
  readonly $display?: "vertically" | "horizontally" | string
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

  & img {
    object-fit: cover;
  }


  &.horizontally {
    width: 28rem;
  }

  &.vertically {
    width: 10rem;
  }

  .expand & {
    height: 70vh;
  }

  .expand &.horizontally  {
    width: 55vw;
  }

  .expand &.vertically {
    width: 18vw;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: 12rem;

    &.horizontally {
      width: 85vw;
    }

    &.vertically {
      width: 10rem;
    }

    .expand &.horizontally  {
      height: 40vh;
      width: 100vw;
    }


    .expand &.vertically {
      height: 60vh;
      width: 100vw;
    }
  }


  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    height: 18rem;

    &.horizontally {
      width: 27rem;
    }

    &.vertically {
      width: 10rem;
    }

    .expand &  {
      height: 70vh;
    }

    .expand &.horizontally  {
      width: 60vw;
    }


    .expand &.vertically {
      width: 22vw;
    }
  }
`;
