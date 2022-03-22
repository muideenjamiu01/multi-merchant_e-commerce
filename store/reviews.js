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
      console.log("...posting reviews");
      const response = await this.$axios.get(
        "https://youstore-products.herokuapp.com/v1/product/6231c0b7fdcf0f1e0d7ed566/review"
      );
        
      const reviewData = response.data.data;
      debugger
        console.log(reviewData);
      commit("setReviews", reviewData);
    } catch (error) {
      console.log("error failed to post to alex's server")
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
