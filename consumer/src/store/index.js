import { createStore } from "vuex";
import { authStore } from "@remote/auth/store";

const searchInput = {
  state: {
    queryData: null,
  },
  mutations: {},
};

export default (app) =>
  createStore({
    ...authStore,
  });
