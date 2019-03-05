<template>
  <div class="membro-info">
    <img id="avatar" :src="membro.path_img">
    <span>{{ membro.nome }}</span>
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
#avatar {
  height: 15%;
  width: 15%;
  clip-path: polygon(25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  margin: 0;
}
</style>
