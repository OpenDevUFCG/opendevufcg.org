<template>
    <div>
        <introducao/>
        <apresentacao/>
    </div>
</template>

<script>
import Introducao from '@/components/home/Introducao.vue'
import Apresentacao from '@/components/home/sessoes/Apresentacao.vue'

export default {
  name: 'Home',
  components: {
      Introducao,
      Apresentacao
  }
}
</script>

<style lang="scss" scoped>


</style>