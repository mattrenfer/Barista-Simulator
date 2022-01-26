<template>
  <div class="brew">
    <div v-show="!showBrewTypes">
      <div class="descriptiveText">
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
        <p v-else>
          You haven't the skillz to make a {{ selectedCoffee }} yet!<br />
          Learn how to brew better, bro.
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
      <BrewTimers
        @levelUp="currentLevel = $event"
        @resetIt="brewCoffee = $event"
        :currentLevel="currentLevel"
      />
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
    name: "Espresso",
    reqLevel: 2, // check against the current level
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
];

export default {
  name: "Brew",
  components: {
    BrewTimers,
  },
  data() {
    return {
      currentLevel: 1, // hardcoded current level until global state is available
      coffees: coffeeData,
      selectedCoffee: "",
      skillLock: false, // if set to true, will not continue on coffee selection and display dialogue instead
      makeCoffee: true, // pagination
      showBrewTypes: false,
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

  watch: {
    currentLevel(newValue) {
      this.$emit("levelUp", newValue); // if the currentLevel changes, send that new value up to the parent component (App.vue) to send on down to Header.vue
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
