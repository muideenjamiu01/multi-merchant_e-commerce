// import {createStore} from vuex;
export default {
  state(counter = 10) {
    return { counter };
  },
  mutations: {
    add(state) {
      console.log("added");
      state.counter++;
    },
    subtract(state) {
      console.log("subtracted");
      state.counter--;
    },
  },
  actions: {
    add(state) {
      console.log("added");
      console.log(state.state.counter);
      state.state.counter++;
    },
    subtract(state) {
      console.log("subtracted");
      state.counter--;
    },
  },
  getters: {},
  modules: {},
};
