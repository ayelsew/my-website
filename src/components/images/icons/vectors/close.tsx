import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.2716 25L10.9257 12.5003L23.2716 0.000588169L25 1.7818L14.4134 12.5003L25 23.2188L23.2716 25Z" fill="#2FB5FF" />
      <path d="M1.72843 0L14.0743 12.4997L1.72843 24.9994L0 23.2182L10.5866 12.4997L0 1.78121L1.72843 0Z" fill="#2FB5FF" />
    </svg>

  )
}

export default Icon;
