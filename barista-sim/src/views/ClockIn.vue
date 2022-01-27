<template>
  <div class="clock-in">
    <h1 class="viewTitle">Clock In</h1>
    <div class="descriptiveText" v-show="!this.$store.state.clockedIn">
      <button @click="clockedIn(), customerRandom()">Clock In</button>
    </div>
    <div class="descriptiveText" v-if="this.$store.state.clockedIn">
      <p>Clocked in! A customer approaches...</p>
      <br />
      <transition-group name="fadeIn">
        <v-icon :key="1">mdi-account</v-icon>
        <p :key="2">{{ currentCustomer.name }}</p>
        <p :key="3">&quot;{{ currentCustomer.order }}&quot;</p>
      </transition-group>
      <br /> 
      <br />
      <div class="selection">
        <button @click="serveDrink()">
          Serve Drink&nbsp;<v-icon class="icon-small">mdi-coffee</v-icon>
        </button>
        <button @click="customerRandom()">
          Refuse&nbsp;<v-icon class="icon-small">mdi-hand-front-left </v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
const random = (min, max) => Math.floor(Math.random() * (max - min) + min); // creates a number between a min & max value || import this as a constant later

// import the below customer data later
const customerData = [
  {
    id: 1,
    name: "Jo Mugsy",
    order: "Hello, I'd like a coffee, please.",
    drink: "Regular",
  },
  {
    id: 2,
    name: "Jill Grind",
    order: "I'll take a regular, thanks.",
    drink: "Regular",    
  },
  {
    id: 3,
    name: "Jack Venti",
    order: "Large cup of joe for me.",
    drink: "Regular",
  },
  {
    id: 4,
    name: "Antonio Espresso",
    order: "Surprise me.",
    drink: "Regular",
  },
  {
    id: 5,
    name: "Billy Bean",
    order: "What's good here?",
    drink: "Regular",
  },
  {
    id: 5,
    name: "Negative Nancy",
    order: "I'd like a Latte, please",
    drink: "Latte",
  },
];

export default {
  name: "ClockIn",
  data() {
    return {
      customers: customerData,
    };
  },

  computed: {
    currentCustomer() {
      return this.$store.state.currentCustomer;
    },
  },

  methods: {
    clockedIn() {
      this.$store.commit("clockedIn");
      console.log(this.$store.state.clockedIn);
    },
    customerRandom() {
      let num = random(0, customerData.length); // makes the random min max equal 0 through the length of an array
      console.log(num);
      this.$store.commit("currentCustomer", customerData[num]); // find a random customer, store in state, and interpolate their name and number
    },
    serveDrink() {
      console.log(this.$store.state.currentDrink);
      if (this.$store.state.currentDrink === this.$store.state.currentCustomer.drink) {
        this.$store.commit("levelUp");
        console.log(this.$store.state.currentLevel);
        this.customerRandom();
      } else {
        console.log("nah");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-icon.v-icon {
  font-size: 100px !important;
}

.v-icon.v-icon.icon-small {
  font-size: 30px !important;
}

/* Animation Styles */

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 4.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
