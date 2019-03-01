<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from '@/pages/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
}
</script>

<style lang="scss">
body {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

* {
    box-sizing: border-box; 
}
</style>
