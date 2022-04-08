export const state = () => ({
  products: [],
  singleProduct: null,
  // pagination: null,
  loading: false,
  errors: null,
});

export const getters = {
  products: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
  // pagination: (state) => state.pagination,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchProducts({ commit, rootState }, {category}) {
    
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(`/api/products/v1/products/category/`,
        {
          params: {
            page: 1,
            category,
          },
        }
      );

      // const { docs, pagination } = response.data.data;
      const { auth, wishlist } = rootState
      if (auth.loggedIn) {
        const products = response.data.data.map(product => {
          const index = wishlist.products.data[0].products.findIndex(p => p._id === product._id)
          
          return {
            ...product,
            inWishlist: index !== -1
          }
        })

      console.log(products)
        commit("setProducts", products);
      } else {
        commit("setProducts", response.data.data)
      }
      
      // commit("setPagination", pagination );
    } catch (error) {
      console.log(error)
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },

  getSingleProduct({ commit }, product) {
    commit("setSingleProduct", product);
  },
};

export const mutations = {
  setProducts(state, payload) {
    state.products = payload;
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
  setSingleProduct(state, product) {
    state.singleProduct = product;
  },
};
