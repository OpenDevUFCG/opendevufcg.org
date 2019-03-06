<template>
  <div class="card">
    <img :src="require('~/assets/projetos_icones/' + projeto.imagem)">
    <a class="titulo" :href="projeto.site" target="_blank"> 
      {{ projeto.titulo }}
    </a>
    <p class="descricao">
      {{ projeto.descricao }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProjetoCard',
  props: {
    projeto: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  width: 300px;
  max-height: 100vh;
  height: 410px;
  text-align: center;
  padding: 2px 20px;
  border-radius: 4px;
  box-shadow: 0 15px 35px #32325a1a, 0 5px 15px #00000012;
  border: 1px solid #00000020;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: default;

  img {
    height: 200px;
    width: 200px;
    padding: 30px 30px;
    margin-bottom: 20px;
  }
}

.card:hover {
  box-shadow: 0 18px 35px rgba(50, 50, 90, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  transform: translateY(-1px);
}

.titulo {
  display: block;
  text-decoration: none;
  letter-spacing: 2px;
  color: #35495e;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 30px;
}

.titulo:hover {
  text-decoration: underline;
}

.descricao {
  text-align: center;
  color: #80858a;
}

@media (max-width: 600px) {
  .card {
    width: 95%;
    margin: 0px 5px;
  }
  img {
    width: 80%;
    height: 80%;
  }
}
</style>
