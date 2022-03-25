export const state = () => ({
  customers: [],
  loading: false,
  errors: null,
});

export const getters = {
  customers(state) {
    return state.customers;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {

  async fetchCustomers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "/merchants/customers"
      );
      // const {_links, items, meta} = response.data
      commit("setCustomers", response.data.items);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

export const mutations = {
  setCustomers(state, payload) {
    state.customers = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
