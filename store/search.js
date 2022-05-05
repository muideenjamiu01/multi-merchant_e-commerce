export const state = () => ({
  results: [],
  loading: false,
  errors: null
});

export const getters = {
  products(state) {
    return state.results;
  },
  loading(state) {
    return state.loading;
  },
  errors(state) {
    return state.errors
  }
};

export const actions = {
  async search({ commit }, query) {
    commit("setError", null);
    commit("setLoading", true);

    try {
      const response = await this.$axios.get("/api/products/v1/products/search", {
        params: {
          name: query
        },
      });

      commit("setResults", response.data.data);
    } catch (error) {
      commit("setError", error.response.data.msg);
    } finally {
      commit("setLoading", false);
    }
  },
};

export const mutations = {
  setResults(state, payload) {
    state.results = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
