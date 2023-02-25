import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.4 18.9421L0.5 12L7.4575 5L8.69375 6.2438L2.9725 12L8.63625 17.6983L7.4 18.9421ZM16.5425 19L15.3062 17.7562L21.0275 12L15.3637 6.30165L16.6 5.05785L23.5 12L16.5425 19Z" fill={color || "black"} />
    </svg>
  )
}

export default Icon;
