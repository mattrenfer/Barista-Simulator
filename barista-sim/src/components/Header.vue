<template>
  <div class="header">
    <h1>Barista Simulator</h1>
    <h3>Level: {{ currentLevel }}</h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
    currentLevel: Number
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
