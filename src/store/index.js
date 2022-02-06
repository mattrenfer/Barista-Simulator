import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLevel: 1,
    currentTips: 0,
    clockedInDate: '',
    clockedInTime: '',
    clockedIn: false,
    currentCustomer: '',
    currentDrink: '',
    currentCarafe: 4,
    currentCups: 0,
  },
  mutations: {
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
      state.currentCarafe += 2 ;
    },
  },
  actions: {},
  modules: {},
});
