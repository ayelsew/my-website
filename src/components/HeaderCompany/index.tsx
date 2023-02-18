import { FC } from "react";
import Image from 'next/image'

import * as S from "./styles"

interface HeaderCompanyProps {

}

const HeaderCompany: FC<HeaderCompanyProps> = ({ }) => {
  return (
    <S.HeaderCompanyWrapper>
      <S.ProfilePicture>
        <Image
          src="/images/vectors/cuponeria.svg"
          alt="Wesley"
          fill
        />
      </S.ProfilePicture>
      <S.HeaderContent>
        <S.Title>Innoventures Ideias em Soluções S.A (Cuponeria)</S.Title>
        <S.Role>Desenvolvedor Front End</S.Role>
        <S.Period>
          <S.PeriodStart>Fev 2022</S.PeriodStart> até <S.PeriodEnd>Fev 2023</S.PeriodEnd>
        </S.Period>
      </S.HeaderContent>
    </S.HeaderCompanyWrapper>
  )
}

export default HeaderCompany;
