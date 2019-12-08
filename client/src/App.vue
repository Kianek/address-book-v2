<template>
  <div id="app">
    <Navbar />
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default {
  components: {
    Footer,
    Navbar
  }
};
</script>

<style lang="scss">
// Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}
#app {
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
</style>
