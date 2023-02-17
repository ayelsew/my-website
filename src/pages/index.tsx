import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import * as S from "./styles";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: "40%",
      threshold: 1
    };

    const observer = new IntersectionObserver(elements => {
      const [element] = elements;

      if (element.isIntersecting)
        window.history.replaceState({}, "", `${router.basePath}#${element.target.id}`)
    }, options);

    const howAmI = document.getElementById("who-am-I") as HTMLDivElement;
    const skills = document.getElementById("skills") as HTMLDivElement;
    const portfolio = document.getElementById("portfolio") as HTMLDivElement;

    observer.observe(howAmI);
    observer.observe(skills);
    observer.observe(portfolio);

    return () => {
      observer.disconnect()
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Section id="who-am-I">
        <Section1 />
      </S.Section>
      <S.Section id="skills">
        <Section2 />
      </S.Section>
      <S.Section id="portfolio">
        <Section3 />
      </S.Section>
    </>
  )
}
