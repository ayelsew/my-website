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
  grid-template-columns: auto;
  align-content: center;
  justify-items: center;
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
  display: grid;
  grid-template-columns: auto;
  align-content: center;
  justify-items: end;

  span{
    width: 100%;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 28px;
    text-align: center;
    color: ${({ theme }) => theme.color.text};
    margin: 50px 0 20px;
  }
  svg {
    width: 85%;

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

  svg {
    width: 180px;
  }
`;
