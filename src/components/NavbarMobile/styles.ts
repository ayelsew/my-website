import Link from "next/link";
import styled from "styled-components"

export const NavbarMobileWrapper = styled.nav`
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 4rem;
  background: #151515;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  bottom: 0;
  display: none;

  /* sm applies to x-small devices (portrait phones, less than 576px) */
  @media (max-width: 576px) {  
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  padding: 0 .5rem;
`

export const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .8em;
  gap: 0.3rem;

  & svg {
    --svg-size: 1.44rem;
    width: var(--svg-size);
    height: var(--svg-size);
  }
`
