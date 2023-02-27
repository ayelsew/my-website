import styled from "styled-components";
import NotFound from "./404";

interface SectionProps {
  readonly $bgColor?: string
}

export const Section = styled.section<SectionProps>`
  width: inherit;
  height: inherit;
  scroll-snap-align: end;
  background-color: ${({ $bgColor, theme }) => $bgColor || theme.bgPages};

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
  }


  /* md applies to small devices (landscape phones, less than 768px) */
  @media (max-width: 768px) { 

  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (max-width: 992px) { 
    height: fit-content;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) { 

  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

  }
`

export default NotFound;
