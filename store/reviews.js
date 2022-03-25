export const state = () => ({
  reviews: [],
  singleReview: {},
  pagination: null,
  loading: false,
  errors: null,
});

export const getters = {
  reviews: (state) => state.reviews,
  singleReview: (state) => state.singleReview,
  pagination: (state) => state.pagination,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchReviews({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "https://youstore-products.herokuapp.com/v1/products/6221c11a837e20cc03ff00da/one"
      );
      const reviewData = response.data.data.reviews;
      commit("setReviews", reviewData);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  getSingleProduct({ commit }, index) {
    commit("setSingleReview", index);
  },
};

export const mutations = {
  setReviews(state, payload) {
    state.reviews = payload;
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
  setSingleReview(state, index) {
    state.singleReview = state.review[index];
  },
};
