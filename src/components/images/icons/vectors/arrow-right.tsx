import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7193 13L33 25.5L20.7193 38L19 36.2188L29.5307 25.5L19 14.7812L20.7193 13Z" fill="white" />
    </svg>
  )
}

export default Icon;
