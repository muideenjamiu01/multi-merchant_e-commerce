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
  async getAllMerchantProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "https://api-2445583927843.production.gw.apicast.io/api/products/v1/products/merchant-products?user_key=4fbc6c112a19f295d08dfc27f36333b6",
        {
          params: {
            page: 1,
            // category: "computing",
            limit: 50,
          },
        }
      );
      console.log(response.data.data);

      // const {_links, items, meta} = response.data
      commit("setProducts", response.data.data);
      console.log(products);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
