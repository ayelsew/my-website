import { useRouter } from "next/router";
import Image from 'next/image'
import { FC, useEffect, useState } from "react";
import ProfileImage from "../../../public/profile.png"

import * as S from "./styles";

interface NavbarDesktopProps {

}

const NavbarDesktop: FC<NavbarDesktopProps> = (props) => {
  const router = useRouter()
  const [currentPath, setPath] = useState("/#who-am-I");

  useEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]);

  return (
    <S.NavbarDesktopWrapper>
      <S.Content>
        <S.ProfilePicture>
          <Image
            src={ProfileImage}
            alt="Wesley"
            fill
          />
        </S.ProfilePicture>
        <S.Navgation>
          <S.NavItem
            $active={currentPath === "/#who-am-I"}
            href={"/#who-am-I"}

          >
            Sobre mim
          </S.NavItem>
          <S.NavItem
            $active={currentPath === "/#skills"}
            href={"/#skills"}
          >
            Habilidades
          </S.NavItem>
          <S.NavItem
            $active={currentPath === "/#portfolio"}
            href={"/#portfolio"}
          >
            Portfólio
          </S.NavItem>
        </S.Navgation>
      </S.Content>
    </S.NavbarDesktopWrapper>
  );
}

export default NavbarDesktop
