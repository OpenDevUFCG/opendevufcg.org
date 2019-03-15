<template>
  <div class="item-contribuicao" @click="goToUrl">
    <div class="item-image">
      <img :src="require('~/assets/' + item.img)">
    </div>
    <div class="item p-15">
      <div class="item-header">
        <p>{{ item.titulo }}</p>
      </div>
      <div class="item-body p-15">
        <p class="description">
          {{ item.descricao }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemContribuicao',
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    goToUrl() {
      const url = this.item.link
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.item-contribuicao {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  background-color: #b1d9ee;
  color: #1e6995;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr;
}

.item-contribuicao:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.item-image {
  background-color: #1e6995;
  display: flex;
}

img {
  height: auto;
  width: auto;
}

.item {
  position: relative;
}

.item-header {
  font-size: 1.8em;
  font-weight: bold;
}

.item-body {
  font-size: 1.3em;
}

.description {
  max-width: 65ch;
}

.p-15 {
  padding: 15px;
}

@media screen and (max-width: 1000px) {
  .item-header {
    font-size: 2em;
  }

  .item-contribuicao {
    grid-template-columns: 1fr;
  }

  .item-header {
    margin-top: 10px;
  }

  .item-image {
    height: 15vh;
  }
}

@media screen and (max-width: 450px) {
  .item-header {
    font-size: 1.5em;
  }

  .item-body {
    font-size: 1.2em;
  }
}
</style>
