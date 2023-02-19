import styled from "styled-components";

export const ExpandOnScreenWrapper = styled.div`
  position: unset;
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  transition-duration: .3s;

  &.expand {
    position: fixed;
    background-color: #000000b3;
    width: 100vw;
    height: 100vh;
    top: 0 !important;
    left: 0 !important;
  }
`

export const BackLayer = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  ${ExpandOnScreenWrapper}.expand & {
    position: absolute;
    display: block;
  }
`

export const Content = styled.div`
  width: 100%;
  
  ${ExpandOnScreenWrapper}.expand & {
    position: absolute;
  }
`

export const CloseButton = styled.button`
  --color-close: #1B1C1C;
  --size-close: 2.5rem;
  background-color: var(--color-close);
  width: var(--size-close);
  height: var(--size-close);
  border-radius: 100px;
  border-style: solid;
  border-color: var(--color-close);
  display: none;
  align-items: center;
  justify-content: center;
  transition-delay: .3s;

  ${ExpandOnScreenWrapper}.expand & {
    display: flex;
    position: absolute;
    top: 1rem;
    left: calc((100vw / 2) - (var(--size-close) / 2));
  }
`
