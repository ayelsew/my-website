import { FC } from "react";

interface IconProps {
  color?: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2.25 24C1.65 24 1.125 23.775 0.675 23.325C0.225 22.875 0 22.35 0 21.75V16.3875H2.25V21.75H21.75V16.3875H24V21.75C24 22.35 23.775 22.875 23.325 23.325C22.875 23.775 22.35 24 21.75 24H2.25ZM12 18.2625L4.7625 11.025L6.375 9.4125L10.875 13.9125V0H13.125V13.9125L17.625 9.4125L19.2375 11.025L12 18.2625Z" fill="white" />
    </svg>
  )
}

export default Icon;
