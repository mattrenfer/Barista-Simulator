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
      <div v-for="drink in drinks" :key="drink.id" class="verticalButtons">
        <button
          @click="setSelectedCoffee(drink.name, drink.reqLevel)"
          :class="{ locked: drink.reqLevel > currentLevel }"
        >
          {{ drink.name }}
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
import { mapState, mapActions } from 'vuex';

export default {
  name: "Brew",
  components: {
    Pour,
    BrewCarafe,
  },
  data() {
    return {
      currentLevel: this.$store.state.currentLevel,
      selectedCoffee: "",
      brewCoffee: false, // pagination end
      msg: ""
    };
  },

  async created(){
    await this.loadDrinks();
  },

  methods: {
    ...mapActions([ 'getDrinksAction' ]),
    async loadDrinks() {
      await this.getDrinksAction();
    },
    setSelectedCoffee(name, reqLevel) {
      if ( this.cups  > 0) {
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
    ...mapState([ 'drinks' ]),
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
