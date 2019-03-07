<template>
  <div class="membro-info">
    <a :href="membro.url_github" target="_blank">
      <img :src="require('~/assets/avatar/' + membro.imagem)" :alt="membro.nome" :title="membro.nome">
    </a>
  </div>
</template> 
<script>
export default {
  name: 'MembroInfo',
  props: {
    membro: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.membro-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 0.3s;
}

.membro-info:hover {
  transform: scale(1.2);
}

img {
  align-self: center;
  height: 80%;
  width: 80%;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  background: #639;
}
</style>
