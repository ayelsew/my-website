import { FCT, ReactElement } from "react";
import NavbarDesktop from "../NavbarDesktop";

import * as S from "./styles"

interface LayoutProps {
  children: ReactElement
}

 const Layout: FCT<LayoutProps> = ({ children, t }) => {

  return (
    <S.LayoutDefualt>
      <NavbarDesktop t={t} />
      <S.MainWrapper id="root-layout-content">
        {children}
      </S.MainWrapper>
    </S.LayoutDefualt>
  );
}

export default Layout
