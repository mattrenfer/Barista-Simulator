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

  loadStateFromLocalStore(state) {
    if (localStorage.getItem('currentLevel')) {
      state.currentLevel = localStorage.getItem('currentLevel');    // if there's a value for currentLevel in localStorage, set it to the state's currentLevel
    }
    if (localStorage.getItem('currentTips')) {
      state.currentTips = localStorage.getItem('currentTips');
    }
    if (localStorage.getItem('currentCarafe')) {
      state.currentCarafe = localStorage.getItem('currentCarafe');
    }
    if (localStorage.getItem('carafePrice')) {
      state.carafePrice = localStorage.getItem('carafePrice');
    }
  },

  levelUp(state) {
    state.currentLevel++
    localStorage.setItem('currentLevel', state.currentLevel);    // level up, adding to vuex & local store
  },
  getTip(state, tip) {
    state.currentTips += tip;
    localStorage.setItem('currentTips', state.currentTips);
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
    localStorage.setItem('currentCarafe', state.currentCarafe);
    state.currentTips -= state.carafePrice;
    state.carafePrice *= 2;
    localStorage.setItem('carafePrice', state.carafePrice);
  },


  // new axios data mutations

  [GET_CUSTOMERS](state, customers) {
    state.customers = customers;
  },

  [GET_DRINKS](state, drinks) {
    state.drinks = drinks;
  },

  // getLevel(level) {
  //   state.currentLevel = level;
  // }

};

const actions = {
    async getCustomersAction({commit}) {
      const customers = await data.getCustomers();
      commit(GET_CUSTOMERS, customers)
    },
    async getDrinksAction({commit}) {
      const drinks = await data.getDrinks();
      commit(GET_DRINKS, drinks)
    },
    // getLevelAction({commit}) {
    //   const level = localStorage.getItem('currentLevel');
    //   commit('getLevel', level)
    // }
 };


const getters = { };

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
