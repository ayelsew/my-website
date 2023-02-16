import * as S from "./styles";
import { Background2 } from "@/components/images/backgrounds/vectors";
import { CrossPlatform, Syncronism } from "@/components/images/vectors";
import { Carousel } from "../Carousel";
import Card from "../Card";
import Button from "../ButtonLink";
import { Eye, Github } from "../images/icons/vectors";
import Paragraph from "../Paragraph";
import TitleH2 from "../TitleH2";

const Section3 = () => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        <Background2 />
      </S.Background>
      <S.Content>

        <S.CarouselArea>
          <TitleH2>
            Projetos concluÍdos
          </TitleH2>
          <Carousel salveScroll="projects">
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} href="/project" />
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} href="/project"/>
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} href="/project"/>
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} href="/project"/>
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} href="/project"/>
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
          </Carousel>
        </S.CarouselArea>

        <S.Snippet className="open-source">
          <TitleH2>
            Open source & experimentos
          </TitleH2>
          <Paragraph>
            De tempos em tempos, testo algumas tecnologias para entender seu funcionamento, ou para ajudar no desenvolvimento de portifólio para amigos que querem ingressar em desenvolvimento.
          </Paragraph>

          <Button
            text="Ver Github"
            icon={<Github size="18" color="#fff" />}
            outline
            color="#fff"
            size="medium"
            stretch="70%"
            href="/project"
          />
        </S.Snippet>

        <S.FavCard>
          <Card
            title="IP Sync Cloudflare"
            description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
            background="/images/ip_sync_cloudflare.png"
            buttons={
              <Button text='Vizualizar' icon={<Eye size='20' />} href="/project"/>
            }
          />
        </S.FavCard>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section3
