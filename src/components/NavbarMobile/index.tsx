import { Codetag, Lambda, Suitcase } from "../images/icons/vectors";
import * as S from "./styles"

const NavbarMobile = () => {
  return (
    <S.NavbarMobileWrapper>
      <S.Content>
        <S.NavItem href="/#who-am-I" scroll>
          <Codetag size="22" color="white" />
          Sobre mim
        </S.NavItem>
        <S.NavItem href="/#skills">
          <Lambda size="22" color="white" />
          Habilidades
        </S.NavItem>
        <S.NavItem href="/#portfolio">
          <Suitcase size="22" color="white" />
          Portfólio
        </S.NavItem>
      </S.Content>
    </S.NavbarMobileWrapper>
  );
}

export default NavbarMobile;
