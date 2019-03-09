<template>
  <div>
    <header class="header">
      <introducao />
    </header>
    <main class="main">
      <visao />
      <apresentacao />
      <projetos />
      <contribuicao />
      <equipe />
    </main>
  </div>
</template>

<script>
import Introducao from '@/components/home/sessoes/Introducao'
import Contribuicao from '@/components/home/sessoes/contribuicao/Contribuicao.vue'
import Projetos from '@/components/home/sessoes/projetos/Projetos'
import Apresentacao from '@/components/home/sessoes/apresentacao/Apresentacao'
import Visao from '@/components/home/sessoes/Visao'
import Equipe from '@/components/home/sessoes/equipe/Equipe'

export default {
  components: {
    Introducao,
    Apresentacao,
    Projetos,
    Equipe,
    Contribuicao,
    Visao
  }
}
</script>

<style lang="scss">
.header {
  margin: 0 auto;
}
.main {
  overflow: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
}
.sessao {
  background-color: rgb(255, 255, 255);
  padding: 20px 0 40px 0px;
  &:nth-child(2n + 1) {
    background-color: rgb(38, 58, 87);
    .sessao-titulo {
      color: #f5f5f5;
    }
    .sessao-subtitulo {
      color: rgb(211, 229, 255);
    }
  }
}
.sessao-head {
  align-self: center;
  margin: 20px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sessao-titulo {
  font-size: 3rem;
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-weight: normal;
  color: rgb(38, 58, 87);
}
.sessao-subtitulo {
  font-size: 1.3rem;
  text-align: center;
  line-height: 25px;
  max-width: 80vw;
  color: rgb(38, 58, 87);
}
</style>
