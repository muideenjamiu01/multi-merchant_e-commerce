export const state = () => ({
  merchant: null,
  merchants: [],
  loading: false,
  errors: null,
});

export const getters = {
  getMerchants(state) {
    return state.merchants;
  },
  getMerchant(state) {
    return state.merchant;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchMerchants({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get("/api/users/v1/merchants");
      commit("setMerchants", response.data.data);
      this.$toast.success(response.data.msg);
    } catch (error) {
      this.$toast.error(error.response.data.msg);
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

export const mutations = {
  setMerchants(state, payload) {
    state.merchants = payload;
  },
  setMerchant(state, payload) {
    state.merchant = state.merchants.filter(user => user._id === payload)[0];
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
