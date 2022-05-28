import Vue from "vue";
import Vuex from "vuex";
import { data } from "@/shared/data";

import { GET_CUSTOMERS, GET_DRINKS } from "./mutation-types";


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
  currentDrinkPoured: false,
  currentCarafe: 4,
  currentCups: 0,
  carafePrice: 1,
  chalkBoard: false,
};

const mutations = {

  loadStateFromLocalStore(state) {
    if (localStorage.getItem('currentLevel')) {
      state.currentLevel = parseInt(localStorage.getItem('currentLevel'));    // if there's a value for currentLevel in localStorage, set it to the state's currentLevel
    }
    if (localStorage.getItem('currentTips')) {
      state.currentTips = parseFloat(localStorage.getItem('currentTips'));  // parseFloat converts strings to a decimal number
    }
    if (localStorage.getItem('currentCarafe')) {
      state.currentCarafe = parseInt(localStorage.getItem('currentCarafe'));
    }
    if (localStorage.getItem('carafePrice')) {
      state.carafePrice = parseInt(localStorage.getItem('carafePrice'));
    }
    if (localStorage.getItem('chalkBoard')) {
      state.chalkBoard = localStorage.getItem('chalkBoard');
    }
    if (localStorage.getItem('clockedIn')) {
      state.clockedIn = localStorage.getItem('clockedIn');
    }
    if (localStorage.getItem('currentCups')) {
      state.currentCups = localStorage.getItem('currentCups');
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
    localStorage.setItem('clockedIn', state.clockedIn);
  },
  currentCustomer(state, customer) {
    state.currentCustomer = customer;
  },
  serveCustomer(state) {
    state.currentCustomer.served = true;
    state.currentDrinkPoured = false;
  },
  currentDrink(state, drink) {
    state.currentDrink = drink;
  },
  brewCoffee(state) {
    state.currentCups += state.currentCarafe;
    localStorage.setItem('currentCups', state.currentCups);
  },
  pourCoffee(state) {
    state.currentCups--;
    localStorage.setItem('currentCups', state.currentCups);
    state.currentDrinkPoured = true;
  },
  buyCarafe(state) {
    state.currentCarafe += 2;
    localStorage.setItem('currentCarafe', state.currentCarafe);
    state.currentTips -= state.carafePrice;
    state.carafePrice *= 2;
    localStorage.setItem('carafePrice', state.carafePrice);
  },
  buyChalkBoard(state, price) {
    state.chalkBoard = true;
    localStorage.setItem('chalkBoard', state.chalkBoard);
    state.currentTips -= price;
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
