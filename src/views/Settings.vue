<template>
<v-app>
  <transition name="fadeIn" appear>
    <div class="settings">
      <h2><router-link to="/">Barista Simulator</router-link><br /></h2>
      <h2>Settings</h2>
      <br /><br />
      <h3>Version {{ versionNumber }}</h3><br /><br />

      <button @click="resetProgress">Reset Progress</button><br /><br />
      <router-link to="/"><button>Back Home</button></router-link>
    </div>
  </transition>
</v-app>
</template>

<script>

import { version } from '../../package.json';

export default {
  name: "Settings",
  methods: {
    resetProgress() {
      localStorage.clear();
      location.reload();
    }
  },
  data() {
      return {
          versionNumber: version,
      }
  },
};
</script>

<style scoped>

#app {
  background-image: url(../assets/imgs/beans-after-1.png) !important;
  background-size: auto;
  background-repeat: repeat-y;
  background-position-x: right;
}

</style>
