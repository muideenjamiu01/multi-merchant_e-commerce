export const state = () => ({
  withdrawals: [],
  balance: 0,
  transferred: 0,
  count: 0,
  loading: false,
  errors: null
});

export const getters = {
  withdrawals(state) {
    return state.withdrawals;
  },
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async makeWithdrawal({ state, commit }, { amount, bankName }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios({
        url: '/merchants/withdrawals',
        method: 'post',
        data: { amount, bankName }
      });
      commit("setWishlist", response.data);
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchWithdrawals({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get('/merchants/withdrawals');

      // const {_links, items, meta} = response.data

      commit("setWithdrawals", response.data.items);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchMerchantStats({commit}) {
    const response = await this.$axios({
      url: '/merchants/withdrawals/stats',
      method: 'get',
    });
    commit("setStats", response.data);
  }
};

export const mutations = {
  setWithdrawals(state, payload) {
    state.withdrawals = payload;
  },
  setStats(state, payload) {
    state.balance = payload.balance
    state.transferred = payload.transferred
    state.count = payload.count
  },
  setLoading(state, value) {
    state.loading = value;
  },
  setError(state, payload) {
    state.errors = payload;
  }
};
