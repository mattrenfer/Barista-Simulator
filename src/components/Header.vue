<template>
  <div class="header">
    <div class="the-title"><router-link to="/">Barista Simulator</router-link></div>
    <div class="tips">Tips: {{ currentTips }}</div>
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
    currentTips() {
      return this.$store.state.currentTips;
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
.level, .tips {
  vertical-align: middle !important;
  font-size: 1.3em !important;
}

.tips {
  color: rgb(1, 172, 1) !important;
}
</style>
