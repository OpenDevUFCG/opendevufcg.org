<template>
  <section class="sessao">
    <div class="sessao-head">
      <span class="sessao-titulo">Nossos Projetos</span>
      <span class="sessao-subtitulo">
        Desenvolvemos projetos para a comunidade da UFCG, você também pode contribuir para eles! Veja alguns deles abaixo: 
      </span>
    </div>
    <div class="projetos">
      <carousel 
        :navigationEnabled="true" 
        :perPage="1"
        :perPageCustom="[[600, 2]]"
        :autoplay="true"
        :autoplayTimeout="3000"
        :loop="true"
        paginationActiveColor="#1e6995"
        paginationColor	="#B1d9ee">
        <slide v-for="projeto in projetos" :key="projeto.site">
          <projeto-card :projeto="projeto" />
        </slide>
      </carousel>
    </div>
  </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import ProjetoCard from './ProjetoCard.vue'
export default {
  name: 'Projetos',
  components: {
    ProjetoCard,
    Carousel,
    Slide
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
.sessao {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.projetos {
  max-width: 620px;
  align-self: center;
}

@media only screen and (max-width: 728px) {
  .projetos {
    width: 90vw;
    margin: 4px 0px;
  }
}
</style>
