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
      <p v-if="!skillLock">What kind of coffee shall we make?</p>
      <p v-else>You haven't the skillz to make a {{ selectedCoffee }} yet!<br /> Learn how to brew better, bro.</p>
    </div>

    <div v-for="coffee in coffees" :key="coffee.id" class="verticalButtons">
      <button @click="setSelectedCoffee(coffee.name, coffee.locked)" :class="{locked: coffee.locked}">{{ coffee.name }}</button>
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
      skillLock: false,
      selectedCoffee: '',
      coffees: [
        {
          id: 1,
          name: "Regular",
          locked: false,
        },
        {
          id: 2,
          name: "Espresso",
          locked: true,
        },
        {
          id: 3,
          name: "Mocha",
          locked: true,
        },
        {
          id: 4,
          name: "Latte",
          locked: true,
        },
      ]
    }
  },
  methods: {
    setSelectedCoffee (name, locked) {
      locked ? this.skillLock = true : this.skillLock = false;
      this.selectedCoffee = name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
