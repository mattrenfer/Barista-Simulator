<template>
  <div id="app">
    <Header />
    <BrewChoice />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import BrewChoice from '@/components/BrewChoice.vue';

export default {
  name: 'App',
  components: {
    Header,
    BrewChoice
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>