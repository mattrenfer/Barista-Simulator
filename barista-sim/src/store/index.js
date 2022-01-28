import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLevel: 1,
    currentTips: '',
    clockedInDate: '',
    clockedInTime: '',
    clockedIn: false,
    currentCustomer: {},
    currentDrink: '',
  },
  mutations: {
    levelUp(state) {
      state.currentLevel++;
    },
    currentTips(state) {
      state.currentTips++;
    },
    clockedInDate(state, date) {
      state.clockedInDate = date;
    },
    clockedInTime(state, time) {
      state.clockedInTime = time
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
