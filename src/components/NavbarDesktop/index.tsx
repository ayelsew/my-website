import { useRouter } from "next/router";
import Image from 'next/image'
import { FCT } from "react";

import * as S from "./styles";
import { Discord, Email, Leydev, Linkedin, Youtube } from "@/components/images/icons/vectors";

interface NavbarDesktopProps {

}

const NavbarDesktop: FCT<NavbarDesktopProps> = ({ t }) => {
  const router = useRouter()
  /* const [currentPath, setPath] = useState("/#who-am-I");

  useEffect(() => {
    setPath(router.asPath);
  }, [router.asPath]); */

  return (
    <S.NavbarDesktopWrapper>
      <S.Content>
        <S.ContentPictureLogo>
          <S.ProfilePicture>
            <Image
              src={t?.menu.profilePicture}
              alt="Wesley"
              fill
            />
          </S.ProfilePicture>
          <Leydev size="18" />
        </S.ContentPictureLogo>
        <S.Navgation>
          <>
            {t?.menu.nav.map((item) => (
              <S.NavItem
                key={`${item.href}${item.label}`}
                $active={true}
                href={item.href}

              >
                {item.label}
              </S.NavItem>
            ))}
          </>
        </S.Navgation>
        <S.ContactArea>
          <S.Contact href="https://www.linkedin.com/in/wesley-a/" target="_blank" title="Perfil no Linkedin">
            <Linkedin color="#7D7D7D" size="19" />
            /wesley-a
          </S.Contact>
          <S.Contact href="https://www.youtube.com/@leydevsh" target="_blank" title="Canal no Youtube">
            <Youtube color="#7D7D7D" size="19" />
            /@leydevsh
          </S.Contact>
          <S.Contact href="https://discordapp.com/users/266586838410461184" target="_blank" title="Perfil no Discord">
            <Discord color="#7D7D7D" size="19" />
            leydev#8372
          </S.Contact>
          <S.Contact href="mailto://contato@leydev.com.br" target="_blank" title="Endereço de email">
            <Email color="#7D7D7D" size="19" />
            contato@leydev.com.br
          </S.Contact>
        </S.ContactArea>
      </S.Content>
    </S.NavbarDesktopWrapper>
  );
}

export default NavbarDesktop
