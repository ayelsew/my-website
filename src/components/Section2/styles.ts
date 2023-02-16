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
    padding: 8rem 14rem;
  }
`

export const Snippet = styled.article``

export const ImageContainer = styled.div`
  svg {
    height: 200px;
  }
  svg#crossplatform-svg {
    height: 240px;
  }
`