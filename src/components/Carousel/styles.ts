import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, auto);
  grid-auto-rows: auto;
  overflow: hidden;

  .PrevCarouselButton {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    align-self: center;
    transform: translateX(-100px);
    transition-duration: .3s;
    border-radius: 100px;
  }

  .NextCarouselButton {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 12;
    align-self: center;
    transform: translateX(100px);
    transition-duration: .3s;
    border-radius: 100px;
  }

  &:hover .PrevCarouselButton {
    transform: translateX(20px);
  }

  &:hover .NextCarouselButton {
    transform: translateX(-20px);
  }

  button.hide {
    display: none !important;
  }

`;

export const Content = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: hidden;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  grid-column-gap: 40px;

  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 3;
`

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border: unset;
  background-color: #0006;
  display: flex;
  justify-content: center;
  align-items: center;
`;
