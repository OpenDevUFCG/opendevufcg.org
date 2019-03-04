<template>
  <div>
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
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
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
  margin: 20px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sessao-titulo {
  font-size: 50px;
  color: #1e6995;
  margin-bottom: 20px;
  letter-spacing: 2px;

  @media only screen and (max-width: 728px) {
    font-size: 30px !important;
  }
}
.sessao-subtitulo {
  font-size: 20px;
  color: #80858a;
  text-align: center;
  width: 90%;
  @media only screen and (max-width: 728px) {
    font-size: 15px !important;
  }
}
</style>
