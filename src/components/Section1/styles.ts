import styled from "styled-components";

export const Section1Wrapper = styled.div`
  width: inherit;
  height: 100%;
  position: relative;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    position: unset;
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
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  display: grid;
  padding: 4.4rem 8rem;
  grid-template-columns: auto;
  align-content: center;
  justify-items: center;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    height: fit-content;
    padding: 4.4rem 2rem 0 2rem;
    position: unset;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (max-width: 768px) { 

  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    height: fit-content;
    padding: 2rem 2rem 0 2rem;
    position: unset;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) { 

  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    padding: 4.4rem 18rem;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 3em;
  line-height: 82px;
  text-align: center;
  color: ${({ theme }) => theme.color.title};

  span:first-child {
    color: ${({ theme }) => theme.color.highlight}
  }
  span:last-child {
    color: ${({ theme }) => theme.color.highlight}
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    font-size: 1.6em;
    line-height: 3rem;
    span:first-child {
      display: none;
    }
    span:last-child {
      display: none;
    }
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (max-width: 992px) { 
    font-size: 1.7em;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    font-size: 3.6em;
  }
`;


export const Timeline = styled.div`

  & h2 {
    margin: 2rem 0 0 0;
  }
  
  svg#timeline-mobile {
    display: none;
  }

  & svg {
    display: inline-block;
    width: 100%;

    g.button-companies  {
      fill: transparent;
      cursor: pointer;
    }

    g.button-companies:hover > rect {
      stroke: ${({ theme }) => theme.color.highlight};
    }
    g.button-companies:hover > path {
      fill: ${({ theme }) => theme.color.highlight};
    }

    g.button-companies:focus > rect {
      stroke: ${({ theme }) => theme.color.highlight};
    }
    g.button-companies:focus > path {
      fill: ${({ theme }) => theme.color.highlight};
    }
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {
    height: fit-content;
    text-align: center;
    width: 100%;

    & h2 {
      text-align: left;
      margin: 3rem 0 1.4rem 0;
    }

    & svg#timeline-desktop {
      display: none;
    }
    & svg#timeline-mobile {
      height: 21rem;
      display: inline-block;
    }
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    & h2 {
      margin: 6rem 0 0 0;
    }
  }
`;

export const Selo = styled.span`
  position: absolute;
  right: 40px;
  bottom: 20px;
  text-align: right;

  svg {
    width: 180px;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    display: none;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }

  /* lg applies to medium devices (tablets, less than 992px) */
  @media (max-width: 992px) { 
    display: none;
  }

  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }

  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    & h2 {
      margin: 6rem 0 0 0;
    }
  }
`;

export const ProfilePicture = styled.div`
  --size-picture: 12rem;
  width: var(--size-picture);
  height: var(--size-picture);
  position: relative;
  border: 0.4rem solid #FFFFFF;
  border-radius: var(--size-picture);
  overflow: hidden;
  display: none;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    display: inline-block;
    margin-bottom: 2rem;
  }
`;
