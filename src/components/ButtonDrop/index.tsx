import Link from "next/link";
import { FC, ReactElement, useState } from "react";

import * as S from "./styles"

interface Action {
    text: string
    href: string
}

interface ButtonDropProps {
    outline?: boolean
    text?: string
    icon?: ReactElement
    color?: string
    size?: "medium" | "large"
    stretch?: string
    href: string
    target?: HTMLAnchorElement["target"],
    circle?: boolean
    title?: string
    actions: Action[]
}

const ButtonDrop: FC<ButtonDropProps> = ({
    outline,
    text,
    icon,
    color,
    size,
    stretch,
    href,
    target,
    circle,
    title,
    actions
}) => {
    const [drop, setDrop] = useState(false);

    const renderItem = ({ text, href }: Action) => (
        <S.Item>
            <Link href={href} passHref legacyBehavior>
                <a>{text}</a>
            </Link>
        </S.Item>
    )

    return (
        <S.ButtonDropdown>
            <S.ButtonWrapper
                onClick={() => setDrop(status => !status)}
                title={title} className={`${size ?? ""} ${circle ? "circle" : ""}`} $stretch={stretch} $fill={!outline} $color={color}>
                {icon}
                {text}
            </S.ButtonWrapper>
            <S.Dropdown className={`${drop ? 'active' : ''}`}>
                {actions.map(renderItem)}
            </S.Dropdown>
        </S.ButtonDropdown>
    );
}

export default ButtonDrop
