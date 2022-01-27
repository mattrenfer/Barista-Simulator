import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLevel: 1,
    clockedIn: false,
    currentCustomer: {},
    currentDrink: '',
  },
  mutations: {
    levelUp(state) {
      state.currentLevel++;
    },
    clockedIn(state) {
      state.clockedIn = true;
    },
    currentCustomer(state, customer) {
      state.currentCustomer = customer;
    },
    currentDrink(state, drink) {
      state.currentDrink = drink;
    },
  },
  actions: {},
  modules: {},
});
