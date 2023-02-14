import { FC, ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../images/icons/vectors";

import * as S from "./styles"

interface CarouselProps {
  children: ReactElement | ReactElement[]
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hideLeftButton, setLeftButton] = useState<boolean>(true);
  const [hideRightButton, setRightButton] = useState<boolean>(false);

  const goToNext = useCallback(() => {
    const { current: container } = containerRef;
    if (container === null) return;
    const fisrtItem = container.children.item(0);

    containerRef.current?.scrollBy({ left: Number(fisrtItem?.clientWidth) })
  }, [])

  const goToPrev = useCallback(() => {
    const { current: container } = containerRef;
    if (container === null) return;
    const fisrtItem = container.children.item(0);

    container.scrollBy({ left: -Number(fisrtItem?.clientWidth) })
  }, [])

  useEffect(() => {
    const { current: container } = containerRef;
    if (container === null) return;

    const fisrtItem = container.children.item(0);
    const lastItem = container.children.item(container.children.length - 1);

    if (!fisrtItem || !lastItem) return;

    fisrtItem.setAttribute("data-st", "first");
    lastItem.setAttribute("data-st", "last");

    const options: IntersectionObserverInit = {
      root: container,
      rootMargin: "40px",
      threshold: 1
    }

    const observer = new IntersectionObserver((entry) => {
      const [element] = entry;
      const position: "first" | "last" = element.target.getAttribute("data-st") as "first" | "last";

      if (position === "first" && element.isIntersecting) {
        setLeftButton(true);
        setRightButton(false);
      } else if (position === "last" && element.isIntersecting) {
        setLeftButton(false);
        setRightButton(true);
      } else {
        setLeftButton(false);
        setRightButton(false);
      }
    }, options);

    observer.observe(fisrtItem)
    observer.observe(lastItem)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <S.CarouselWrapper>
      <S.Content ref={containerRef}>
        {children}
      </S.Content>
      <S.Button className={`PrevCarouselButton ${hideLeftButton ? "hide" : ""}`} onClick={goToPrev}>
        <ArrowLeft size="40" />
      </S.Button>
      <S.Button className={`NextCarouselButton ${hideRightButton ? "hide" : ""}`} onClick={goToNext}>
        <ArrowRight size="40" />
      </S.Button>
    </S.CarouselWrapper>
  )
}