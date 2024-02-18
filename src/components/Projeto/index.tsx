import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

type Props = {
  title: string
  description: string
  github: string
  url: string
  image: string
}

const Projeto = ({ title, description, github, url, image }: Props) => {
  return (
    <Card>
      <Titulo>{title}</Titulo>
      <Paragrafo tipo="secundario">{description}</Paragrafo>
      <img src={image} />
      <LinkBotao href={github}>Github</LinkBotao>
      <LinkBotao href={url}>Projeto</LinkBotao>
    </Card>
  )
}

export default Projeto
