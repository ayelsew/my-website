import { useRouter } from "next/router";
import Image from 'next/image'
import { FCT } from "react";

import * as S from "./styles";
import { Discord, Email, Linkedin } from "@/components/images/icons/vectors";

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
        <S.ProfilePicture>
          <Image
            src="https://avatars.githubusercontent.com/u/33585141"
            alt="Wesley"
            fill
          />
        </S.ProfilePicture>
        <S.Navgation>
          <>
            {t.menu.nav.map((item) => (
              <S.NavItem
              key={`${item.href}${item.label}`}
                $active={false}
                href={item.href}

              >
                {item.label}
              </S.NavItem>
            ))}
          </>
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
