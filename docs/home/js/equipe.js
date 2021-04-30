import { getAllMaintainers, getMember, resetExpiredCache } from "./response-caching.js"

const gerarDadosEquipe = async () =>  {
  const dados = await getAllMaintainers()

  if(!dados)
    console.error("Nao foi possivel buscar a equipe!")

  return dados
}

const gerarDadosMembro = async (memberLogin) => {
  const member = await getMember(memberLogin)

  const membroEquipe = {
    nome: member.name,
    url_github: member.html_url
  };

  return membroEquipe
}

const formatarDadosEquipe = async () => {
  const dadosEquipe = await gerarDadosEquipe();

  return dadosEquipe.map(async member => await gerarDadosMembro(member.login))
}

export const inicializarEquipe = async () => {
  await resetExpiredCache()

  return await formatarDadosEquipe()
}
