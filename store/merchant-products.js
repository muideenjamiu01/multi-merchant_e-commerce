export const state = () => ({
  products: [],
  loading: false,
  errors: null,
});

export const getters = {
  products(state) {
    return state.products;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "/api/products/v1/products/merchant-products?user_key=4fbc6c112a19f295d08dfc27f36333b6",
        {
          params: {
            page: 1,
            // category: "computing",
            limit: 50,
          },
        }
      );
      console.log(response.data.data);
      commit("setProducts", response.data.data);
      console.log(products);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async deleteProduct({ state, commit, dispatch}, id) {
    try {
      const response = await this.$axios.delete(
        `https://youstore-products.herokuapp.com/v1/products/${id}/remove`
      );
      console.log(response);
      this.$toast.success("Product deleted");
      dispatch("fetchProducts");
    } catch (error) {
       console.log(response);
      // this.$toast.error(response);
    } finally {
    }
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
  },

  setLoading(state, value) {
    state.loading = value;
  },
  // 
  setError(state, payload) {
    state.errors = payload;
  },
};
