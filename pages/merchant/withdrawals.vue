<template>
  <div class="flex mt-8 px-4">
      <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="md:ml-72 md:w-[calc(100%_-_288px)]">
      <MerchantWithdrawalsStats />
      <MerchantWithdrawalsTransfers title="Withdrawals" :columns="['Transfer ID', 'Account Name', 'Account Number', 'Amount (NGN)', 'Transfer Date', 'Status']" :data="items" />
    </main>
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
