import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    some: "",
    test: "123",
  },
  mutations: {
    setSome(state) {
      state.some = "asdf";
    },
  },
  getters: {
    test: (state) => state.test,
  },
  actions: {},
  modules: {},
});
