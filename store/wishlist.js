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
  async removeFromWishlist({ state, commit }, productId) {
   

    try {
      const response = await this.$axios({
        url: `/api/products/v1/product/wishlist/product/${productId}`,
        method: "delete",
      });

      commit("setWishlist", response.data);
	  this.$toast.success("The item was removed successfully");
    } catch (error) {
    //   commit("setWishlist", []);
      commit("setError", error.message);
    } finally {
     
    }
  },


  async fetchWishlist({ commit }) {
    
    try {
      const response = await this.$axios.get(
        "/api/products/v1/product/wishlist/products"
      );

      // const {_links, items, meta} = response.data
      commit("setWishlist", response.data);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      
    }
  },
};

export const mutations = {
  setWishlist(state, payload) {
    state.products = payload;
	// state.products.filter((productId) => productId !== productId)
	// this.splice(products,1)
  },
  delWishlist(state, payload){
	  console.log(payload)
	  state.products = state.products.filter((product) => product._id !== payload._id)
	  
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
