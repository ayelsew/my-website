import { FC, ReactElement, UIEvent, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "../images/icons/vectors";

import * as S from "./styles"

interface CarouselProps {
  children: ReactElement | ReactElement[]
  salveScroll?: string
}

export const Carousel: FC<CarouselProps> = ({ children, salveScroll }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollHistoryRef = useRef<number>(0);
  const firstRender = useRef<boolean>(true);
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

  const onScroll = useCallback(({ target }: UIEvent<HTMLDivElement>) => {
    if (salveScroll && !firstRender.current) {
      scrollHistoryRef.current = (target as HTMLDivElement).scrollLeft;
    }
  }, [salveScroll]);

  /** 
   * Intersection for observer scroll and hide or show arrows control
   */
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
      if (firstRender.current) return;

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

  /** 
   * Load and save scroll position before component unmount
   */
  useEffect(() => {
    if (firstRender.current)
      scrollHistoryRef.current = Number(localStorage.getItem(`${salveScroll}-carousel-scroll`));

    setTimeout(() => {
      if (scrollHistoryRef.current && containerRef.current !== null)
        containerRef.current.scrollLeft = scrollHistoryRef.current;
    }, 1000)

    return () => {
      if (salveScroll) {
        localStorage.setItem(`${salveScroll}-carousel-scroll`, scrollHistoryRef.current.toString())
      }
    }
  }, [salveScroll])

  useEffect(() => {
    firstRender.current = false
  }, [])

  return (
    <S.CarouselWrapper>
      <S.Content ref={containerRef} onScroll={onScroll}>
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