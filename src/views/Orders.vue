<template>
  <div class="orders">
    <h1 class="viewTitle">Orders</h1>
    <div class="descriptiveText" v-show="!this.$store.state.clockedIn">
      You have no orders. Clock in first!
    </div>
    <div class="descriptiveText" v-if="this.$store.state.clockedIn">
      <p>A customer approaches...</p>
      <br />
      <transition-group name="fadeIn" appear>
        <v-icon :key="1">mdi-account</v-icon>
        <p :key="2">{{ currentCustomer.name }}</p>
        <p :key="3">&quot;{{ currentCustomer.order }}&quot;</p>
      </transition-group>
      <br /> 
      <div class="descriptiveText" v-if="serveEmpty">
        &quot;You haven't made me a drink yet. Get brewin'!&quot;
      </div>
      <div class="descriptiveText" v-if="serveFail">
        &quot;That's not even a little bit close to what I ordered. Try again?&quot;
      </div>
       <div class="descriptiveText" v-if="servePass">
        &quot;YUM. Thanks for the drink!&quot;
      </div>
      <br /> 
      <br />
      <div class="selection">
        <button @click="serveDrink()">
          Serve Drink&nbsp;<v-icon class="icon-small">mdi-coffee</v-icon>
        </button>
        <button @click="customerNext()" v-if="showNextButton">
          NEXT!&nbsp;
        </button>
        <button @click="customerRandom()">
          Refuse&nbsp;<v-icon class="icon-small">mdi-hand-front-left </v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import { customerData } from "@/shared/data/customers.js";
import { random } from "@/shared/constants/random.js";


export default {
  name: "Orders",
  data() {
    return {
      customers: customerData,
      serveFail: false,
      servePass: false,
      serveEmpty: false,
      showNextButton: false,
    };
  },

  mounted () {
    if (!this.$store.state.currentCustomer) {
        this.customerRandom();
    }
  },

  computed: {
    currentCustomer() {
      return this.$store.state.currentCustomer;
    },
    currentDrink() {
      return this.$store.state.currentDrink;
    },
    clockedInDate() {
      return this.$store.state.clockedInDate;
    },
    clockedInTime() {
      return this.$store.state.clockedInTime;
    },
  },

  methods: {
    clockedIn() {
      this.$store.commit("clockedInDate", this.printDate());
      this.$store.commit("clockedInTime", this.printTime());
      this.$store.commit("clockedIn");
    },
    customerRandom() {
      this.serveFail = "";
      this.servePass = "";
      this.serveEmpty = "";
      let num = random(0, customerData.length); // makes the random min max equal 0 through the length of an array
      this.$store.commit("currentCustomer", customerData[num]); // find a random customer, store in state, and interpolate their name and number
    },
    serveDrink() {
      console.log(this.$store.state.currentDrink);
      if (this.currentCustomer.drink === this.currentDrink || this.currentCustomer.drink.includes(this.currentDrink)) {
        this.$store.commit("levelUp");
        this.$store.commit("getTip", this.$store.state.currentCustomer.tip);         // tip the Barista!
        this.$store.commit("currentDrink", '');    // reset the currentDrink
        this.servePass = true;
        this.serveEmpty = "";
        this.showNextButton = "true";
      } else if (this.currentDrink === "") {
        this.serveEmpty = true;
      } else {
        console.log("nah");
        this.serveFail = true;
      }
    },
    customerNext(){
      this.customerRandom();
      this.showNextButton = false;
    },
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
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
