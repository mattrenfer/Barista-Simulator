<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/brew">Brew</router-link> |
      <router-link to="/clock-in">Clock In</router-link>
    </div>
    
    <transition name="fadeIn" appear>
      <Header :currentLevel="currentLevel" />
    </transition>
       <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      currentLevel: 1,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/index.scss";

.fadeIn-enter-active,
.pot-leave-active {
  transition: opacity 2.5s;
}
.fadeIn-enter, .pot-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Router STyles */

#app {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #f2f2f2;
    }
  }
}
</style>
