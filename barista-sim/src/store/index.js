import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentLevel: 1,
  },
  mutations: {
    levelUp(state) {
      state.currentLevel++;
    },
  },
  actions: {},
  modules: {},
});
