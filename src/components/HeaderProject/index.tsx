import { getDictionary } from "@/utils/getDictionary"
import { FCT, ProjectAction } from "react"
import Button from "../ButtonLink"
import { Code, Download, External, Github } from "../images/icons/vectors"

import * as S from "./styles"

interface HeaderProjectProps {
  background: string
  clientLogo: string
  title: string
  company: string
  actions: ProjectAction[]
}


const icons: Record<string, JSX.Element> = {
  "external": <External size="18" color="#fff" />,
  "code": <Code size="18" color="#fff" />,
  "download": <Download size="18" color="#fff" />
}

const HeaderProject: FCT<HeaderProjectProps> = ({
  background,
  clientLogo,
  company,
  title,
  actions = []
}) => {

  return (
    <S.HeaderProjectWrapper>
      <S.Background $bgSrc={background} />
      <S.Filter />
      <S.Content>
        <S.ProfilePictureContent>
          <S.ProfilePicture src={clientLogo} />
        </S.ProfilePictureContent>
        <S.HeaderContent>
          <S.Title>{title}</S.Title>
          <S.Company>{company}</S.Company>
          <S.ContainerButtons>
            {actions.map(({ href, icon, label }) => (
              <Button
                key={`${href}-${label}`}
                text={label}
                icon={icons[icon]}
                outline
                color="#fff"
                size="medium"
                href={href}
                target="_blank"
              />
            ))}
          </S.ContainerButtons>
        </S.HeaderContent>
      </S.Content>
    </S.HeaderProjectWrapper>
  )
}

export default HeaderProject
