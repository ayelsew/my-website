import { useRouter } from "next/router";
import Image from 'next/image'
import { FC, useEffect, useState } from "react";
import ProfileImage from "../../../public/profile.png"

import * as S from "./styles";
import { Discord, Email, Linkedin } from "@/components/images/vectors";

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
        <S.ContactArea>
          <S.Contact href="https://www.linkedin.com/in/wesley-a/" target="_blank">
            <Linkedin color="#7D7D7D" size="18" />
            /wesley-a
          </S.Contact>
          <S.Contact href="https://discordapp.com/users/266586838410461184" target="_blank">
            <Discord color="#7D7D7D" size="18" />
            leydev#8372
          </S.Contact>
          <S.Contact href="mailto://contato@leydev.com.br" target="_blank">
            <Email color="#7D7D7D" size="18" />
            contato@leydev.com.br
          </S.Contact>
        </S.ContactArea>
      </S.Content>
    </S.NavbarDesktopWrapper>
  );
}

export default NavbarDesktop
