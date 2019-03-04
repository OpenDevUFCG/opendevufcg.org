<template>
  <section>
    <h1>Equipe</h1>
    <div v-for="membro in equipe" :key="membro.url_github">
      <img :src="membro.url_img">
      <span>{{ membro.nome }}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Equipe',
  data() {
    return {
      equipe: [
        {
          nome: 'Fanny Vieira',
          url_github: 'https://github.com/FannyVieira',
          url_img: '/avatar/fanny.jpeg'
        },
        {
          nome: 'Héricles Emanuel',
          url_github: 'https://github.com/hericlesme',
          url_img: '/avatar/hericles.jpeg'
        },
        {
          nome: 'José Renan',
          url_github: 'https://github.com/JoseRenan',
          url_img: '/avatar/renan.jpeg'
        },
        {
          nome: 'José Robson',
          url_github: 'https://github.com/JRobsonJr',
          url_img: '/avatar/robson.jpeg'
        },
        {
          nome: 'Juan Barros',
          url_github: 'https://github.com/JuanBarros2',
          url_img: '/avatar/juan.jpeg'
        },
        {
          nome: 'Julio Guedes',
          url_github: 'https://github.com/juliobguedes',
          url_img: '/avatar/julio.jpeg'
        },
        {
          nome: 'Lucas Medeiros',
          url_github: 'https://github.com/LukeHxH',
          url_img: '/avatar/lucas.jpeg'
        },
        {
          nome: 'Matheus Alves',
          url_github: 'https://github.com/SpinnelSun',
          url_img: '/avatar/matheus.jpeg'
        },
        {
          nome: 'Pedro Espíndula',
          url_github: 'https://github.com/LukeHxH',
          url_img: '/avatar/pedro.jpeg'
        },
        {
          nome: 'Thayanne Luiza',
          url_github: 'https://github.com/thayannevls',
          url_img: '/avatar/thayanne.jpeg'
        }
      ]
    }
  }
}
</script>
<style scoped>
img {
  height: 15%;
  width: 15%;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  margin: 0;
}
</style>
