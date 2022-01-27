<template>
  <div class="header">
    <div class="the-title">Barista Simulator</div>
    <div class="level">Level: {{ level }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    level() {
      return this.$store.state.currentLevel;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 0.4em;
}

.the-title,
.level {
  vertical-align: middle !important;
  font-size: 1.3em !important;
}
</style>
