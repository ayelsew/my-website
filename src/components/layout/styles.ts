import styled from "styled-components";

export const LayoutDefualt = styled.div`
  display: grid;
  grid-template-columns: 22rem calc(100vw - 22rem);

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {  
    grid-template-columns: 100vw;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`;

export const MainWrapper = styled.main`
  width: calc(100vw - 22rem);
  height: 100vh; 
  display: grid;
  grid-auto-flow: column;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  background-color: ${({ theme }) => theme.bgPages};

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {  
    width: 100vw;
    height: fit-content; 
    overflow-x: unset;
    overflow-y: scroll;
    grid-auto-flow: row;
    scroll-snap-type: none;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`;

