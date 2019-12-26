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
        @click.native="menuOpen = false"
        class="link"
        to="/settings"
      >Settings</router-link>
      <router-link
        @click.native.prevent="signOut"
        class="link"
        to="/"
      >Sign Out</router-link>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

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
    ...mapActions(["logout"]),
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu(e) {
      if (!this.$el.contains(e.target)) {
        this.menuOpen = false;
      }
    },
    signOut() {
      this.logout()
        .then(() => {
          this.menuOpen = false;
        })
        .catch(err => {});
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
@import "@/_colors.scss";

nav {
  background-color: $coral;
  display: flex;
  align-items: center;
  padding: 0 10%;
  position: relative;
}

.branding {
  color: $white;
  font-size: 1.7rem;
  margin-right: auto;
  text-decoration: none;
}

.link {
  color: $white;
  font-size: 1.2rem;
  padding: 0.25em 0.5em;
  text-align: center;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: $light-blue;
  }
}

.menu-btn {
  background: $coral;
  border: none;
  color: $white;
  font-size: 1.2rem;
  transition: 0.2s;

  &:hover {
    color: $light-blue;
    cursor: pointer;
  }
}

@media screen and (max-width: 599px) {
  nav > #dropdown-content {
    display: flex;
    flex-direction: column;
    background-color: $coral;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 100;
  }
}

@media screen and (min-width: 600px) {
  nav > #dropdown-content {
    display: flex;
    flex-direction: column;
    background-color: $coral;
    position: absolute;
    width: 250px;
    right: 0;
    top: 100%;
    z-index: 100;
  }
}
</style>