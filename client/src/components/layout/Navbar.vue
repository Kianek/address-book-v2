<template>
  <nav>
    <router-link
      class="branding"
      :to="isAuthenticated ? '/dashboard' : '/'"
    >Address Book</router-link>
    <div
      id="dropdown"
      v-if="isAuthenticated"
    >
      <button
        @click.prevent="toggleMenu"
        class="menu-btn"
      >
        <i class="fas fa-user-circle" />
        <i
          v-if="menuOpen"
          class="fas fa-caret-up"
        />
        <i
          v-else
          class="fas fa-caret-down"
        />
      </button>
    </div>
    <div
      v-if="menuOpen"
      id="dropdown-content"
    >
      <router-link
        class="link"
        to="/settings"
      >Settings</router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      menuOpen: false
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu(e) {
      if (!this.$el.contains(e.target)) {
        this.menuOpen = false;
      }
    }
  },
  created() {
    window.addEventListener("click", this.closeMenu);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeMenu);
  }
};
</script>

<style scoped lang="scss">
nav {
  background-color: lightcoral;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
}

.branding {
  color: white;
  font-size: 1.7rem;
  margin-right: auto;
  text-decoration: none;
}

.link {
  color: white;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: #80f0f0;
  }
}

.menu-btn {
  background: lightcoral;
  border: none;
  color: white;
  font-size: 1.2rem;

  &:hover {
    color: #80f0f0;
    cursor: pointer;
  }
}

nav > #dropdown-content {
  background-color: lightcoral;
  position: absolute;
  min-width: 100vw;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 100;
}

@media screen and (min-width: 600px) {
}
</style>