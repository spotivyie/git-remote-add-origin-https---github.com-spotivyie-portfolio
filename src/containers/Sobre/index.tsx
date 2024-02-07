import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Comecei no mundo da programação há aproximadamente 1 ano e desde então,
      venho sempre buscando consolidar o que venho aprendendo e inovar através
      de projetos pessoais. Estou aprofundando meus conhecimentos por meio de
      cursos especializados na plataforma EBAC, o que me permite acompanhar as
      tendências e práticas atuais no campo da programação web, com foco
      principal em front-end, também tenho conhecimentos básicos em back-end.
      Tenho uma série de qualidades pessoais, uma mentalidade colaborativa,
      resiliência, criatividade e inovação.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=spotivyie&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=spotivyie&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
