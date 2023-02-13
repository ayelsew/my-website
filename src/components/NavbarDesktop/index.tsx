import { useRouter } from "next/router";
import { FC, useCallback } from "react";

import * as S from "./styles";

interface NavbarDesktopProps {

}

const NavbarDesktop: FC<NavbarDesktopProps> = (props) => {
  const router = useRouter()

  const renderNavigationItems = useCallback(() => {
    return [
      { path: "/#", label: "Sobre mim" },
      { path: "/#skills", label: "Habilidades" },
      { path: "/#portfolio", label: "Portfólio" },
    ].map(({ path, label }) => (
      <S.NavItem
        key={`${path}${label}`}
        $active={router.asPath === path}
        href={path}
      >
        {label}
      </S.NavItem>
    ))
  }, [router]);

  return (
    <S.NavbarDesktopWrapper>
      <S.Content>
        <S.Navgation>
         {renderNavigationItems()}
        </S.Navgation>
      </S.Content>
    </S.NavbarDesktopWrapper>
  );
}

export default NavbarDesktop
