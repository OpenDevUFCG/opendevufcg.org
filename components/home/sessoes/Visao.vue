<template>
  <section class="sessao" id="section2">
    <header class="sessao-head">
      <span class="sessao-titulo">Visão</span>
      <span class="sessao-subtitulo">
        Entendemos que o código aberto é uma ótima prática de desenvolvimento
      para projetos de software, especialmente quando eles tem potencial
      de atingir várias pessoas. Nosso principal objetivo é criar um ambiente open source para:
      </span>
    </header>
    <ul>
      <li>Estimular a troca de conhecimentos entre estudantes</li>
      <li>Incentivar a criação de projetos open source na UFCG</li>
      <li>Reduzir as barreiras entre estudantes e suas primeiras contribuições open source</li>
      <li>Desenvolver projetos de/para estudantes</li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'Visao'
}
</script>
<style lang="scss" scoped>
.sessao {
  display: flex;
  flex-direction: column;
}
ul {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: auto;
  padding: 30px 20px 30px 20px;
}
li {
  margin: 0 10px 0 10px;
  padding: 20px 0 20px 40px;
  text-decoration: none;
  list-style: none;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 24px;
  font-size: 1.4rem;
  color: #f0f0f0;
  background-image: url('~assets/hexagon.svg');
  text-align: initial;
  &:nth-of-type(2n) {
    background-position: right center;
    text-align: right;
    padding: 20px 40px 15px 0px;
  }
}
@media (max-width: 790px) {
  .sessao {
    margin: 20px 14px 10 14px;
  }
}
</style>
