<template>
  <div id="page">
    <slot></slot>
  </div>
</template>


<style scoped lang="scss">
#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;

  h1 {
    text-align: center;
  }
}
</style>