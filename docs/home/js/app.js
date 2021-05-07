import { inicializarEquipe } from "./equipe.js"
/*
  Dados de projetos e equipe estão na pasta data/
*/

const renderProjetoCard = ({titulo, descricao, site, imagem}) => {
  const projetoCard = document.getElementById('projeto-template').cloneNode(true)
  projetoCard.id = "projeto-" + titulo

  projetoCard.querySelector('.projeto-descricao').textContent = descricao
  projetoCard.querySelector('.projeto-imagem').src = './home/img/projetos_logos/' + imagem
  projetoCard.querySelector('.projeto-site').href = site

  return projetoCard
}

const renderMembroInfo = ({nome, url_github}) => {
  const memberLink = document.createElement("a")
  memberLink.href = url_github
  memberLink.alt = nome
  memberLink.title = nome
  memberLink.target = "_blank"

  const member = document.createElement("div")
  member.classList.add("maintainer")

  const memberImage = document.createElement("img")
  memberImage.src = `${url_github}.png`

  member.appendChild(memberImage)
  memberLink.appendChild(member)

  return memberLink
}

const renderProjetos = () => {
  projetos.forEach(projeto =>
    document.querySelector('.projetos').appendChild(renderProjetoCard(projeto))
  )
  document.getElementById('projeto-template').remove()
}

const renderEquipe = async () => {
  const equipe = await inicializarEquipe()

  equipe.forEach(async membro => {
    const result = await membro

    if(!result.url_github)
      return

    return document.querySelector('.maintainers').appendChild(renderMembroInfo(result))
  })

}

const init = () => {
  //renderProjetos()
  renderEquipe()
}

init()
