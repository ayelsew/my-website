import styled from "styled-components";

export const LayoutDefualt = styled.div`
  display: flex;
`;

export const MainWrapper = styled.main`
  width: 75vw;
  display: grid;
  grid-auto-flow: column;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  background-color: ${({ theme }) => theme.bgPages};
`;

