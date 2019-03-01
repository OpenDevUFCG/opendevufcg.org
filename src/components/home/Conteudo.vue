<template>
    <div class="conteudo">
        <apresentacao/>
        <visao/>
        <projetos/>
        <contribuicao/>
        <equipe/>
    </div>
</template>

<script>
import Apresentacao from '@/components/home/sessoes/Apresentacao.vue'
import Visao from '@/components/home/sessoes/Visao.vue'
import Projetos from '@/components/home/sessoes/Projetos.vue'
import Contribuicao from '@/components/home/sessoes/Contribuicao.vue'
import Equipe from '@/components/home/sessoes/Equipe.vue'

export default {
  name: 'Conteudo',
  components: {
    Apresentacao,
    Visao,
    Projetos,
    Contribuicao,
    Equipe
  }
}
</script>

<style lang="scss" scoped>
.conteudo {
  margin: 0px 20px 0px;
  display: flex;
  background-color: #387CA5;

  :nth-last-child(2n) {
    background-color: white;
  }
}
</style>

