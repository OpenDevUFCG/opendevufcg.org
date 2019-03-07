<template>
  <div class="item-contribuicao">
    <div class="item-image">
      
    </div>
    <div class="item">
      <div class="item-header">
        <p>{{ item.titulo }}</p>
      </div>
      <div class="item-body">
        <p>
          {{ item.descricao }}
        </p>
      </div>
      <div class="item-footer">
        <a :href="item.link" target="_blank" class="link">Acessar</a>
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
  }
}
</script>

<style scoped>
.item-contribuicao {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  background-color: #b1d9ee;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 4fr;
}

.item-contribuicao:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
}

.item-image {
  padding: 10px;
  background-color: #1e6995;
  min-height: 15vh;
}

.item-header {
  padding: 10px;
  font-size: 27px;
  font-weight: bold;
  color: #1e6995;
}

.item-body {
  padding: 15px;
  min-height: 20vh;
  font-size: 20px;
  color: #387ca5;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.link {
  color: #e95425;
  text-decoration: none;
}

.item-footer {
  padding: 10px;
  font-size: 20px;
}

@media screen and (max-width: 1000px) {
  .item-contribuicao {
    grid-template-columns: 1fr;
  }
}
</style>
