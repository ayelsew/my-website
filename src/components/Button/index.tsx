import { FC, ReactElement } from "react";

import * as S from "./styles"

interface ButtonProps {
  outline?: boolean
  text: string,
  icon?: ReactElement
}

const Button: FC<ButtonProps> = ({
  outline,
  text,
  icon
}) => {
  return (
    <S.ButtonWrapper $fill={!outline}>
      {icon}
      {text}
    </S.ButtonWrapper>
  )
}

export default Button;
