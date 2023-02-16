import { FC, ReactElement, useEffect, useRef, useState } from "react";

import * as S from "./styles"

interface ExpandOnScreeenProps {
  children: ReactElement
  expand: boolean
  onClose: () => void
}

const ExpandOnScreeen: FC<ExpandOnScreeenProps> = ({ children, expand, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [XY, setXY] = useState<{ top: string, left: string }>({
    left: "0",
    top: "0"
  })

  useEffect(() => {
    const { current: wrapper } = wrapperRef
    if (wrapper === null) return;

    const { top, left } = wrapper.getBoundingClientRect()

    setXY({ top: `${top}px`, left: `${left}px` })
  }, [expand])

  return (
    <S.ExpandOnScreenWrapper ref={wrapperRef} className={`${expand ? "expand" : ""}`} style={XY} >
      <S.BackLayer onClick={onClose} ></S.BackLayer>
      <S.Content>
        {children}
      </S.Content>
    </S.ExpandOnScreenWrapper>
  )
}

export default ExpandOnScreeen;
