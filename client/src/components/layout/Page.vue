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
  height: 100%;
  justify-content: center;
  margin: auto;
}
</style>