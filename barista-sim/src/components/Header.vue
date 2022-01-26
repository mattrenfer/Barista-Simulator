<template>
  <div class="header">
    <h3 class="title">Barista Simulator</h3>
    <h3 class="level">Level: {{ currentLevel }}</h3>
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

.header { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start;}

.title { align-self: flex-start; }
.level { align-self: flex-end; }


</style>
