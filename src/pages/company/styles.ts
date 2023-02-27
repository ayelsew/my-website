import styled from "styled-components";
import NotFound from "../404";

export const Section1Wrapper = styled.div`
  width: inherit;
  height: inherit;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
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
  padding: 4.4rem 4rem;
  grid-template-rows: auto 1fr 1fr;
  grid-template-columns: 100%;
  align-content: space-between;
  grid-row-gap: 1rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
    min-height: 100vh;
    padding: 0rem 0rem;
    grid-template-columns: 100vw;
    grid-template-rows: auto auto 1fr;
    grid-row-gap: 2rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    height: fit-content;
    min-height: 100vh;
    padding: 0rem 0rem;
    grid-template-columns: calc(100vw - 15rem);;
    grid-template-rows: auto auto 1fr;
    grid-row-gap: 2rem;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 4.4rem 14rem;
    grid-template-columns: 100%;
  }
`

export const Snippet = styled.article`

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    padding: 0 .5rem;
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 0 2rem;
  }
`

export const CarouselArea = styled.div`
  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    & h2 {
      padding: 0 .5rem;
    }
  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) {
    & h2 {
      padding: 0 2rem;
    }
  }
`

export default NotFound;
