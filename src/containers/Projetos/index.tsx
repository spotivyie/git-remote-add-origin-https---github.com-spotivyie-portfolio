import Menu from '../../components/Models'
import ProjetoList from '../List'

import food from '../../image/food.jpeg'
import play from '../../image/play.jpeg'
import notas from '../../image/notas.jpeg'
import calculadora from '../../image/calculadora.jpeg'
import listagem from '../../image/listagem.jpeg'
import agenda from '../../image/agenda.jpeg'
import disney from '../../image/disney.jpeg'
import evento from '../../image/evento.jpeg'
import restaurante from '../../image/restaurante.jpeg'
import login from '../../image/login.jpeg'

const projetos: Menu[] = [
  {
    id: 1,
    title: 'Notas',
    image: notas,
    description:
      'Um bloco de notas que permite criar notas por meio de digitação ou gravação de áudio.',
    github: 'https://github.com/spotivyie/notas',
    url: 'https://notas-virid.vercel.app',
  },
  {
    id: 2,
    title: 'Tela de login',
    image: login,
    description:
      'Tela de login de react com typescript e vite, estilizado com tailwind.',
    github: 'https://github.com/spotivyie/tela-de-login',
    url: 'https://tela-de-login-murex.vercel.app',
  },
  {
    id: 3,
    title: 'Foods',
    image: food,
    description: 'Loja de restaurantes com react e styled components.',
    github: 'https://github.com/spotivyie/foods',
    url: 'https://foods-dusky.vercel.app',
  },
  {
    id: 4,
    title: 'Eplay',
    image: play,
    description: 'Loja virtual de games com react e styled components.',
    github: 'https://github.com/spotivyie/eplay',
    url: 'https://games-ten-gamma.vercel.app',
  },
  {
    id: 5,
    title: 'Listagem de tarefas',
    image: listagem,
    description:
      'Uma listagem de tarefas com styled components, react com typescript e redux.',
    github: 'https://github.com/spotivyie/listagem_de_tarefas',
    url: 'https://minhas-tarefas-gamma-sable.vercel.app',
  },
  {
    id: 6,
    title: 'Landpage da Disney',
    image: disney,
    description:
      'Landpage clone do site da Disney, utilizando ferramentas como o gulp e o sass.',
    github: 'https://github.com/spotivyie/Clone_disneyplus',
    url: 'https://clone-disneyplus-orpin-nine.vercel.app',
  },
  {
    id: 7,
    title: 'Restaurante',
    image: restaurante,
    description: 'Uma página para um restaurante utilizando o bootstrap.',
    github: 'https://github.com/spotivyie/restaurante',
    url: 'https://restaurante-puce-seven.vercel.app',
  },
  {
    id: 8,
    title: 'Agenda de contatos',
    image: agenda,
    description:
      'Neste projeto teremos uma agenda de contatos em que utilizei html, css e js.',
    github: 'https://github.com/spotivyie/agenda_de_contatos',
    url: 'https://agenda-beige-rho.vercel.app',
  },
  {
    id: 9,
    title: 'Evento fictício',
    image: evento,
    description: 'Lading page para um evento com timer, utilizando js.',
    github: 'https://github.com/spotivyie/evento_ficticio',
    url: 'https://evento-ficticio-psi.vercel.app/#',
  },
  {
    id: 10,
    title: 'Calculadora',
    image: calculadora,
    description: 'Projeto de uma calculadora com VueJS.',
    github: 'https://github.com/spotivyie/calculadora',
    url: 'https://calculadora-hazel-nine.vercel.app',
  },
]

const Projetos = () => (
  <>
    <ProjetoList menu={projetos} />
  </>
)

export default Projetos
