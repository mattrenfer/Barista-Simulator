<template>
  <div class="brew">
    <h1 class="viewTitle">Brew</h1>
    <h2>
      Cups available: {{ cups }}<br />
      <span v-show="this.currentDrink">Current Drink: {{ currentDrink }}</span>
    </h2>

    <div id="main">
      <BrewCarafe />
    <div id="coffeeSelection" v-show="!brewCoffee">
      <div class="descriptiveText">
        <p>What kind of coffee shall we pour?</p>
        <p>
          {{ msg }}
        </p>
      </div>
      <div v-for="coffee in coffees" :key="coffee.id" class="verticalButtons">
        <button
          @click="setSelectedCoffee(coffee.name, coffee.reqLevel)"
          :class="{ locked: coffee.reqLevel > currentLevel }"
        >
          {{ coffee.name }}
        </button>
      </div>
    </div>

    <div v-if="brewCoffee">

      <Pour :selectedCoffee="selectedCoffee" @resetIt="brewCoffee = $event" />
    </div>
    </div>
  </div>
</template>

<script>
import Pour from "@/components/Pour.vue";
import BrewCarafe from "@/components/BrewCarafe.vue";
import { coffeeData } from "@/shared/data/drinks.js";

export default {
  name: "Brew",
  components: {
    Pour,
    BrewCarafe,
  },
  data() {
    return {
      currentLevel: this.$store.state.currentLevel,
      coffees: coffeeData,
      selectedCoffee: "",
      brewCoffee: false, // pagination end
      msg: ""
    };
  },
  methods: {
    setSelectedCoffee(name, reqLevel) {
      if ( this.cups  > 1) {
        this.selectedCoffee = name;
        if (reqLevel > this.$store.state.currentLevel) {
          // if the required level of the selected coffee is greater than the current level
          this.msg = `You haven't the skillz to make a ${this.selectedCoffee} yet! Learn how to brew better, bro.`
          this.brewCoffee = false; // don't advance & display message
        } else {
          this.skillLock = false;
          this.brewCoffee = true; // otherwise, advance
        }
      } else {
        this.msg = "You are out of cups in your carafe. Brew some more!"
       }
      },
    },
  computed: {
    level() {
      return this.$store.state.currentLevel;
    },
    cups(){
      return this.$store.state.currentCups;
    },
    currentDrink(){
      return this.$store.state.currentDrink;
    }
  },
  watch: {
    currentLevel(newValue) {
      this.$emit("levelUp", newValue); // if the currentLevel changes, send that new value up to the parent component (App.vue) to send on down to Header.vue
    },
  },
};
</script>

<style scoped>

#main { 
  margin-top: 75px;
  margin-bottom: 75px;
}

#coffeeSelection {
  margin-top: 50px;
  margin-bottom: 50px;
}


</style>
