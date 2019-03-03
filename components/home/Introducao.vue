<template>
  <section class="intro section--allscreen">
    <div class="intro-content">
      <div class="logo-content">
        <img src="~/static/opendev_icon.png" class="logo" alt="Logo do OpenDev">
        <h1 class="title">OpenDev UFCG</h1>
      </div>
      <h2 class="subtitle">
        Impulsionando projetos e desenvolvedores open source de CC@UFCG.
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Introducao'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

.intro {
  font-family: 'Source Sans Pro', sans-serif;
  padding: 2em 1em;
  display: flex;
  justify-content: center;
  text-align: right;
}

.intro-content {
  padding: 15px;
  max-width: 500px;
}

.logo-content {
  max-width: vmin;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.title {
  display: block;
  font-size: 5vw;
}

.subtitle:before {
  content: '';
  display: block;
  width: vmin;
  border: 2px solid #e95425;
  margin: 1em auto;
}

.subtitle {
  font-weight: 300;
  max-width: 450px;
  font-size: 20px;
  word-spacing: 5px;
  float: right;
}

.logo {
  display: block;
  max-width: 200px;
  height: auto;
}

@media screen and (max-width: 750px) {
  .title {
    font-size: 8vw;
  }

  .intro-content {
    margin-right: 0;
  }
}
</style>
