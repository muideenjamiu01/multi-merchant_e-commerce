<template>
  <div>
    <MerchantWithdrawalsStats />
    <MerchantWithdrawalsTransfers title="Withdrawals" :columns="['Transfer ID', 'Account Name', 'Account Number', 'Amount (NGN)', 'Transfer Date', 'Status']" :data="items" />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  layout: 'merchant',
  middleware: 'auth-merchant',
  computed: mapGetters({
    items: "withdrawals/withdrawals",
    errors: "withdrawals/errors",
    loading: "withdrawals/loading",
  }),
  created() {
    this.$store.dispatch("withdrawals/fetchWithdrawals");
  },
  methods: {
    ...mapActions(["fetchWithdrawals"]),
  }
}
</script>
