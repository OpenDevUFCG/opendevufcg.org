<template>
    <section>
        <slot class="content"></slot>
    </section>
</template>

<style lang="scss" scoped>
section {
    width: 100%;
    padding: 0 7%;
    display: table;
    margin: 0;
    max-width: 100%;
    background-color: red;
    height: 100vh;
    font-weight: 500;
}
.content {
  display: table-cell;
}
</style>