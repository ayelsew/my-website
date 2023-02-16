import styled from "styled-components";

export const LayoutDefualt = styled.div`
  display: grid;
  grid-template-columns: 22rem calc(100vw - 22rem);
`;

export const MainWrapper = styled.main`
  width: calc(100vw - 22rem);
  display: grid;
  grid-auto-flow: column;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  background-color: ${({ theme }) => theme.bgPages};
`;

