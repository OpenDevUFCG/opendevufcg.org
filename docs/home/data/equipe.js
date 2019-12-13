const githubApi = "https://api.github.com";

gerarDadosEquipe = async () =>  {
  const dados = await 
  fetch(`${githubApi}/orgs/opendevufcg/public_members`)
  .then(response => response.json())
  .catch(error => console.log("Error Team Get" + error))
 
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
  console.log(dadosEquipe)
  let newArray = dadosEquipe.map(memberInfo =>{
      return gerarDadosMembro(memberInfo.login)
  })

  return newArray
}

const inicializarEquipe = () =>{
  let data = formatarDadosEquipe()


  return [] // retornando vazio enquanto o processo de retorno dos dados ainda nao foi corrigido
}

var equipe = inicializarEquipe()