<template>
  <transition name="fadeIn" appear>
    <div class="settings">
      <h2>Settings</h2>
      <br /><br />
      <h3>Version {{ versionNumber }}</h3><br /><br />

      <button @click="resetProgress">Reset Progress</button>
    </div>
  </transition>
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

</style>
