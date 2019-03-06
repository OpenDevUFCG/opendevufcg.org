<template>
  <div>
    <header>
      <introducao />
    </header>
    <main>
      <visao />
      <apresentacao />
      <projetos />
      <equipe />
    </main>
  </div>
</template>

<script>
import Visao from '@/components/home/sessoes/Visao'
import Apresentacao from '@/components/home/sessoes/apresentacao/Apresentacao'
import Introducao from '@/components/home/sessoes/Introducao'
import Projetos from '@/components/home/sessoes/projetos/Projetos'
import Equipe from '@/components/home/sessoes/equipe/Equipe'
export default {
  components: {
    Visao,
    Apresentacao,
    Introducao,
    Projetos,
    Equipe
  }
}
</script>

<style scoped>
header {
  margin: 0 auto;
  min-height: 80vh;
}

main {
  margin: auto;
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
