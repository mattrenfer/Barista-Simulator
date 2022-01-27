<template>
  <div class="header">
    <div class="the-title">Barista Simulator</div>
    <div class="level">Level: {{ currentLevel }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    currentLevel: Number,
  },
};
</script>



<style scoped>

.header { 
  display: flex; 
  flex-flow: row;
  justify-content: space-between;
  margin-top: .4em;
  }

.the-title, .level {
  vertical-align: middle !important;
  font-size: 1.3em !important;
} 


</style>
