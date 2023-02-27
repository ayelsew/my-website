import { Discord, Email, Leydev, Linkedin, Youtube } from "../images/icons/vectors";
import * as S from "./styles"

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.Content>
        <S.ContactArea>
          <S.Contact href="https://www.linkedin.com/in/wesley-a/" target="_blank" title="Perfil no Linkedin">
            <Linkedin color="#7D7D7D" size="18" />
            /wesley-a
          </S.Contact>
          <S.Contact href="https://www.youtube.com/@leydevsh" target="_blank" title="Canal no Youtube">
            <Youtube color="#7D7D7D" size="18" />
            /@leydevsh
          </S.Contact>
          <S.Contact href="https://discordapp.com/users/266586838410461184" target="_blank" title="Perfil no Discord">
            <Discord color="#7D7D7D" size="18" />
            leydev#8372
          </S.Contact>
          <S.Contact href="mailto://contato@leydev.com.br" target="_blank" title="Endereço de email">
            <Email color="#7D7D7D" size="18" />
            contato@leydev.com.br
          </S.Contact>
        </S.ContactArea>
        <S.FooterLogo>
          <Leydev size="18" />
        </S.FooterLogo>
      </S.Content>
      <S.brand>leydev 2023</S.brand>
    </S.FooterWrapper>
  )
}

export default Footer;
