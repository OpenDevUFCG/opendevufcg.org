<template>
    <div>
        <introducao/>
        <conteudo/>
    </div>
</template>

<script>
import Introducao from '@/components/home/Introducao.vue'
import Conteudo from '@/components/home/Conteudo.vue'

export default {
  name: 'Home',
  components: {
      Introducao,
      Conteudo
  }
}
</script>

<style lang="scss" scoped>

.conteudo {
  display: block;
}
</style>