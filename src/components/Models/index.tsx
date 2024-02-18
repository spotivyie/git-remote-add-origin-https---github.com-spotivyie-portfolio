class Menu {
  id: number
  title: string
  description: string
  github: string
  url: string
  image: string

  constructor(
    id: number,
    title: string,
    description: string,
    github: string,
    url: string,
    image: string,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.github = github
    this.url = url
    this.image = image
  }
}

export default Menu
