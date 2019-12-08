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
  margin-top: 2rem;
  width: 80%;
}

@media screen and (min-width: 600px) {
  #page {
    width: 60%;
  }
}
</style>