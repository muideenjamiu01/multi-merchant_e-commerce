export const state = () => ({
  products: [],
  limitedProducts: [],
});

export const getters = {
  allProducts: (state) => state.products,
  limitedProducts: (state) => state.limitedProducts,
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setLimitedProducts(state, payload) {
    state.limitedProducts = payload;
  },
};

export const actions = {
  async getProducts({ commit }) {
    await this.$axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        commit("setProducts", response.data);
      });
  },
  async getLimitedProducts({ commit }) {
    await this.$axios
      .get("https://fakestoreapi.com/products?limit=10")
      .then((response) => {
        commit("setLimitedProducts", response.data);
      });
  },
};
