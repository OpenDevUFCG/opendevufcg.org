<template>
  <section class="sessao">
    <div class="sessao-head">
      <span class="sessao-titulo">Nossos Projetos</span>
      <span class="sessao-subtitulo">
        Desenvolvemos projetos para a comunidade da UFCG, você também pode contribuir para eles! Veja alguns deles abaixo: 
      </span>
    </div>
    <div class="projetos">
      <ul v-for="projeto in projetos" :key="projeto.site">
        <li><projeto-card :projeto="projeto" /></li>
      </ul>
    </div>
  </section>
</template>
<script>
import ProjetoCard from './ProjetoCard.vue'
export default {
  name: 'Projetos',
  components: {
    ProjetoCard
  },
  data() {
    return {
      projetos: [
        {
          titulo: 'Glossário UFCG',
          descricao:
            'Glossário contendo significados de siglas e gírias usadas por alunos da UFCG.',
          site: 'https://glossario.opendevufcg.org/',
          imagem: 'glossario_icon.svg'
        },
        {
          titulo: 'Tamburetei',
          descricao:
            'Repositório contendo materiais para ajudar alunos fazerem de tamburete cadeiras de Computação@UFCG.',
          site: 'https://github.com/opendevufcg/Tamburetei/',
          imagem: 'tamburetei_icon.svg'
        },
        {
          titulo: 'IssueAi',
          descricao:
            'O Issue Ai cria um espaço de visibilidade para os projetos open source de Computação@UFCG.',
          site: 'https://issueai.opendevufcg.org/',
          imagem: 'issueai_icon.svg'
        },
        {
          titulo: 'Roadmap CC',
          descricao: 'Roadmap para se tornar um cientista de Computação@UFCG.',
          site: 'https://github.com/OpenDevUFCG/roadmap-cc',
          imagem: 'roadmapcc_icon.svg'
        },
        {
          titulo: 'Laguinho API',
          descricao:
            'Onde todos os dados, pessoas e radiação da UFCG se encontram.',
          site: 'https://github.com/OpenDevUFCG/laguinho-api',
          imagem: 'laguinho_icon.svg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
}
.sessao {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.projetos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
}

@media only screen and (max-width: 728px) {
  .projetos {
    width: 90vw;
    margin: 10px 10px;
  }
}
</style>
