import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;

  .PrevCarouselButton {
    position: absolute;
    left: 0;
    align-self: center;
    transform: translateX(-100px);
    transition-duration: .3s;
    border-radius: 100px;
  }

  .NextCarouselButton {
    position: absolute;
    right: 0;
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
  display: flex; 
  flex-wrap: nowrap;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;
  gap: 2rem;

  & > * {
    scroll-snap-align: center;
    flex: 0 0 auto; 
  }

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) { 
    overflow-x: scroll;
    padding: 0 1.2rem;
  }

  /* md applies to small devices (landscape phones, less than 768px) */
  @media (min-width: 768px) {  }
  
  /* lg applies to medium devices (tablets, less than 992px) */
  @media (min-width: 768px) and (max-width: 992px) { 
    overflow-x: scroll;
    padding: 0 2rem;
  }
  
  /* xl applies to large devices (desktops, less than 1200px) */
  @media (min-width: 1200px) {  }
  
  /* xxl applies to x-large devices (large desktops, less than 1400px) */
  @media (min-width: 1400px) { 

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
