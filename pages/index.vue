<template>
  <section class="container">
    <introducao/>
    <conteudo/>
  </section>
</template>

<script>
import Conteudo from '@/components/home/Conteudo.vue'
import Introducao from '@/components/home/Introducao.vue'

export default {
  components: {
    Conteudo,
    Introducao
  }
}
</script>

<style>
.container {
  margin: 0;
  display: grid;
}
</style>
