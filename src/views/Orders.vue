<template>
  <div class="orders">
    <h1 class="viewTitle">Orders</h1>
    <div class="descriptiveText" v-show="!this.$store.state.clockedIn">
      You have no orders. Clock in first!
    </div>
    <div class="descriptiveText" v-if="this.$store.state.clockedIn">
      <transition-group name="fadeIn" appear v-if="!dayDone">
        <v-icon :key="1">mdi-account</v-icon>
        <p :key="2">{{ currentCustomer.name }}</p>
        <p :key="3">&quot;<em>{{ currentCustomer.order }}</em>&quot;</p>
      </transition-group>
      <div class="descriptiveText">
      <br />
      <p>{{ msg }}</p>
      <p>{{ serveMsg }}</p>
      </div>
      <br /> 
      <br />
      <div class="selection" v-show="!dayDone">
        <button @click="serveDrink()" v-if="!this.currentCustomer.served">
          Serve {{ currentDrink }}&nbsp;<v-icon class="icon-small">mdi-coffee</v-icon>
        </button>
        <button @click="customerNext()" v-if="this.currentCustomer.served">
          NEXT!&nbsp;
        </button>
        <button @click="refuseCustomer()" v-if="!this.currentCustomer.served">
          Refuse&nbsp;<v-icon class="icon-small">mdi-hand-front-left </v-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import { random } from "@/shared/constants";
import { mapState, mapActions } from 'vuex';


export default {
  name: "Orders",
  data() {
    return {
      serveFail: false,
      servePass: false,
      serveEmpty: false,
      dayDone: false,
      msg: '',
      serveMsg: ''
    };
  },

  computed: {
    ...mapState( { customers: 'customers' }),
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
    level() {
      return this.$store.state.currentLevel;
    },
  },

  async created(){
    
    if (!this.$store.state.currentCustomer) {
        await this.loadCustomers(); // only load the customers from the json if there's no currentCustomer (initial load) so we can manipulate the customer vuex state
    }

    if (!this.$store.state.currentCustomer) {
          this.customerRandom();
      }
  },

  methods: {
    ...mapActions(['getCustomersAction']),
    async loadCustomers() {
      await this.getCustomersAction();
    },
    clockedIn() {
      this.$store.commit("clockedInDate", this.printDate());
      this.$store.commit("clockedInTime", this.printTime());
      this.$store.commit("clockedIn");
    },
    customerRandom() {
      this.serveMsg = "";
      let levelAppropCustomers = this.customers.filter(customer => customer.reqLevel <= this.level); // loop through customers, find those less than or equal to current level
      const checkCustomerServed = customer => customer.served === false;     // check if any unserved customers exist
      if (levelAppropCustomers.some(checkCustomerServed)) {
        let unServedCustomers = levelAppropCustomers.filter(customer => customer.served === false);
        let num = random(0, unServedCustomers.length); // makes the random min max equal 0 through the length of level appropriate customers
        this.$store.commit("currentCustomer", unServedCustomers[num]); // find a random customer, store in state
      } else {
        this.dayDone = true;
        this.msg = 'All customers served! Clock out and in to serve more!'
      }
    },
    serveDrink() {
      console.log(this.$store.state.currentDrink);
      if (this.currentCustomer.drink === this.currentDrink || this.currentDrink && this.currentCustomer.drink.includes(this.currentDrink)) {
        this.$store.commit("levelUp");
        this.$store.commit("getTip", this.$store.state.currentCustomer.tip);         // tip the Barista!
        this.$store.commit("currentDrink", '');    // reset the currentDrink
        this.$store.commit("serveCustomer"); // set current customer's served to true
        this.serveMsg = "YUM. Thanks for the drink!";
      } else if (this.currentDrink === "") {
        this.serveMsg = "You haven't made me a drink yet. Get brewin";
      } else {
        this.serveMsg = "That's not even a little bit close to what I ordered. Try again?";
      }
    },
    refuseCustomer() {
      this.$store.commit("serveCustomer");
      this.customerRandom();
    },     
    customerNext(){
      this.customerRandom();
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
