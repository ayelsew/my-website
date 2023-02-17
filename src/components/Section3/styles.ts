import styled from "styled-components";

export const Section1Wrapper = styled.div`
  width: 100%;
  height: inherit;
  position: relative;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
    position: unset;
  }
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

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    position: unset;
    display: none;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 4.4rem 4rem;
  grid-template-columns: repeat(12, auto);
  grid-template-rows: auto auto;
  align-content: center;
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 1rem;
  align-content: space-between;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    padding: 4.4rem 0rem;
    height: fit-content;
    position: unset;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-column-gap: 0;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 8rem 14rem;
  }
`

export const CarouselArea = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 14;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    & h2 {
      padding: 0 1.2rem;
    }
  }  
`

export const Snippet = styled.article`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 10;

  &.open-source {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 14;

    &.open-source {
      width: 100%;
      padding: 0 1.2rem;
    }

    &.open-source a {
      display: none;
    }
  }
`

export const FavCard = styled.div`
  grid-row-start: 2;
  grid-column-start: 11;

  & > a {
    display: none;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    grid-row-start: 3;
    grid-column-start: 1;
    padding: 0 1.2rem;
    width: 100vw;

    & > article {
      width: 100%;
    }

    & > a {
      margin-top: 1.5rem;
      display: flex;
    }
  }
`
