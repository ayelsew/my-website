import { FC } from "react";

interface IconProps {
  color: string
  size: string
}

const Icon: FC<IconProps> = ({ color, size }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29 4.94366V10.6558L14.5 16.3679L0 10.6558V4.94366C0 4.56492 0.152767 4.20169 0.424695 3.93389C0.696623 3.66608 1.06544 3.51562 1.45 3.51562H27.55C27.9346 3.51562 28.3034 3.66608 28.5753 3.93389C28.8472 4.20169 29 4.56492 29 4.94366ZM0 13.7318V24.9361C0 25.3148 0.152767 25.678 0.424695 25.9459C0.696623 26.2137 1.06544 26.3641 1.45 26.3641H27.55C27.9346 26.3641 28.3034 26.2137 28.5753 25.9459C28.8472 25.678 29 25.3148 29 24.9361V13.7318L14.5 19.4439L0 13.7318Z" fill={color} />
    </svg>

  )
}

export default Icon;
