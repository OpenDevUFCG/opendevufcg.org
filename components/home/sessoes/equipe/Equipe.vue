<template>
  <section>
    <h1>Equipe</h1>
    <div v-for="membro in equipe" :key="membro.url_github">
      <membro-info :membro="membro"/>
    </div>
  </section>
</template>
<script>
import MembroInfo from './MembroInfo.vue'

export default {
  name: 'Equipe',
  components: {
    MembroInfo
  },
  data() {
    return {
      equipe: [
        {
          nome: 'Fanny Vieira',
          url_github: 'https://github.com/FannyVieira',
          path_img: '/avatar/fanny.jpeg'
        },
        {
          nome: 'Héricles Emanuel',
          url_github: 'https://github.com/hericlesme',
          path_img: '/avatar/hericles.jpeg'
        },
        {
          nome: 'José Renan',
          url_github: 'https://github.com/JoseRenan',
          path_img: '/avatar/renan.jpeg'
        },
        {
          nome: 'José Robson',
          url_github: 'https://github.com/JRobsonJr',
          path_img: '/avatar/robson.jpeg'
        },
        {
          nome: 'Juan Barros',
          url_github: 'https://github.com/JuanBarros2',
          path_img: '/avatar/juan.jpeg'
        },
        {
          nome: 'Julio Guedes',
          url_github: 'https://github.com/juliobguedes',
          path_img: '/avatar/julio.jpeg'
        },
        {
          nome: 'Lucas Medeiros',
          url_github: 'https://github.com/LukeHxH',
          path_img: '/avatar/lucas.jpeg'
        },
        {
          nome: 'Matheus Alves',
          url_github: 'https://github.com/SpinnelSun',
          path_img: '/avatar/matheus.jpeg'
        },
        {
          nome: 'Pedro Espíndula',
          url_github: 'https://github.com/LukeHxH',
          path_img: '/avatar/pedro.jpeg'
        },
        {
          nome: 'Thayanne Luiza',
          url_github: 'https://github.com/thayannevls',
          path_img: '/avatar/thayanne.jpeg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
