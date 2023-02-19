import styled from "styled-components";

export const Section2Wrapper = styled.div`
  width: 100%;
  height: inherit;
  position: relative;
  background-color: ${({ theme }) => theme.bgPages };

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
    position: unset;
  }


  /* md applies to small devices (landscape phones, less than 768px) */
  @media (max-width: 768px) {

  }
  
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (max-width: 992px) { 
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
    display: none;
    position: unset;
  }


  /* md applies to small devices (landscape phones, less than 768px) */
  @media (max-width: 768px) {

  }
  
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) { 

  }
  
  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }
  
  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  padding: 4.4rem 4rem;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  align-content: center;
  justify-items: center;
  align-content: space-between;
  grid-column-gap: 3rem;
  

  & div:nth-child(1),
  & div:nth-child(2) {
    display: flex;
    gap: 2rem;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    position: unset;
    padding: 4.4rem 2rem;
    height: fit-content;
    grid-column-gap: 0;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-row-gap: 3rem;

    & div:nth-child(1),
    & div:nth-child(2) {
      align-items: center;
      flex-direction: column;
      gap: 1.4rem;
    }

    & div:nth-child(2) {
      flex-direction: column-reverse;
    }
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (max-width: 768px) {

  }
  
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    padding: 2rem 2rem;
    height: fit-content;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-column-gap: 0;
    position: unset;

    & div:nth-child(1),
    & div:nth-child(2) {
      gap: 1.5rem;
    }
  }
  
  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }
  
  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 8rem 10rem;
    align-content: space-around;
    grid-column-gap: 4rem;

    & div:nth-child(1),
    & div:nth-child(2) {
      gap: 3rem;
    }
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
  @media (max-width: 576px) { 
    svg#crossplatform-svg {
      width: 14rem;
    }
    svg#syncronism-svg  {
      width: 14rem;
    }

    &#img-syncronism{
      grid-row-start: 4;
    }
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }
  
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    svg#crossplatform-svg {
      width: 12rem;
      margin-bottom: 0;
      height: 12rem;
    }
    svg#syncronism-svg  {
      width: 11rem;
      height: 12rem;
    }
  }
  
  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }
  
  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    svg#syncronism-svg {
      height: 18rem;
      width: 25rem;
    }
    svg#crossplatform-svg {
      height: 20rem;
      width: 25rem;
    }
  }
`