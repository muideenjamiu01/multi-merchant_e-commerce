export const state = () => ({
  products: [],
  loading: false,
  errors: null,
});

export const getters = {
  products(state) {
    return state.products;
  },
  loading (state) {
    return state.loading;
  },
  errors: (state) => state.errors,
};

export const actions = {
  async addToWishlist({ state, commit }, productId) {
    try {
      const response = await this.$axios({
        url: `/api/products/v1/product/wishlist`,
        method: "post",
        data: { products: productId },
      });
      commit("setWishlist", response.data);
    this.$toast.success("Product successfully added to your wishlist");
    } catch (error) {
      commit("setError", error.message);
    } finally {
    }
  },
  async  removeFromWishlist({ state, commit, dispatch }, productId) {
    try {
      const response = await this.$axios({
        url: `/api/products/v1/product/wishlist/product/${productId}`,
        method: "delete",
      });

    //   commit("setWishlist", response.data);
      this.$toast.success("The item was removed successfully");
	  dispatch("fetchWishlist");
    } catch (error) {
      //   commit("setWishlist", []);
      commit("setError", error.message);
    } finally {
    }
  },

  fetchWishlist({ commit }) {
    commit("loading", true);
    return this.$axios.get("/api/products/v1/product/wishlist/products")
      .then((response) => {
        commit("setWishlist", response.data);
        commit("loading", false);
      })
      .catch((error) => console.log(error));

    // const {_links, items, meta} = response.data

    // commit("setPagination", {...meta, ..._links});
  },
};

export const mutations = {
  setWishlist(state, payload) {
    state.products = payload;
    // state.products.filter((productId) => productId !== productId)
    // this.splice(products,1)
  },
  delWishlist(state, payload) {
    state.products = state.products.filter(
      (product) => product._id !== payload._id
    );
  },
  loading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
