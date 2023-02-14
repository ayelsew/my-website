import { FC, ReactElement } from "react";

import * as S from "./styles"

interface ButtonProps {
  outline?: boolean
  text: string
  icon?: ReactElement
  color?: string
  size?: "medium" | "large"
  stretch?: string
}

const Button: FC<ButtonProps> = ({
  outline,
  text,
  icon,
  color,
  size,
  stretch
}) => {
  return (
    <S.ButtonWrapper className={`${size}`} $stretch={stretch} $fill={!outline} $color={color}>
      {icon}
      {text}
    </S.ButtonWrapper>
  )
}

export default Button;
