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
`;

export const Navgation = styled.nav`
  display: flex;
  flex-direction: column;
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
  margin: auto;
  border: 9px solid #FFFFFF;
  border-radius: 127px;
`;
