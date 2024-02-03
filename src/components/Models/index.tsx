class Menu {
  id: number
  title: string
  description: string
  github: string
  url: string

  constructor(
    id: number,
    title: string,
    description: string,
    github: string,
    url: string,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.github = github
    this.url = url
  }
}

export default Menu
