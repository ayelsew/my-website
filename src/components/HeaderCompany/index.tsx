import { FCT } from "react";
import Image from 'next/image'

import * as S from "./styles"

interface HeaderCompanyProps {
  icon: string
  title: string
  role: string
  period: {
    start: string
    end: string
  }
}

const HeaderCompany: FCT<HeaderCompanyProps> = ({
  icon,
  period,
  role,
  title
}) => {
  return (
    <S.HeaderCompanyWrapper>
      <S.ProfilePicture>
        <Image
          src={icon}
          alt="Wesley"
          fill
        />
      </S.ProfilePicture>
      <S.HeaderContent>
        <S.Title>{title}</S.Title>
        <S.Role>{role}</S.Role>
        <S.Period>
          <S.PeriodStart>{period.start}</S.PeriodStart> até <S.PeriodEnd>{period.end}</S.PeriodEnd>
        </S.Period>
      </S.HeaderContent>
    </S.HeaderCompanyWrapper>
  )
}

export default HeaderCompany;
