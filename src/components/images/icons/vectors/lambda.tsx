import { FC } from "react";

interface IconProps {
  color: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.22419 1.5H11.2463L14.5028 9.08693M27.47 24.8909C27.47 24.8909 26.3014 25.4478 24.8408 26.2832C24.1636 26.6705 22.6774 27.5 22.5037 27.5C22.3299 27.5 22.2529 27.0015 21.9313 26.2832L18.217 17.6851L14.5028 9.08693M1.46997 27.5L14.5028 9.08693" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export default Icon;
