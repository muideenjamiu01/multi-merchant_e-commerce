export const state = () => ({
  items: [],
  id: "",
  loading: false,
  errors: null,
});

// getters
export const getters = {
  getOrders(state) {
    return state.items;
  },
  getOrderId(state) {
    return state.id;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

// actions
export const actions = {
  async fetchOrders({ commit, rootState }) {
    const customerId = rootState.auth.user._id;
    commit("setLoading", true);

    try {
      let res = await this.$axios.get(`/api/order/customer/${customerId}`);
      commit("addOrder", res.data);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  //this checkout function creates order
  async createOrder({ state, commit, rootState, rootGetters }) {
	  if(!this.$auth.loggedIn){
		this.$router.push("/auth/login");
	  } else{
		let payload = {
			customerId: rootState.auth.user._id,
			customerEmail: rootState.auth.user.email,
      name: rootState.auth.user.firstName + ' ' + rootState.auth.user.lastName,
			products: rootState.cart.items.map((item) => ({
			  id: item.product._id,
			  name: item.product.name,
			  price: item.product.price,
			  size: item.product.size,
			  color: item.product.color,
			  image: item.product.images[0],
        quantity: item.quantity,
        merchantId: item.product.merchantId
			})),
			total: rootGetters["cart/cartTotalPrice"] * 100,
		  };
	  
		  let res = await this.$axios.post("/api/order/", payload);
	  
		  this.$toast.success("Orders Successfully Created");
	  
		  this.$router.push("/checkout");
		  //   commit('addOrder', res.data.data.id)
		  commit("saveOrderId", res.data.data.id);
	  }
    
  },
};

// mutations
export const mutations = {
  addOrder(state, order) {
    state.items = order;
    //   window.localStorage.setItem("ys-orders", JSON.stringify(state.items));
  },
  saveOrderId(state, orderId) {
    state.id = orderId;
  },

  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  },
};
