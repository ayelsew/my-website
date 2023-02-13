import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.2807 37L19 24.5L31.2807 12L33 13.7812L22.4693 24.5L33 35.2188L31.2807 37Z" fill="white" />
    </svg>
  )
}

export default Icon;
