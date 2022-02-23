export const state = () => ({
  cartItems: 0,
});

export const mutations = {
  addItemToCart(state) {
    state.cartItems++;
  },
  removeFromCart(state) {
    state.cartItems--;
  },
};
