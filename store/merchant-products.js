export const state = () => ({
  allProducts: [],
  products: [],
  loading: false,
  errors: null,
});

export const getters = {
  allProducts(state) {
    return state. allProducts;
  },
  products(state) {
    return state.products;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  // async getMerchantDetails(id) {
  //   try {
  //   const response = await this.$axios.get(
  //     // "https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/",
  //     `https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/one/${id}`
  //   );
  //    console.log('merchantname', response.data.data.storeName);

  //   // this.$toast.success(response.data.msg)
  //   commit("setMerchantDetails", response.data.data.storeName);

    
  //     // commit("setPagination", {...meta, ..._links});
  //   } catch (error) {
  //     return 'manos'
  //     // this.$toast.error(error.response.data.msg);
  //     // commit("setError", error.message);
  //   } finally {
  //     // commit("setLoading", false);
  //   }
   


  // },
  async getAllProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "/api/products/v1/products/",
        {
          params: {
            page: 1,
            limit: 50,
          },
        }
      );
     
       console.log("merchantDetails", response.data.data);
       

      
      this.$toast.success(response.data.msg)
      commit("setAllProducts", response.data.data);

     
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      this.$toast.error(error.response.data.msg);
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchProducts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(
        "/api/products/v1/products/merchant-products",
        {
          params: {
            page: 1,
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
  setAllProducts(state, payload) {
    state.allProducts = payload;
  },


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
