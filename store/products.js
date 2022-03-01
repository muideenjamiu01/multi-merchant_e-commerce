export const state = () => ({
  products: [],
  singleProduct: {}
});

export const getters = {
  products: (state) => state.products,
  singleProduct: (state) => state.singleProduct
};

export const actions = {
  async fetchProducts({ commit }) {
    const response = await this.$axios.get("https://fakestoreapi.com/products");

    commit("setProducts", response.data);
  },
  getSingleProduct({commit}, index) {
    commit("setSingleProduct", index)
  }
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  decrementProductInventory(state, { id }) {
    const product = state.products.find((product) => product.id === id);
    product.inventory--;
  },
  setSingleProduct(state, index) {
    state.singleProduct = state.products[index]
  }
};
