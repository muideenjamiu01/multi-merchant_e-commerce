export const state = () => ({
  products: [],
  singleProduct: {},
  pagination: null,
  loading: false,
  errors: null,
});

export const getters = {
  products: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
  pagination: (state) => state.pagination,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "https://youstore-server.herokuapp.com/api/products",
        {
          params: {
            page: 1,
            category: "computing",
          },
        }
      );

      const { _links, items, meta } = response.data;

      commit("setProducts", items);
      commit("setPagination", { ...meta, ..._links });
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  getSingleProduct({ commit }, index) {
    commit("setSingleProduct", index);
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setPagination(state, payload) {
    state.pagination = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
  decrementProductInventory(state, { id }) {
    const product = state.products.find((product) => product.id === id);
    product.inventory--;
  },
  setSingleProduct(state, index) {
    state.singleProduct = state.products[index];
  },
};
