import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1737_2)">
        <path d="M22.9771 4.23926H6.02293C2.69655 4.23926 0 6.93581 0 10.2622V18.7375C0 22.0638 2.69655 24.7604 6.02293 24.7604H22.9771C26.3034 24.7604 29 22.0638 29 18.7375V10.2622C29 6.93581 26.3034 4.23926 22.9771 4.23926ZM18.9038 14.9122L10.9738 18.6943C10.7625 18.7951 10.5184 18.641 10.5184 18.407V10.6063C10.5184 10.3689 10.7689 10.215 10.9807 10.3223L18.9107 14.3409C19.1464 14.4603 19.1423 14.7984 18.9038 14.9122Z" fill="#7D7D7D" />
      </g>
      <defs>
        <clipPath id="clip0_1737_2">
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon;
