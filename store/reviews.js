export const state = () => ({
  singleReviews: [],
  items: [],
  itemsReview: [],
  id: "",
  loading: false,
  errors: null,
});

// mutations
  export const mutations = {
  getReview(state, singleProductReviews) {
    state.singleReviews = singleProductReviews;
    console.log(state.singleReviews);
  },

  addOrder(state, order) {
    state.items = order;
    //   window.localStorage.setItem("ys-orders", JSON.stringify(state.items));
  },
  addOrderReview(state, orderReview) {
    state.itemsReview = orderReview;
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


// getters
export const getters = {
  getOrders(state) {
    return state.items;
  },
  getOrdersReview(state) {
    return state.itemsReview;
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
      console.log(res.data.data);
      let result = [];
      for (let i = 0; i < res.data.data.length; i++) {
        result.push(res.data.data[i].products);
      }
      result = result.flat();
      console.log(result);
      commit("addOrder", result);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  //this checkout function creates order
  async createOrder({ state, commit, rootState, rootGetters }) {
    if (!this.$auth.loggedIn) {
      this.$router.push("/auth/login");
    } else {
      let payload = {
        customerId: rootState.auth.user._id,
        customerEmail: rootState.auth.user.email,
        products: rootState.cart.items.map((item) => ({
          id: item.product._id,
          name: item.product.name,
          price: item.product.price,
          size: item.product.size,
          color: item.product.color,
          image: item.product.images[0],
          quantity: item.quantity,
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
  async fetchOrders({ commit, rootState }) {
    const customerId = rootState.auth.user._id;
    commit("setLoading", true);
    const productId = "6221c11a837e20cc03ff00da"
    try {
      let res = await this.$axios.get(
        `https://youstore-products.herokuapp.com/v1/products/${productId}/one`
      );
      // console.log(res.data.data);
      // let result = [];
      // for (let i = 0; i < res.data.data.length; i++) {
      //   result.push(res.data.data[i].products);
      // }
      // result = result.flat();
      // console.log(result);
      // commit("addOrder", result);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
};

