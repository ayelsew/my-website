import { FC } from "react";

interface IconProps {
  color: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2945 19C18.2945 19 23.55 15.4445 23.55 15.0001C23.55 14.5557 18.2945 11.0002 18.2945 11.0002M10.8055 11.0002C10.8055 11.0002 5.55 14.5557 5.55 15.0001C5.55 15.4445 10.8055 19 10.8055 19M12.9968 18.9962L16.061 11M14.5 1C7.04418 1 1 7.0441 1 14.5C1 21.9558 7.04418 28 14.5 28C21.9559 28 28 21.9558 28 14.5C28 7.0441 21.9559 1 14.5 1Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default Icon;
