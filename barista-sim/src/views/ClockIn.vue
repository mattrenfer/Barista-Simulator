<template>
  <div class="clock-in">
    <h1 class="viewTitle">Clock In</h1>
    <div class="descriptiveText" v-show="!this.$store.state.clockedIn">
      <button @click="clockedIn(), customerRandom()">Clock In</button>
    </div>
    <div class="descriptiveText" v-if="this.$store.state.clockedIn">
    <p>Clocked in! A customer approaches...</p><br />
           <v-icon>mdi-account</v-icon><p>{{ currentCustomer.name }}</p>
           <p>&quot;{{ currentCustomer.order }}&quot;</p><br />
    <div class="selection">
      <button @click="serveDrink()">Serve Drink</button>
      <button @click="customerRandom()">Refuse</button>
    </div>
    </div>
  </div>
</template>

<script>

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);    // creates a number between a min & max value || import this as a constant later

// import the below customer data later
const customerData = [
  {
    id: 1,
    name: "Jo Mugsy",
    order: "Hello, I'd like a coffee, please.", 
  },
  {
    id: 2,
    name: "Jill Grind",
    order: "I'll take a regular, thanks.", 
  },
  {
    id: 3,
    name: "Jack Venti",
    order: "Large cup of joe for me.", 
  },
  {
    id: 4,
    name: "Antonio Espresso",
    order: "Surprise me.", 
  },
  {
    id: 5,
    name: "Billy Bean",
    order: "What's good here?", 
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
    clockedIn () {
      this.$store.commit("clockedIn");
      console.log(this.$store.state.clockedIn);
    },
    customerRandom(){
      let num = random(0, customerData.length);   // makes the random min max equal 0 through the length of an array
      console.log(num);
      this.$store.commit("currentCustomer", customerData[num]); // find a random customer, store in state, and interpolate their name and number
    },
    serveDrink(){
      //console.log(this.$store.state.currentDrink);
    },
  },
};
</script>

<style lang="scss" scoped>


.v-icon.v-icon {
  font-size: 100px !important;
}

</style>
