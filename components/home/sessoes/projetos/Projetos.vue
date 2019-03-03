<template>
  <section class="section--allscreen">
    <div class="projetosGrid">
      <projeto-card v-for="projeto in projetos" :key="projeto.site" :projeto="projeto" />
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
          imagem: '/glossario_icon.svg'
        },
        {
          titulo: 'Tamburetei',
          descricao:
            'Repositório contendo materiais para ajudar alunos fazerem de tamburete cadeiras de Computação@UFCG.',
          site: 'https://github.com/opendevufcg/Tamburetei/',
          imagem: '/tamburetei_icon.svg'
        },
        {
          titulo: 'IssueAi',
          descricao:
            'O Issue Ai cria um espaço de visibilidade para os projetos open source de Computação@UFCG.',
          site: 'https://issueai.opendevufcg.org/',
          imagem: '/opendev_icon.png'
        },
        {
          titulo: 'Roadmap CC',
          descricao: 'Roadmap para se tornar um cientista de Computação@UFCG.',
          site: 'https://github.com/OpenDevUFCG/roadmap-cc',
          imagem: '/roadmapcc_icon.svg'
        },
        {
          titulo: 'Laguinho API',
          descricao:
            'Onde todos os dados, pessoas e radiação da UFCG se encontram.',
          site: 'https://github.com/OpenDevUFCG/laguinho-api',
          imagem: '/opendev_icon.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.projetosGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  * {
    margin: 10px;
  }
}

@media (max-width: 600px) {
  .projetosGrid {
    flex-direction: column;
  }
}
</style>
