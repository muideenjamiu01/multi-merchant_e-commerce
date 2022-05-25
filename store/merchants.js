const ITEMS_PER_PAGE = 20

export const state = () => ({
  merchant: null,
  merchants: [],
  products: [],
  reviews: [],
  loading: false,
  errors: null,
});

export const getters = {
  getMerchants(state) {
    return state.merchants;
  },
  getMerchant(state) {
    return state.merchant;
  },
  getMerchantProducts(state) {
    return state.products;
  },
  getMerchantReviews(state) {
    return state.reviews;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchMerchants({ commit }, payload) {
    commit("setLoading", true);
    commit("setError", false);
    const params = {
      limit: ITEMS_PER_PAGE
    }
    
    if (payload && payload.category) {
      params.category = payload.category
    }
    if (payload && payload.page) {
      params.page = payload.page
    }

    try {
      let response

      if (payload.category) {
        response = await this.$axios.get("/api/users/v1/merchants/filter", {
          params
        });
      } else {
        response = await this.$axios.get("/api/users/v1/merchants", {
          params
        });
      }

      commit("setMerchants", response.data.data);
      this.$toast.success(response.data.msg);
    } catch (error) {
      this.$toast.error(error.response.data.msg);
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchMerchantProducts({ commit, state }, payload) {
    commit("setLoading", true);
    commit("setError", false);
    const params = {
      limit: ITEMS_PER_PAGE
    }

    if (payload && payload.page) {
      params.page = payload.page
    }

    try {
      const response = await this.$axios.get(`/api/products/v1/products/merchant-products/${state.merchant._id}`, {
        params
      });

    commit("setMerchantProducts", response.data.data);
      this.$toast.success(response.data.msg);
    } catch (error) {
      console.log(error)
      commit("setError", error.response.data.msg);
    } finally {
      commit("setLoading", false);
    }
  }
};

export const mutations = {
  setMerchants(state, payload) {
    state.merchants = payload;
  },
  setMerchant(state, payload) {
    state.merchant = state.merchants.filter(user => user._id === payload)[0];
  },
  setMerchantProducts(state, payload) {
    state.products = payload
  },
  setMerchantReviews(state) {
    state.products.map((product) => {
      const name = product.name
      const image = product.images[0]

      product.reviews.forEach(review => {
        state.reviews = [...state.reviews, { name, image, ...review }]
      });
    })
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
