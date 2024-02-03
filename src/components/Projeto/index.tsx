import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
  title: string
  description: string
  github: string
  url: string
}

const Projeto = ({ title, description, github, url }: Props) => {
  return (
    <Card>
      <Titulo>{title}</Titulo>
      <Paragrafo tipo="secundario">{description}</Paragrafo>
      <LinkBotao href={github}>Github</LinkBotao>
      <LinkBotao href={url}>Projeto</LinkBotao>
    </Card>
  )
}

export default Projeto
