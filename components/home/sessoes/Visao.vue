<template>
  <section class="sessao">
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
  margin: 40px 0 40px 0px;
}
ul {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: auto;
  max-width: 1100px;
}
li {
  margin: 0 10px 0 10px;
  padding: 20px 0 15px 40px;
  text-decoration: none;
  list-style: none;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 24px;
  font-size: 1.4rem;
  color: #5a6166;
  background-image: url('~asssets/hexagon.svg');
  text-align: initial;
  &:nth-of-type(2n) {
    background-position: right center;
    text-align: right;
    padding: 20px 40px 15px 0px;
  }
}
@media (max-width: 790px) {
  .section {
    margin: 20px 14px 10 14px;
  }
}
</style>
