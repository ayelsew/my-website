import Image from "next/image";
import { FC, ReactElement } from "react";

import * as S from "./styles"

interface CardProps {
  background: string[];
  title: string;
  description?: string
  buttons: ReactElement | ReactElement[]
  profilePicture?: ReactElement
}

const Card: FC<CardProps> = ({
  background,
  title,
  description,
  buttons,
  profilePicture
}) => {

  return (
    <S.CardWrapper>
      <S.Wrapper>
        <S.background>
          {background.map((img) => <source key={`header-${img}`} srcSet={img} type={`image/${img.split(".")[1]}`} />)}
          <Image src={background[0]} fill alt={`Imagem de capa do projeto ${title}`} />
        </S.background>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          {
            profilePicture ?
              <S.ProfilePicture>{profilePicture}</S.ProfilePicture> :
              <span />
          }
          <S.ButtonsArea>
            {buttons}
          </S.ButtonsArea>
        </S.Content>
      </S.Wrapper>
    </S.CardWrapper>
  )
}

export default Card;
