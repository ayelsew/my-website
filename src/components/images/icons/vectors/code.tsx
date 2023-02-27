import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.6 9.96691L0 6L3.63 2L4.275 2.71074L1.29 6L4.245 9.25617L3.6 9.96691ZM8.37 10L7.72497 9.28926L10.71 6L7.75497 2.7438L8.4 2.03306L12 6L8.37 10Z" fill="white" />
    </svg>
  )
}

export default Icon;
