import Link from "next/link";
import { FC, ReactElement } from "react";
import { Url } from "url";

import * as S from "./styles"

interface ButtonLinkProps {
  outline?: boolean
  text?: string
  icon?: ReactElement
  color?: string
  size?: "medium" | "large"
  stretch?: string
  href: Url | string
  target?: HTMLAnchorElement["target"],
  circle?: boolean
}

const ButtonLink: FC<ButtonLinkProps> = ({
  outline,
  text,
  icon,
  color,
  size,
  stretch,
  href,
  target,
  circle
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <S.ButtonWrapper className={`${size ?? ""} ${circle ? "circle" : ""}`} $stretch={stretch} $fill={!outline} $color={color} target={target}>
        {icon}
        {text}
      </S.ButtonWrapper>
    </Link>
  )
}

export default ButtonLink;
