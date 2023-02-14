import * as S from "./styles";
import { Background2 } from "@/components/images/backgrounds/vectors";
import { CrossPlatform, Syncronism } from "@/components/images/vectors";
import { Carousel } from "../Carousel";
import Card from "../Card";
import Button from "../Button";
import { Eye } from "../images/icons/vectors";

const Section3 = () => {
  return (
    <S.Section1Wrapper>
      <S.Background>
        <Background2 />
      </S.Background>
      <S.Content>
        <S.CarouselArea>
          <Carousel>
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} />
                <Button text='Vizualizar' icon={<Eye size='20' />} />
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} />
                <Button text='Vizualizar' icon={<Eye size='20' />} />
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} />
                <Button text='Vizualizar' icon={<Eye size='20' />} />
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} />
                <Button text='Vizualizar' icon={<Eye size='20' />} />
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
            <Card
              title="IP Sync Cloudflare"
              description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
              background="/images/ip_sync_cloudflare.png"
              buttons={<>
                <Button text='Vizualizar' icon={<Eye size='20' />} />
                <Button text='Vizualizar' icon={<Eye size='20' />} />
              </>}
              profilePicture={<Eye size='29' color='white' />}
            />
          </Carousel>
        </S.CarouselArea>

        <S.Snippet>
          <S.SnippetTitle>
            Centralização e sincronismo
          </S.SnippetTitle>
          <S.SnippetParagraph>
            Desenvolvimento de APIs sobre HTTP, permitindo fácil integração com outros sistemas, usando Nginx, MySQL MongoBD e outros. Combinado com fatores para aumentar a segurança do armazenamento e tráfego dos dados como Firewall, SSL, Bcrypt e JWT.
          </S.SnippetParagraph>
        </S.Snippet>
        
        <S.FavCard>
          <Card
            title="IP Sync Cloudflare"
            description="Scheduler para realizar a sincronização periódica de endereços IPs de servidores sem endereçamento estático na Cloudflare"
            background="/images/ip_sync_cloudflare.png"
            buttons={
              <Button text='Vizualizar' icon={<Eye size='20' />} />
            }
          />
        </S.FavCard>
      </S.Content>
    </S.Section1Wrapper>
  )
}

export default Section3
