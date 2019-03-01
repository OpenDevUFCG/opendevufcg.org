<template>
  <section class="container">
    <div>
      <img src="~/static/opendev_icon.png" class="logo">
      <h1 class="title">
        OpenDevUFCG
      </h1>
      <h2 class="subtitle">
        Impulsionando projetos e desenvolvedores open source de CC@UFCG.
      </h2>
      <div class="links">
        <a
          href="https://github.com/OpenDevUFCG/"
          target="_blank"
          class="button--green"
        >Github</a>
        <a
          href="https://groups.google.com/forum/#!forum/opendevufcg"
          target="_blank"
          class="button--grey"
        >NewsLetter</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    // Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 34px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.logo {
  width: 400px;
  height: 400px;
}
</style>
