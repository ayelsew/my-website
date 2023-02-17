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
  overflow-y: unset;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  grid-column-gap: 1.5rem;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 3;

  & > * {
    scroll-snap-align: center;
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    overflow-x: scroll;
    grid-column-gap: 1rem;
    padding: 0 1.2rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }
  
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 992px) {  }
  
  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }
  
  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 
    grid-column-gap: 3rem;
  }
`

export const Button = styled.button`
  --size-circle: 3rem;
  width: var(--size-circle);
  height: var(--size-circle);
  border: unset;
  background-color: #0006;
  display: flex;
  justify-content: center;
  align-items: center;
`;
