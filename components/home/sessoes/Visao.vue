<template>
  <section>
    <h1>Visão</h1>
    <p>
      Entendemos que o código aberto é uma ótima prática de desenvolvimento
      para projetos de software, especialmente quando eles tem potencial
      de atingir várias pessoas. Buscamos criar um ambiente open source para:
      <ul>
        <li>Estimular a interação entre estudantes;</li>
        <li>Estimular a participação em repositórios abertos;</li>
        <li>Prover mecanismos para a contribuição por estudantes desde os primeiros períodos</li>
        <li>Desenvolver projetos de/para estudantes;</li>
        <li>Impulsionar projetos open source;</li>
      </ul>
    </p>
  </section>
</template>
<script>
export default {
  name: 'Visao'
}
</script>
<style lang="scss" scoped>
section {
  margin: 0px;
}

ul {
  margin: 10px 0 0 0;
  padding: 0 0 0 6px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
li {
  margin-top: 3px;
  margin: 0;
  padding: 15px 0 15px 30px;
  list-style: none;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 24px;
  background-image: url('~static/hexagon.svg');
  text-align: initial;
  &:nth-of-type(2n) {
    background-position: right center;
    text-align: right;
    padding: 15px 30px 15px 0px;
  }
}
p {
  text-align: center;
  font-size: 1.3rem;
  word-wrap: break-word;
}
@media (max-width: 790px) {
  section {
    margin: 20px 14px 0 14px;
  }
}
</style>
