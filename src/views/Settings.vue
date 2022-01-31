<template>
  <transition name="fadeIn" appear>
    <div class="settings">
      <h2>Settings</h2>
      <br /><br />
      <h3>Version {{ versionNumber }}</h3><br />
    </div>
  </transition>
</template>

<script>

import { version } from '../../package.json';

export default {
  name: "Settings",
  data() {
      return {
          versionNumber: version,
      }
  },
};
</script>

<style scoped>

</style>
