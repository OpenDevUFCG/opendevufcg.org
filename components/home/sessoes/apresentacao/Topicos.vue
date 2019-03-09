<template>
  <div class="topicos">
      <div class="topico" v-for="topico in topicos" :key="topico.titulo">
          <span class="topico-titulo">{{ topico.titulo }}</span>
          <span class="topico-descricao">{{ topico.descricao }}</span>   
      </div>
  </div>
</template>
<script>
export default {
  name: 'Topicos',
  data() {
    return {
      topicos: [
        {
          titulo: 'Comunidade',
          descricao:
            'Juntos fazemos mais, por isso nos esforçamos em criar uma comunidade que exista diálogo, amizade, respeito e suporte. Todos são bem vindos, seja para contribuir, sugerir novas ideias ou pedir ajuda.'
        },
        {
          titulo: 'Open Source',
          descricao:
            'Open Source permite que qualquer pessoa possa ver, modificar, contribuir e distribuir seu código. Adotamos o Open Source como filosofia pois acreditamos que é isso que nos conecta, todos nossos projetos são Open Source e queremos espalhar essa cultura pela UFCG e quem sabe até fora dela.'
        },
        {
          titulo: 'Empoderamento',
          descricao:
            'Queremos empoderar pessoas, do iniciante ao experiente, todos podem aprender, sugerir e ajudar na OpenDevUFCG. Queremos ser a comunidade que possa encorajar pessoas a tomarem o primeiro passo, a sugerir novas ideias e principalmente, a contruí-las.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.topicos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  grid-gap: 30px 70px;
}
.topico {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 4fr;
  grid-gap: 5px 0px;
  grid-template-areas:
    'titulo'
    'descricao';
  @media only screen and (max-width: 728px) {
    grid-gap: 4px 0px;
  }
}
.topico-titulo {
  font-size: 2rem;
  color: #387ca5;
  letter-spacing: 0.2rem;
  grid-area: titulo;
}
.topico-descricao {
  grid-area: descricao;
  color: #80858a;
  letter-spacing: 0.1rem;
  margin-left: 10px;
}
</style>
