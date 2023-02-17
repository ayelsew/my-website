import styled from "styled-components";

export const Section2Wrapper = styled.div`
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
    display: none;
    position: unset;
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
  grid-column-gap: 3rem;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    padding: 4.4rem 2rem;
    grid-column-gap: 0;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto auto;
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
    align-content: space-around;
    grid-column-gap: 4rem;
  }
`

export const Snippet = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ImageContainer = styled.div`
  svg {
    display: inline-block;
  }
  svg#syncronism-svg {
    height: 15rem;
  }
  svg#crossplatform-svg {
    height: 16rem;
  }

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
    svg#syncronism-svg {
      height: 18rem;
      width: 22rem;
    }
    svg#crossplatform-svg {
      height: 20rem;
    }
  }
`