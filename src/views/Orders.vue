<template>
  <v-app>
    <div class="text-center">
      <router-link to="/brew">
        <v-btn fab dark color="black"
          >Brew<br />
          <v-icon class="nav-arrow" dark> mdi-arrow-down-thick </v-icon>
        </v-btn>
      </router-link>
    </div>
    <div class="orders">
      <h1 class="viewTitle">Orders</h1>
      <div class="descriptiveText" v-show="!this.$store.state.clockedIn">
        You have no orders. Clock in first!
      </div>
      <div class="descriptiveText" v-if="this.$store.state.clockedIn">
      <!-- "Customer" component -->
        <transition-group name="fadeIn" appear v-if="!dayDone">
          <p :key="2">{{ currentCustomer.name }}</p>
          <p :key="3">
            &quot;<em>{{ currentCustomer.order }}</em
            >&quot;
          </p>
          <v-icon class="customer" :key="1">mdi-account</v-icon>
        </transition-group>
        <!-- End "Customer" component -->
        <v-card color="#37251b" height="100"></v-card>
        <div class="descriptiveText">
          <p>{{ msg }}</p>
          <p>{{ serveMsg }}</p>
        </div>
        <br />
        <br />
        <div class="selection" v-show="!dayDone">
          <button @click="serveDrink()" v-if="!this.currentCustomer.served">
            Serve {{ currentDrink }}&nbsp;<v-icon class="icon-small"
              >mdi-coffee</v-icon
            >
          </button>
          <button @click="customerNext()" v-if="this.currentCustomer.served">
            NEXT!&nbsp;
          </button>
          <button @click="refuseCustomer()" v-if="!this.currentCustomer.served">
            Refuse&nbsp;<v-icon class="icon-small">mdi-hand-front-left </v-icon>
          </button>
        </div>
      </div>

      <!-- "Screen" component -->

      <v-container class="mt-16">
        <v-row justify-content="center">
          <v-col>
            <v-sheet color="#2a2a2a" elevation="24" rounded="xl" height="375">
              <v-card color="basil">
                <v-tabs
                  v-model="tab"
                  background-color="transparent"
                  color="basil"
                  grow
                >
                  <v-tab v-for="item in items" :key="item">
                    {{ item }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card color="basil" flat>
                      <v-card-text><ClockIn /></v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card color="basil" flat>
                      <v-card-text>
                        <!-- "Drink" component (old "Pour Component") -->

                        <div id="coffeeSelection" v-show="!brewCoffee">
                          <div class="descriptiveText">
                            <p>Checkout</p>
                            <p>
                              {{ msg }}
                            </p>
                          </div>
                          <div
                            v-for="drink in drinks"
                            :key="drink.id"
                            class="verticalButtons"
                          >
                            <button
                              @click="
                                setSelectedCoffee(drink.name, drink.reqLevel)
                              "
                              :class="{ locked: drink.reqLevel > level }"
                            >
                              {{ drink.name }}
                            </button>
                          </div>
                        </div>

                        <div v-if="brewCoffee">
                          <Pour
                            :selectedCoffee="selectedCoffee"
                            @resetIt="brewCoffee = $event"
                          />
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card color="basil" flat>
                      <v-card-text><Shop /></v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>

              <v-system-bar dark color="indigo darken-2">
                Tips: {{ currentTips }}
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
              </v-system-bar>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <div v-if="chalkBoard" class="mt-16">
        <img
          src="@/assets/imgs/chalkboard-stand.png"
          width="30%"
          height="30%"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import Pour from "@/components/Pour.vue";
import ClockIn from "@/views/ClockIn.vue";
import Shop from "@/views/Shop.vue";
import { random } from "@/shared/constants";
import { mapState, mapActions } from "vuex";
import { dollarAmount } from "@/shared/constants";

export default {
  name: "Orders",
  components: {
    Pour,
    ClockIn,
    Shop,
  },
  data() {
    return {
      brewCoffee: false,
      selectedCoffee: "",
      dayDone: false,
      msg: "",
      serveMsg: "",

      tab: null,
      items: ["Clock In", "Drinks", "Shop"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },

  computed: {
    ...mapState({ customers: "customers" }),
    ...mapState(["drinks"]),
    currentCustomer() {
      return this.$store.state.currentCustomer;
    },
    currentDrink() {
      return this.$store.state.currentDrink;
    },
    level() {
      return this.$store.state.currentLevel;
    },
    chalkBoard() {
      return this.$store.state.chalkBoard;
    },
    cups() {
      return this.$store.state.currentCups;
    },
    currentTips() {
      return dollarAmount(this.$store.state.currentTips);
    },
  },

  async created() {
    if (!this.$store.state.currentCustomer) {
      await this.loadCustomers(); // only load the customers from the json if there's no currentCustomer (initial load) so we can manipulate the customer vuex state
    }

    if (!this.$store.state.currentCustomer) {
      this.customerRandom();
    }
    await this.loadDrinks();
  },

  methods: {
    ...mapActions(["getCustomersAction"]),
    async loadCustomers() {
      await this.getCustomersAction();
    },
    ...mapActions(["getDrinksAction"]),
    async loadDrinks() {
      await this.getDrinksAction();
    },
    customerRandom() {
      this.serveMsg = "";
      let newCustomerPool = this.customers;

      if (this.chalkBoard === false) {
        newCustomerPool = this.customers.filter(
          (customer) => customer.tourist === undefined
        ); // new array with only non tourists if the chalkboard isn't purchased
      }
      console.log(JSON.stringify(newCustomerPool));
      let levelAppropCustomers = newCustomerPool.filter(
        (customer) => customer.reqLevel <= this.level
      ); // loop through customers, find those less than or equal to current level
      const checkCustomerServed = (customer) => customer.served === false; // check if any unserved customers exist
      if (levelAppropCustomers.some(checkCustomerServed)) {
        let unServedCustomers = levelAppropCustomers.filter(
          (customer) => customer.served === false
        );
        let num = random(0, unServedCustomers.length); // makes the random min max equal 0 through the length of level appropriate customers
        this.$store.commit("currentCustomer", unServedCustomers[num]); // find a random customer, store in state
      } else {
        this.dayDone = true;
        this.msg = "All customers served! Clock out and in to serve more!";
      }
    },
    serveDrink() {
      console.log(this.$store.state.currentDrink);
      if (
        this.currentCustomer.drink === this.currentDrink ||
        (this.currentDrink &&
          this.currentCustomer.drink.includes(this.currentDrink))
      ) {
        this.$store.commit("levelUp");
        this.$store.commit("getTip", this.$store.state.currentCustomer.tip); // tip the Barista!
        this.$store.commit("currentDrink", ""); // reset the currentDrink
        this.$store.commit("serveCustomer"); // set current customer's served to true
        this.serveMsg = "YUM. Thanks for the drink!";
      } else if (this.currentDrink === "") {
        this.serveMsg = "You haven't made me a drink yet. Get brewin";
      } else {
        this.serveMsg =
          "That's not even a little bit close to what I ordered. Try again?";
      }
    },
    refuseCustomer() {
      this.$store.commit("serveCustomer");
      this.customerRandom();
    },
    customerNext() {
      this.customerRandom();
    },
    setSelectedCoffee(name, reqLevel) {
      if (this.cups > 0) {
        this.selectedCoffee = name;
        if (reqLevel > this.$store.state.currentLevel) {
          // if the required level of the selected coffee is greater than the current level
          this.msg = `You haven't the skillz to make a ${this.selectedCoffee} yet! Learn how to brew better, bro.`;
          this.brewCoffee = false; // don't advance & display message
        } else {
          this.skillLock = false;
          this.brewCoffee = true; // otherwise, advance
        }
      } else {
        this.msg = "You are out of cups in your carafe. Brew some more!";
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

.v-icon.v-icon.customer {
  position: relative; //positions customer closer to table
  top: 17px;
}

.v-icon.v-icon.nav-arrow {
  font-size: 25px !important;
}

/* Animation Styles */

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 4.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.v-system-bar .v-icon {
  font-size: 25px !important;
}

/* Helper classes */
.basil {
  background-color: #2a2a2a !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
