export const state = () => ({
  products: [],
  singleProduct: null,
  loading: false,
  errors: null,
});

export const getters = {
  products: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchProducts({ commit, rootState }, {category}) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(`/api/products/v1/products/category/`,
        {
          params: {
            page: 1,
            category,
          },
        }
      );
      commit("setProducts", response.data.data);
      if (rootState.auth.loggedIn && rootState.wishlist.length > 0) {
        commit("setProductWishlistKey", rootState.wishlist);
      }
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },

  getSingleProduct({ commit, rootState }, product) {
    commit("setSingleProduct", product);
  }
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },
  setProductWishlistKey(state, payload) {
    state.products = state.products.map(product => {
      const index = payload.findIndex(p => p._id === product._id)
      return {
        ...product,
        inWishlist: index !== -1
      }
    })
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
