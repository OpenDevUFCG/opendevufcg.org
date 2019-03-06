<template>
  <div id="app">
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scrollbar-color: #1e6995 #eee;
  scrollbar-width: thin;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@font-face {
  font-family: Ikaros-Regular;
  src: url(~assets/fonts/Ikaros-Regular.otf);
}

@font-face {
  font-family: Jaapokki-Regular;
  src: url(~assets/fonts/Jaapokki-Regular.otf);
}

@font-face {
  font-family: Jaapokki-Regular;
  src: url(~assets/fonts/AvertaDemoPE-ExtraboldItalic.otf);
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #387ca5;
  color: #387ca5;
  text-decoration: none;
  padding: 10px 30px;
  transition: 0.2s;
}

.button--green:hover {
  color: #fff;
  background-color: #387ca5;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  transition: 0.2s;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.sessao-head {
  align-self: center;
  margin: 20px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sessao-titulo {
  font-size: 3rem;
  color: #1e6995;
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-weight: normal;
}
.sessao-subtitulo {
  font-size: 1.3rem;
  color: #4a5055;
  text-align: center;
  line-height: 25px;
  width: 90%;
}

html::-webkit-scrollbar {
  width: 0.4em;
  height: 0.4em;
}

html::-webkit-scrollbar-track-piece {
  background: #eee;
}

html::-webkit-scrollbar-thumb {
  background: #1e6995;
}
</style>
