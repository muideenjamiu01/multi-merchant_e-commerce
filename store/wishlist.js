export const state = () => ({
  products: [],
  loading: false,
  errors: null
});

export const getters = {
  products(state) {
    return state.products;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async addToWishlist({ state, commit }, productId) {
    commit("setLoading", true);
    try {
      const response = await this.$axios({
        url: '/users/wishlist',
        method: 'post',
        data: { id: productId }
      });
      commit("setWishlist", response.data);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async removeFromWishlist({ state, commit }, productId) {
    commit("setLoading", true);
    try {
      const response = await this.$axios({
        url: '/users/wishlist',
        method: 'delete',
        data: { id: productId }
      });
      commit("setWishlist", response.data);
    } catch (error) {
      commit("setWishlist", []);
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchWishlist({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "https://youstore-products.herokuapp.com/v1/product/wishlist/products"
      );

      // const {_links, items, meta} = response.data
        console.log(response)
      commit("setWishlist", response.data);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

export const mutations = {
  setWishlist(state, payload) {
    state.products = payload;
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  }
};
