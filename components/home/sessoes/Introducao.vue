<template>
  <section class="intro">
    <div class="intro-content">
      <div class="logo-content">
        <img src="~/static/opendev_icon.png" class="logo" alt="Logo do OpenDev">
        <img src="~/assets/opendevufcg_typo.svg" class="name">
      </div>
      <span class="subtitle">Desenvolvendo para 
        <vue-typer
          :text="listChangeText"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="erasing"
          :pre-type-delay="70"
          :type-delay="60"
          :erase-delay="60"
          erase-style="backspace"
          caret-animation="phase"
        />
      </span>
    </div>
  </section>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  name: 'Introducao',
  components: {
    VueTyper
  },
  data() {
    return {
      listChangeText: ['a comunidade', 'a UFCG', 'os estudantes', 'você']
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  min-height: 80vh;
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 728px) {
    margin-top: 0px;
  }
}

.links {
  align-self: center;
  margin-top: 40px;
  @media only screen and (max-width: 728px) {
    margin-top: 20px;
    margin-left: 0px;
  }
}

.intro-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo-content {
  display: flex;
  flex-wrap: wrap;
  .logo {
    max-height: 300px;
    max-width: 300px;
    @media only screen and (max-width: 728px) {
      width: 300px;
      position: absolute;
    }
  }
  .name {
    height: 400px;
    max-width: 600px;
    @media only screen and (max-width: 728px) {
      margin-top: 250px;
      width: 300px;
      height: 300px;
    }
  }
  @media only screen and (max-width: 728px) {
    flex-direction: column;
    align-items: center;
  }
}
.subtitle {
  text-align: center;
  width: 800px;
  color: #2c677b;
  font-size: 35px;
  letter-spacing: 0.2rem;
  @media only screen and (max-width: 728px) {
    font-size: 15px;
    position: block;
    margin-top: -50px;
    margin-left: 0px;
    width: 100%;
  }
}
</style>
<style>
.vue-typer .custom.char {
  color: #49c3ed;
}
.vue-typer .custom.caret {
  background-color: #2c677b;
  width: 2px;
}
</style>
