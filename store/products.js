export const state = () => ({
  products: [],
  singleProduct: null,
  // pagination: null,
  loading: false,
  errors: null,
});

export const getters = {
  products: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
  // pagination: (state) => state.pagination,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchProducts({ commit, rootState }) {
    alert("fetching products");
    const productCategory = rootState.products.singleProduct.category;

    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        // `https://youstore-products.herokuapp.com/v1/products/?category=${productCategory}`,
        `https://youstore-products.herokuapp.com/v1/products/?category=phone`,
        // "https://api-2445583927843.production.gw.apicast.io/api/products/v1/products",
        {
          params: {
            page: 1,
            // category: "computing",
            // limit: 30,
          },
        }
      );
      // const { docs, pagination } = response.data.data;
      console.log(response);
      const docs = response.data.data;
      commit("setProducts", docs);
      // commit("setPagination", pagination );
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  getSingleProduct({ commit }, product) {
    commit("setSingleProduct", product);
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
  setSingleProduct(state, product) {
    state.singleProduct = product;
  },
};
