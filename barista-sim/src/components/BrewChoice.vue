<template>
<div class="brew">

  <div v-show="!showBrewTypes">
    <div  class="descriptiveText">
      <p v-if="makeCoffee">Wanna make some coffee?</p>
      <p v-else>Nah? That's cool, I guess...</p>
    </div>
    <div v-show="!showBrewTypes" class="selection">
      <button class="uiButtons" @click="showBrewTypes = true">Yes</button>
      <button class="uiButtons" @click="makeCoffee = !makeCoffee">No</button>
    </div>
  </div>

  <div v-show="showBrewTypes && !brewCoffee">
    <div class="descriptiveText">
      <p v-if="!skillLock">What kind of coffee shall we make?</p>
      <p v-else>You haven't the skillz to make a {{ selectedCoffee }} yet!<br /> Learn how to brew better, bro.</p>
    </div>
    <div v-for="coffee in coffees" :key="coffee.id" class="verticalButtons">
      <button @click="setSelectedCoffee(coffee.name, coffee.reqLevel)" :class="{locked: coffee.reqLevel > currentLevel}">{{ coffee.name }}</button>
    </div>
  </div>

  <div v-show="brewCoffee && !drinkCoffee">
    <div class="descriptiveText">
      <p>Brewing . . .</p>
      <img src="@/assets/imgs/coffee-pot.png" width='50%' height='50%' />
    </div>
    <div class="selection">
      <button class="uiButtons" @click="drinkCoffee = true">Pour coffee!</button>
    </div>
  </div>

  <div v-show="drinkCoffee">
    <div class="descriptiveText">
      <p v-if="drankCoffee">Congratulations! You are a level 2 Barista!</p>
      <p v-else>Brewing . . .</p>
      <img src="@/assets/imgs/coffee-cup.png" width='25%' height='25%' />
    </div>
    <div class="selection">
      <button class="uiButtons" @click="drankCoffee = true">Drink coffee!</button>
    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'BrewChoice',
  data() {
    return {
      currentLevel: 1, // hardcoded current level until global state is available
      makeCoffee: true, // pagination
      showBrewTypes: false,
      brewCoffee: false,
      drinkCoffee: false,
      drankCoffee: false, // pagination end
      skillLock: false,  // if set to true, will not continue on selection and display dialogue instead
      selectedCoffee: '',
      coffees: [
        {
          id: 1,
          name: "Regular",
          reqLevel: 1, // check against the current level
        },
        {
          id: 2,
          name: "Espresso",
          reqLevel: 2,  // check against the current level
        },
        {
          id: 3,
          name: "Mocha",
          reqLevel: 5, // check against the current level
        },
        {
          id: 4,
          name: "Latte",
          reqLevel: 10, // check against the current level
        },
      ]
    }
  },
  methods: {
    setSelectedCoffee (name, reqLevel) {
      this.selectedCoffee = name;
      if (reqLevel > this.currentLevel) {
        this.skillLock = true;
        this.brewCoffee = false;
      }else{
        this.skillLock = false;
        this.brewCoffee = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
