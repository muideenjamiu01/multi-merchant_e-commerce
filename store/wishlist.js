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
	async addToWishlist({ commit }, product) {
	  try {
		await this.$axios({
		  url: `/api/products/v1/product/wishlist`,
		  method: "post",
		  data: { products: product._id },
		});
  
		commit("addToWishlist", product);
		this.$toast.success("Product successfully added to your wishlist");
	  } catch (error) {
		commit("setError", error.message);
	  }
	},
	async  removeFromWishlist({ commit }, productId) {
	  try {
		await this.$axios({
		  url: `/api/products/v1/product/wishlist/product/${productId}`,
		  method: "delete",
		});
  
		commit("deleteFromWishlist", productId);
		this.$toast.success("The item was removed successfully");
	  } catch (error) {
		commit("setError", error.message);
		this.$toast.error(error.message);
	  }  
	},
  
	async fetchWishlist({ commit }) {
	  commit("loading", true);
  
	  try {
		const response = await this.$axios.get("/api/products/v1/product/wishlist/products")
  
		commit("setWishlist", response.data.data[0]);
	  } catch (error) {
	  } finally {
		commit("loading", false);
	  }
	},
  };
  
  export const mutations = {
	setWishlist(state, payload) {
	  state.products = payload.products;
	},
	addToWishlist(state, payload) {
	  state.products = [...state.products, payload]
	},
	deleteFromWishlist(state, id) {
	  state.products = state.products.filter(
		(product) => product._id !== id
	  );
	},
	loading(state, value) {
	  state.loading = value;
	},
	setError(state, payload) {
	  state.errors = payload;
	},
  };