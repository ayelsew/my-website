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

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    height: fit-content;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

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
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 4.4rem 2rem;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  align-content: center;
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 1rem;
  align-content: space-between;

  & div.open-source-section {
    display: flex;
    gap: 4rem
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    padding: 4.4rem 0rem;
    height: fit-content;
    position: unset;
    grid-template-rows: auto auto auto;
    grid-column-gap: 0;

    & div.open-source-section {
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) { 

  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) {
    height: fit-content;
    grid-template-rows: auto auto auto;
    padding: 2rem 0rem;

    & div.open-source-section {
      flex-direction: column;
      gap: 1rem;
    }
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 8rem 10rem;
  }
`

export const CarouselArea = styled.div`
  position: relative;
  width: 100%;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    & h2 {
      padding: 0 1.2rem;
    }
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) {
    & h2 {
      padding: 0 2rem;
    }
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`

export const Snippet = styled.article`

  &.open-source {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 

    &.open-source {
      width: 100%;
      padding: 0 1.2rem;
    }

    &.open-source a {
      display: none;
    }
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) {


    &.open-source {
      width: 100%;
      padding: 0 2rem;
    }

    &.open-source a {
      display: none;
    }
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`

export const FavCard = styled.div`
  width: 41rem;
  align-items: center;
  justify-content: center;
  display: flex;

  & > a {
    display: none;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    padding: 0 1.2rem;
    width: 100vw;
    flex-direction: column;

    & > article {
      width: 100%;
    }

    & > a {
      margin-top: 1.5rem;
      display: flex;
      width: 100% !important;
    }
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0 2rem;
    width: 100%;
    flex-direction: column;
    gap: 1rem;

    & > article {
      /* width: 25rem; */
    }

    & > a {
      display: flex;
    }
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    
  }
`
