
import projetos from '../data/projetos.js'
import equipe from '../data/equipe.js'


const renderProjetoCard = ({titulo, descricao, site, imagem}) => {
  const projetoCard = document.getElementById('projeto-template').cloneNode(true)
  projetoCard.id = "projeto-" + titulo

  projetoCard.querySelector('.projeto-descricao').textContent = descricao
  projetoCard.querySelector('.projeto-imagem').src = '../images/projetos_logos/' + imagem
  projetoCard.querySelector('.projeto-site').href = site

  return projetoCard
}

const renderMembroInfo = ({nome, url_github}) => {
  const membroInfo = document.getElementById('membro-template').cloneNode(true)
  membroInfo.id = "url_github"

  membroInfo.querySelector('.membro-github').href = url_github
  membroInfo.querySelector('.membro-imagem').src = url_github + '.png'
  membroInfo.querySelector('.membro-imagem').alt = nome 
  membroInfo.querySelector('.membro-imagem').title = nome 

  return membroInfo
}

const renderProjetos = () => {
  projetos.forEach(projeto => 
    document.querySelector('.projetos').appendChild(renderProjetoCard(projeto))
  )
  document.getElementById('projeto-template').remove()
}

const renderEquipe = () => {
  equipe.forEach(membro => 
    document.querySelector('.equipe').appendChild(renderMembroInfo(membro))
  )
  document.getElementById('membro-template').remove()
}

const init = () => {
  console.log('hey')
  console.log(projetos)
  renderProjetos()
  renderEquipe()
}

init()