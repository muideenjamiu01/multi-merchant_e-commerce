export const state = () => ({
    items: [],
  });
  
  // getters
  export const getters = {
    getOrders(state) {
      return state.items;
    },
  };
  
  // actions
  export const actions = {
      executeOrder({ state, commit }, products) {
        //   const order = products.map(product => {
        // if (product.inventory > 0) {
        // //   remove 1 item from stock
        // commit(
        //     "products/decrementProductInventory",
        //     { id: product.id },
        //     { root: true }
        // );
    // }})
    commit('addOrder', order)
    },
  };
  
  // mutations
  export const mutations = {
    addOrder(state, order) {
      state.items = [...state.items, order];
      window.localStorage.setItem("ys-orders", JSON.stringify(state.items));
    },
  
    setOrder(state, items) {
      state.items = [
        ...JSON.parse(window.localStorage.getItem("ys-orders", items)),
      ];
    },
  
    setCheckoutStatus(state, status) {
      state.checkoutStatus = status;
    },
  };
  