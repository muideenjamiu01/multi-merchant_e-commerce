export const state = () => ({
  products: [],
  loading: false,
  errors: null,
});

export const getters = {
  products(state) {
    return state.products;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get("/merchants/products");
      // const {_links, items, meta} = response.data
      commit("setProducts", response.data.items);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

export const mutations = {
  setproducts(state, payload) {
    state.products = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
