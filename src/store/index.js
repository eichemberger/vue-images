import { createStore } from "vuex";
import auth from "./modules/auth";
import images from "./modules/images";

const store = createStore({
  modules: {
    auth,
    images,
  },
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
