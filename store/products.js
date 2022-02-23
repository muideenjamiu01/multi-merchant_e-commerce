export const state = () => ({
  products: [],
});

export const getters = {
  products: (state) => state.products,
};

export const actions = {
  async fetchProducts({ commit }) {
    const response = await this.$axios.get("https://fakestoreapi.com/products");

    commit("setProducts", response.data);
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  decrementProductInventory(state, { id }) {
    const product = state.products.find((product) => product.id === id);
    product.inventory--;
  },
};
