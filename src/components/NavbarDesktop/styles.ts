import Link from "next/link";
import styled from "styled-components";

export const NavbarDesktopWrapper = styled.div`
    width: 25vw;
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
  font-size: 1.4em;
  line-height: 33.98px;
  padding: 11px 0 11px 30px;
  border-bottom: 1px solid;
  border-color: ${({ $active, theme: { color } }) => $active ? color.highlight : color.text};
`;

export const ProfilePicture = styled.div`
  width: 170px;
  height: 170px;
  position: relative;
  border: 9px solid #FFFFFF;
  border-radius: 127px;
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a:nth-child(2) {
    padding: 5px 0;
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

