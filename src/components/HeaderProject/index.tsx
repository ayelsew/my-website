import { FC } from "react"

import * as S from "./styles"

interface HeaderProjectProps {

}

const HeaderProject: FC<HeaderProjectProps> = () => {

  return (
    <S.HeaderProjectWrapper>
      <S.Background $bgSrc="/images/asher_acaiteria.png" />
      <S.Filter />
      <S.Content>
        <S.ProfilePictureContent>
          <S.ProfilePicture src="/images/vectors/asher_acaiteria.svg" />
        </S.ProfilePictureContent>
        <S.HeaderContent>
          <S.Title>Software Point of Sale</S.Title>
          <S.Company>Leydev</S.Company>
        </S.HeaderContent>
      </S.Content>
    </S.HeaderProjectWrapper>
  )
}

export default HeaderProject
