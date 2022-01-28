<template>
  <div class="brew">
    <h1 class="viewTitle">Brew</h1>
    <div v-show="!brewCoffee">
      <div class="descriptiveText">
        <p v-if="!skillLock">What kind of coffee shall we make?</p>
        <p v-else>
          You haven't the skillz to make a {{ selectedCoffee }} yet!<br />
          Learn how to brew better, bro.
        </p>
      </div>
      <div v-for="coffee in coffees" :key="coffee.id" class="verticalButtons">
        <button
          @click="setSelectedCoffee(coffee.name, coffee.reqLevel)"
          :class="{ locked: coffee.reqLevel > level }"
        >
          {{ coffee.name }}
        </button>
      </div>
    </div>

    <div v-if="brewCoffee">
      <BrewTimers :selectedCoffee="selectedCoffee" @resetIt="brewCoffee = $event" />
    </div>
  </div>
</template>

<script>
import BrewTimers from "@/components/BrewTimers.vue";

const coffeeData = [
  {
    id: 1,
    name: "Regular",
    reqLevel: 1, // check against the current level
  },
  {
    id: 2,
    name: "Mocha",
    reqLevel: 2, // check against the current level
  },
  {
    id: 3,
    name: "Espresso",
    reqLevel: 5, // check against the current level
  },
  {
    id: 4,
    name: "Latte",
    reqLevel: 10, // check against the current level
  },
];

export default {
  name: "Brew",
  components: {
    BrewTimers,
  },
  data() {
    return {
      coffees: coffeeData,
      selectedCoffee: "",
      skillLock: false, // if set to true, will not continue on coffee selection and display dialogue instead
      brewCoffee: false, // pagination end
    };
  },
  methods: {
    setSelectedCoffee(name, reqLevel) {
      this.selectedCoffee = name;
      if (reqLevel > this.currentLevel) {
        // if the required level of the selected coffee is greater than the current level
        this.skillLock = true;
        this.brewCoffee = false; // don't advance & display message
      } else {
        this.skillLock = false;
        this.brewCoffee = true; // otherwise, advance
      }
    },
  },
  computed: {
    level() {
      return this.$store.state.currentLevel;
    },
  },
  watch: {
    currentLevel(newValue) {
      this.$emit("levelUp", newValue); // if the currentLevel changes, send that new value up to the parent component (App.vue) to send on down to Header.vue
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
