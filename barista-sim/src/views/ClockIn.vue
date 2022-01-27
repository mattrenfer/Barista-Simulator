<template>
  <div class="clock-in">
    <div class="descriptiveText" v-show="!showCustomers">
      <button @click="customerStart(), customerRandom()">Clock In</button>
    </div>
    <div class="descriptiveText" v-if="showCustomers">
    <p>Clocked in! A customer approaches...</p><br />
           <v-icon>mdi-account</v-icon><p><strong>{{ randomCustomer.name }}</strong></p>
           <p>&quot;{{ randomCustomer.order }}.&quot;</p><br />

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
    order: "Hello, I'd like a coffee, please", 
  },
  {
    id: 2,
    name: "Jill Grind",
    order: "I'll take a regular, thanks", 
  },
  {
    id: 3,
    name: "Jack Venti",
    order: "Large cup of joe for me", 
  },
  {
    id: 4,
    name: "Antonio Espresso",
    order: "Surprise me", 
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
      showCustomers: false,
      customers: customerData,
      randomCustomer: ''
    };
  },
  methods: {
    customerStart() {
      this.showCustomers = true;
    },
    customerRandom(){
      let num = random(0, customerData.length);   // makes the random min max equal 0 through the length of an array
      console.log(num);
      this.randomCustomer = customerData[num];    // find a random customer and interpolate their name and number
    },
  },
};
</script>

<style lang="scss" scoped></style>
