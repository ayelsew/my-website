import { FCT } from "react"

import * as S from "./styles"

interface HeaderProjectProps {
  background: string
  clientLogo: string
  title: string
  company: string
}

const HeaderProject: FCT<HeaderProjectProps> = ({
  background,
  clientLogo,
  company,
  title
}) => {

  return (
    <S.HeaderProjectWrapper>
      <S.Background $bgSrc={background} />
      <S.Filter />
      <S.Content>
        <S.ProfilePictureContent>
          <S.ProfilePicture src={clientLogo} />
        </S.ProfilePictureContent>
        <S.HeaderContent>
          <S.Title>{title}</S.Title>
          <S.Company>{company}</S.Company>
        </S.HeaderContent>
      </S.Content>
    </S.HeaderProjectWrapper>
  )
}

export default HeaderProject
