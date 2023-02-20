import { ReactElement } from "react";
import NavbarDesktop from "../NavbarDesktop";

import * as S from "./styles"

interface LayoutProps {
  children: ReactElement
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.LayoutDefualt>
      <NavbarDesktop />
      <S.MainWrapper id="root-layout-content">
        {children}
      </S.MainWrapper>
    </S.LayoutDefualt>
  );
}