import Vue from "vue";
import Vuex from "vuex";
import { data } from "@/shared/data";

import { GET_CUSTOMERS } from "./mutation-types";
import { GET_DRINKS } from "./mutation-types";


Vue.use(Vuex);

const state = { 
  customers: [],
  drinks: [],
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


  // new axios data mutations

  [GET_CUSTOMERS](state, customers) {
    state.customers = customers;
  },

  [GET_DRINKS](state, drinks) {
    state.drinks = drinks;
  }

};

const actions = {
    async getCustomersAction({commit}) {
      const customers = await data.getCustomers();
      commit(GET_CUSTOMERS, customers)
    },
    async getDrinksAction({commit}) {
      const drinks = await data.getDrinks();
      commit(GET_DRINKS, drinks)
    }
 };


const getters = { };

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
