<template>
  <transition name="fadeIn" appear>
    <div id="app">
      <Header :currentLevel="currentLevel" />
      <BrewChoice v-on:levelUp="currentLevel = $event" />
    </div>
  </transition>
</template>

<script>
import Header from "@/components/Header.vue";
import BrewChoice from "@/components/BrewChoice.vue";

export default {
  name: "App",
  components: {
    Header,
    BrewChoice,
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
</style>
