import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = { 
  customers: [{
    "id": 1,
    "name": "Jo Mugsy",
    "order": "Hello, I'd like a coffee, please.",
    "drink": [
      "Regular",
      "Espresso",
      "Mocha",
      "Latte"
    ],
    "tip": 0.25
  }],
  currentLevel: 1,
  currentTips: 0,
  clockedInDate: '',
  clockedInTime: '',
  clockedIn: false,
  currentCustomer: '',
  currentDrink: '',
  currentCarafe: 4,
  currentCups: 0,
  carafePrice: 1,
};

const mutations = {
  levelUp(state) {
    state.currentLevel++;
  },
  getTip(state, tip) {
    state.currentTips += tip;
  },
  clockedInDate(state, date) {
    state.clockedInDate = date;
  },
  clockedInTime(state, time) {
    state.clockedInTime = time
  },
  clockedIn(state, clocked) {
    state.clockedIn = clocked;
  },
  currentCustomer(state, customer) {
    state.currentCustomer = customer;
  },
  currentDrink(state, drink) {
    state.currentDrink = drink;
  },
  brewCoffee(state) {
    state.currentCups += state.currentCarafe;
  },
  pourCoffee(state) {
    state.currentCups--;
  },
  buyCarafe(state) {
    state.currentCarafe += 2;
    state.currentTips -= state.carafePrice;
    state.carafePrice *= 2;
  },
};

const actions = { };
const getters = { };

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
