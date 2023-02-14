import { FC, ReactElement } from "react";

import * as S from "./styles"

interface CardProps {
  background?: string;
  title: string;
  description?: string
  buttons: ReactElement | ReactElement[]
  profilePicture?: ReactElement
}

const Card: FC<CardProps> = ({
  background,
  title,
  description,
  buttons = [],
  profilePicture
}) => {

  return (
    <S.CardWrapper $background={background}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        {
          profilePicture ?
            <S.ProfilePicture>{profilePicture}</S.ProfilePicture> :
            <span/>
        }
        <S.ButtonsArea>
          {buttons}
        </S.ButtonsArea>
      </S.Content>
    </S.CardWrapper>
  )
}

export default Card;
