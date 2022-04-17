export const state = () => ({
  singleReviews: [],
  items: [],
  id: "",
  loading: false,
  errors: null,
});

// mutations
  export const mutations = {
    getReview(state, singleProductReviews) {
      state.singleReviews = singleProductReviews;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, payload) {
      state.errors = payload;
    },
};


// getters
export const getters = {
  getOrders(state) {
    return state.items;
  },
 
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

// actions
export const actions = {
  async postReviews({ commit, rootState}, input) {
    const id = rootState.products.singleProduct._id
    // commit("setLoading", true);
    try {
      const response = await this.$axios.post(
        `https://youstore-products.herokuapp.com/v1/product/${id}/review`, 
        {
          "comment" : input.input,
          "rating" : input.rating
        }
      );
      console.log(response.data.data);
      // commit("setError", error.message);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
 
  
};

