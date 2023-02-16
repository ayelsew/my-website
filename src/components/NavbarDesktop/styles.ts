import Link from "next/link";
import styled from "styled-components";

export const NavbarDesktopWrapper = styled.div`
    width: 22rem;
    height: 100vh;
    background-color: ${({ theme }) => theme.bgMenu};
`;

export const Content = styled.div`
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Navgation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface NavItemProps {
  readonly $active: boolean
}

export const NavItem = styled(Link) <NavItemProps>`
  color: ${({ $active, theme: { color } }) => $active ? color.title : color.text};
  font-size: 1.2em;
  padding: .1rem 0 .2rem 1.5rem;
  border-bottom: 1px solid;
  border-color: ${({ $active, theme: { color } }) => $active ? color.highlight : color.text};
  margin-bottom: 1rem;
`;

export const ProfilePicture = styled.div`
  --size-picture: 12rem;
  width: var(--size-picture);
  height: var(--size-picture);
  position: relative;
  border: 0.4rem solid #FFFFFF;
  border-radius: var(--size-picture);
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a:nth-child(2) {
    padding: 0.3rem 0;
  }
`;

export const Contact = styled.a`
  display: flex;
  font-weight: 500;
  font-size: .8em;
  color: ${({ theme }) => theme.color.text };
  align-items: center;
  
  svg {
    margin-right: 13px;
  }
`;

