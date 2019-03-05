<template>
  <section class="intro">
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

<style scoped>
.intro {
  padding: 2em 1em;
  display: flex;
  justify-content: center;
  text-align: right;
}

.intro-content {
  margin-right: 25px;
  max-width: 600px;
}

.logo-content {
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.title {
  display: block;
  font-size: 6vw;
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
  font-size: 1.5em;
  float: right;
}

.logo {
  display: block;
  max-width: 250px;
  height: auto;
}

@media screen and (max-width: 750px) {
  .intro {
    align-items: center;
  }

  .title {
    font-size: 8vw;
  }

  .intro-content {
    margin-right: 0;
  }

  .logo {
    max-width: 170px;
  }
}

@media screen and (max-height: 568px) {
  .intro {
    align-items: center;
  }

  .title {
    font-size: 4vw;
  }

  .intro-content {
    margin-right: 0;
  }

  .logo {
    max-width: 170px;
  }

  .subtitle {
    font-size: 1em;
  }
}

@media screen and (min-height: 750px) and (min-width: 750px) {
  .intro {
    align-items: center;
  }

  .intro-content {
    max-width: 800px;
  }

  .title {
    font-size: 7vh;
  }

  .intro-content {
    margin-right: 0;
  }
}
</style>
