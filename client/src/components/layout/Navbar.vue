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
      <div id="dropdown-menu">
        <button
          @click="menuOpen = !menuOpen"
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
  }
};
</script>

<style scoped lang="scss">
nav {
  background-color: lightcoral;
  display: flex;
  align-items: center;
  padding: 0 10%;
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

@media screen and (min-width: 600px) {
}
</style>