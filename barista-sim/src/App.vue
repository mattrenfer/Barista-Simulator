<template>
  <div id="app">
    <Main />
    <Brew />
  </div>
</template>

<script>
import Main from '@/components/Main.vue';
import Brew from '@/components/Brew.vue';

export default {
  name: 'App',
  components: {
    Main,
    Brew
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>