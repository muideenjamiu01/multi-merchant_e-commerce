export const state = () => ({
    products: [],
    isLoading: false,
    errors: null
  });
  
  export const getters = {
    products(state) {
      return state.products;
    },
    isLoading: (state) => state.isLoading,
    errors: (state) => state.errors,
  };
  
  export const actions = {
    async toggleWishlist({ state, commit }, productId) {
      commit("setLoading", true);
      try {
        const response = await this.$axios.post("http://localhost:5000/api/users/wishlist", {
          params: {
            pid: productId
          }
        })
      // const item = state.products.find((p) => p.id === product.id);
  
      // if (item) {
      //   commit("remove", item.id);
      // } else {
      //   commit("add", product);
      // }
        commit("setWishlist", response.data)
      } catch (error) {
        commit("setError", error.message)
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchWishlist({ commit }) {
      commit("setLoading", true);
      try {
        const response = await this.$axios.get("http://localhost:5000/api/users/wishlist");
  
        // const {_links, items, meta} = response.data
  
        commit("setWishlist", response.data);
        // commit("setPagination", {...meta, ..._links});
      } catch (error) {
        commit("setError", error.message)
      } finally {
        commit("setLoading", false);
      }
    }
  }
  
  export const mutations = {
    setWishlist(state, payload) {
      state.products = payload
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, payload) {
      state.errors = payload;
    },
    // add(state, product) {
    //   state.products = [...state.products, product];
    //   window.localStorage.setItem("ys-wishlist", JSON.stringify(state.products));
    // },
    // remove(state, productId) {
    //   state.products = state.products.filter(
    //     (product) => product.id !== productId
    //   );
    //   window.localStorage.setItem("ys-wishlist", JSON.stringify(state.products));
    // },
  };
  