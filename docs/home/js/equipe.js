const githubApi = "https://api.github.com";

gerarDadosEquipe = async () =>  {
  const dados = await 
  fetch(`${githubApi}/orgs/opendevufcg/public_members`)
  .then(response => response.json())
  .catch(error => console.error("Erro ao recuperar dados da equipe" + error))
 
  return dados
}

gerarDadosMembro = async (memberLogin) => {
  const member = await fetch(`${githubApi}/users/${memberLogin}`).then(response =>{
    return response.json().then(memberData => {
      const membroEquipe = {nome: memberData.name, url_github: memberData.html_url};
      return membroEquipe
  })
})
    return member
}

formatarDadosEquipe = async () => {
  const dadosEquipe = await gerarDadosEquipe();

  return dadosEquipe.map(member => gerarDadosMembro(member.login))
}

const inicializarEquipe = async () => {
  return await formatarDadosEquipe().then(async memberListPromises => await Promise.all(memberListPromises).then(memberList=>memberList))
}