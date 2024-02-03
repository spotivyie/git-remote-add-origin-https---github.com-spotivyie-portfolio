import Menu from '../../components/Models'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

export type Props = {
  menu: Menu[]
}

const ProjetoList = ({ menu }: Props) => (
  <>
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {menu.map((menus) => (
          <Projeto
            key={menus.id}
            title={menus.title}
            description={menus.description}
            github={menus.github}
            url={menus.url}
          />
        ))}
      </Lista>
    </section>
  </>
)

export default ProjetoList
