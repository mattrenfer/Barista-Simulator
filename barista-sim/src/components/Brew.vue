<template>
<div class="brew">

  <div v-show="!brewTypes">

    <div  class="descriptiveText">
      <p v-if="makeCoffee">Wanna make some coffee?</p>
      <p v-else>Nah? That's cool, I guess...</p>
    </div>

    <div v-show="!brewTypes" class="selection">
      <button class="uiButtons" @click="brewTypes = true">Yes</button>
      <button class="uiButtons" @click="makeCoffee = !makeCoffee">No</button>
    </div>

  </div>

  <div v-show="brewTypes">

    <div class="descriptiveText">
      <p>What kind of coffee shall we make?</p>
    </div>

    <div class="verticalButtons">
      <button><a href='#'>Regular</a></button>
      <button class="locked"><a href='#'>Espresso</a></button>
      <button class="locked"><a href='#'>Mocha</a></button>
      <button class="locked"><a href='#'>Latte</a></button>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Brew',
  data() {
    return {
      makeCoffee: true,
      brewTypes: false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
