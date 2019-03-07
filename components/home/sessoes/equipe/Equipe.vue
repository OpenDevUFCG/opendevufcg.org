<template>
  <div class="content">
    <div class="sessao-head">
      <h1 class="sessao-titulo">
        Equipe 
      </h1>
    </div>
    <div class="equipe">
      <ul v-for="membro in equipe" :key="membro.url_github">
        <li><membro-info :membro="membro" /></li>
      </ul>
    </div>
  </div>
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
          nome: 'Thayanne Luiza',
          url_github: 'https://github.com/thayannevls',
          imagem: 'thayanne.jpeg'
        },
        {
          nome: 'Fanny Vieira',
          url_github: 'https://github.com/FannyVieira',
          imagem: 'fanny.jpeg'
        },
        {
          nome: 'Héricles Emanuel',
          url_github: 'https://github.com/hericlesme',
          imagem: 'hericles.jpeg'
        },
        {
          nome: 'José Renan',
          url_github: 'https://github.com/JoseRenan',
          imagem: 'renan.jpeg'
        },
        {
          nome: 'José Robson',
          url_github: 'https://github.com/JRobsonJr',
          imagem: 'robson.jpeg'
        },
        {
          nome: 'Juan Barros',
          url_github: 'https://github.com/JuanBarros2',
          imagem: 'juan.jpeg'
        },
        {
          nome: 'Julio Guedes',
          url_github: 'https://github.com/juliobguedes',
          imagem: 'julio.jpeg'
        },
        {
          nome: 'Lucas Medeiros',
          url_github: 'https://github.com/LukeHxH',
          imagem: 'lucas.jpeg'
        },
        {
          nome: 'Matheus Alves',
          url_github: 'https://github.com/SpinnelSun',
          imagem: 'matheus.jpeg'
        },
        {
          nome: 'Paulo Leitão',
          url_github: 'https://github.com/paulojbleitao',
          imagem: 'paulo.png'
        },
        {
          nome: 'Pedro Espíndula',
          url_github: 'https://github.com/pedroespindula',
          imagem: 'pedro.jpeg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.equipe {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  grid-gap: 2vmin;
  padding: 10px;
}

ul {
  list-style: none;
}
</style>
