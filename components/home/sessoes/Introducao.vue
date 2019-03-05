<template>
  <section class="intro">
    <div class="intro-content">
      <div class="logo-content">
        <img src="~/static/opendev_icon.png" class="logo" alt="Logo do OpenDev">
        <img src="~/assets/opendevufcg_typo.svg" class="name">
      </div>
      <span class="subtitle">
         Desenvolvendo <span class="spin"></span> a comunidade.
      </span>
      <div class="links">
        <a
          href="https://github.com/OpenDevUFCG/"
          target="_blank"
          class="button--blue"
        >Github</a>
        <a
          href="https://gitter.im/OpenDevUFCG/community"
          target="_blank"
          class="button--grey"
        >Gitter</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introducao'
}
</script>

<style lang="scss" scoped>
.intro {
  min-height: 100vh;
  display: flex;
  margin-top: 90px;
  justify-content: center;
  @media only screen and (max-width: 728px) {
    margin-top: 0px;
  }
}

.links {
  align-self: center;
  margin-left: 90px;
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
  margin-left: 90px;
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
.spin:after {
  content: '';
  animation: spin 3s linear infinite alternate;
}
.spin {
  color: #49c3ed;
  @keyframes spin {
    0% {
      content: 'com';
    }
    50% {
      color: transparent;
    }
    100% {
      content: 'para';
    }
  }
}
</style>
