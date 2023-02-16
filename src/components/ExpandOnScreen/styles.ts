import styled from "styled-components";

export const ExpandOnScreenWrapper = styled.div`
  position: unset;
  display: flex;
  align-items: center;
  width: fit-content;
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
  ${ExpandOnScreenWrapper}.expand & {
    position: absolute;
  }
`
