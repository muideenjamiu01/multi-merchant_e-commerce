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
  balance: (state) => state.balance,
  count: (state) => state.count,
  transferred: (state) => state.transferred,
  loading: (state) => state.loading,
  errors: (state) => state.errors,
};

export const actions = {
  async fetchWithdrawals({ commit, rootState }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get(`/api/payments/transfer/merchant/${rootState.auth.user._id}`);

      // const {_links, items, meta} = response.data

      commit("setWithdrawals", response.data.data);
      // commit("setPagination", {...meta, ..._links});
    } catch (error) {
      commit("setError", error.message);
    } finally {
      commit("setLoading", false);
    }
  },
  async makeWithdrawal({ state, commit }, payload) {
    try {
      const response = await this.$axios({
        url: '/api/payments/transfer',
        method: 'post',
        data: payload
      });

      this.$toast.success(response.data.message);
      commit("setWithdrawals", response.data);
    } catch (error) {
      this.$toast.error(error.response.data.message)
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
