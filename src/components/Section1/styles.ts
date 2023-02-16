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
  padding: 4.4rem 8rem;
  grid-template-columns: auto;
  align-content: center;
  justify-items: center;

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
    padding: 4.4rem 14rem;
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
`;


export const Timeline = styled.div`

  & h2 {
    margin: 2rem 0 0 0;
  }
  
  & svg {
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
`;

export const Selo = styled.span`
  position: absolute;
  right: 40px;
  bottom: 20px;
  text-align: right;

  svg {
    width: 180px;
  }
`;
