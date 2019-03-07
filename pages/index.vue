<template>
  <div class="content">
    <header class="header">
      <introducao />
    </header>
    <main class="main">
      <visao />
      <projetos />
      <equipe />
    </main>
  </div>
</template>

<script>
import Visao from '@/components/home/sessoes/Visao'
import Introducao from '@/components/home/sessoes/Introducao'
import Projetos from '@/components/home/sessoes/projetos/Projetos'
import Equipe from '@/components/home/sessoes/equipe/Equipe'
export default {
  components: {
    Visao,
    Introducao,
    Projetos,
    Equipe
  }
}
</script>

<style lang="scss">
.header {
  margin: 0 auto;
}
.main {
  width: 100vw;
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
      color: antiquewhite;
    }
  }
}
.sessao-head {
  align-self: center;
  margin: 20px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80vw;
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
  width: 90%;
  color: rgb(38, 58, 87);
}
</style>
