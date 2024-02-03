import Menu from '../../components/Models'
import ProjetoList from '../List'

const projetos: Menu[] = [
  {
    id: 1,
    title: 'Foods',
    description: 'Loja de restaurantes com react e styled components.',
    github: 'https://github.com/spotivyie/foods',
    url: 'https://foods-dusky.vercel.app',
  },
  {
    id: 2,
    title: 'Eplay',
    description: 'Loja virtual de games com react e styled components.',
    github: 'https://github.com/spotivyie/eplay',
    url: 'https://games-ten-gamma.vercel.app',
  },
  {
    id: 3,
    title: 'Listagem de tarefas',
    description:
      'Uma listagem de tarefas com styled components, react com typescript e redux.',
    github: 'https://github.com/spotivyie/listagem_de_tarefas',
    url: 'https://minhas-tarefas-gamma-sable.vercel.app',
  },
  {
    id: 4,
    title: 'Landpage da Disney',
    description:
      'Landpage clone do site da Disney, utilizando ferramentas como o gulp e o sass.',
    github: 'https://github.com/spotivyie/Clone_disneyplus',
    url: 'https://clone-disneyplus-orpin-nine.vercel.app',
  },
  {
    id: 5,
    title: 'Restaurante',
    description: 'Uma página para um restaurante utilizando o bootstrap.',
    github: 'https://github.com/spotivyie/restaurante',
    url: 'https://restaurante-puce-seven.vercel.app',
  },
  {
    id: 6,
    title: 'Agenda de contatos',
    description:
      'Neste projeto teremos uma agenda de contatos em que iremos utilizar html, css e js.',
    github: 'https://github.com/spotivyie/agenda_de_contatos',
    url: 'https://agenda-beige-rho.vercel.app',
  },
]

const Projetos = () => (
  <>
    <ProjetoList menu={projetos} />
  </>
)

export default Projetos
