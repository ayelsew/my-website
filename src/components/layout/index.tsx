import { FCT, ReactElement } from "react";
import Footer from "../Footer";
import NavbarDesktop from "../NavbarDesktop";
import NavbarMobile from "../NavbarMobile";

import * as S from "./styles"

interface LayoutProps {
  children: ReactElement
}

 const Layout: FCT<LayoutProps> = ({ children, t }) => {

  return (
    <S.LayoutDefualt>
      <NavbarDesktop t={t} />
      <NavbarMobile />
      <S.MainWrapper id="root-layout-content">
        {children}
        <Footer />
      </S.MainWrapper>
    </S.LayoutDefualt>
  );
}

export default Layout
