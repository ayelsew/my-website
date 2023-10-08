import { FC } from "react";

import { Translate } from "@/components/images/icons/vectors";
import * as utils from "@/utils"

import ButtonDrop from "@/components/ButtonDrop"


interface SwitchLanguageProps {

}


const SwitchLanguage: FC<SwitchLanguageProps> = ({ }) => {

  return (
    <ButtonDrop
      icon={<Translate size="20" color="#ffffff" />}
      href="#"
      color="#272727"
      circle
      title="Mudar a página de idioma"
      outline
      actions={[
        { text: 'Português', href: '/pt-BR' },
        { text: 'English', href: '/en-US' }
      ]}
    />
  )
}

export default SwitchLanguage;
