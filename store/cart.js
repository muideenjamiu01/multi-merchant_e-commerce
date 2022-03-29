export const state = () => ({
  items: [],
});

// getters
export const getters = {
  cartProducts(state) {
    return state.items;
  },
  cartItemsCount(state, getters) {
    return state.items.reduce((total, { quantity }) => total + quantity, 0);
  },

  cartTotalPrice(state, getters) {
    return getters.cartProducts.reduce((total, { product, quantity }) => {
      return total + parseFloat(product.price) * quantity;
    }, 0);
  },
};

// actions
export const actions = {
  addProductToCart({ state, commit }, product) {
	  
	  // if (product.inventory > 0) {
    const cartItem = state.items.find((item) =>
      item.product._id === product._id
    );
		  
		  if (!cartItem) {
			  commit("addToCart", product);
			} else {
				commit("incrementItemQuantity", cartItem.product._id);
			}
  },
  removeProductFromCart({ state, commit }, { productId, remove }) {
    const cartItem = state.items.find((item) => item.product._id === productId);

    if (cartItem.quantity === 1 || remove) {
      commit("removeFromCart", productId);
    } else {
      commit("decrementItemQuantity", cartItem.product._id);
    }
  },
};

// mutations
export const mutations = {
  addToCart(state, product) {
			state.items = [...state.items, { product, quantity: 1 }];
    window.localStorage.setItem("ys-cart", JSON.stringify(state.items));
  },

  removeFromCart(state, productId) {
    state.items = state.items.filter((item) => item.product._id !== productId);
    window.localStorage.setItem("ys-cart", JSON.stringify(state.items));
  },

  incrementItemQuantity(state, productId) {
    state.items = state.items.map((i) =>
      i.product._id === productId
        ? {
            product: i.product,
            quantity: i.quantity + 1,
          }
        : i
    );
    window.localStorage.setItem("ys-cart", JSON.stringify(state.items));
  },

  decrementItemQuantity(state, productId) {
    state.items = state.items.map((i) =>
      i.product._id === productId
        ? {
            product: i.product,
            quantity: i.quantity - 1,
          }
        : i
    );
    window.localStorage.setItem("ys-cart", JSON.stringify(state.items));
  },

  setCart(state, items) {
    state.items = [
      ...JSON.parse(window.localStorage.getItem("ys-cart", items)),
    ];
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};
