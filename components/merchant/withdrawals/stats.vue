<template>
  <div class="flex flex-col md:flex-row gap-2">
    <div class="space-y-1 shadow-md min-w-80 w-full py-5 text-center">
      <h1 class="text-3xl font-medium">
        NGN {{balance}}
      </h1>
      <p class="text-sm">
        Available Balance
      </p>
    </div>
    <div class="space-y-1 shadow-md min-w-80 w-full py-5 text-center">
      <h1 class="text-3xl font-medium">
        NGN {{transferred}}
      </h1>
      <p class="text-sm">
        Total Amount Transferred
      </p>
    </div>
    <div class="space-y-1 shadow-md min-w-80 w-full py-5 text-center">
      <h1 class="text-3xl font-medium">
        {{count}}
      </h1>
      <p class="text-sm">
        Successful Transfers
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  layout: 'merchant',
  computed: mapGetters({
    balance: "withdrawals/balance",
    transferred: "withdrawals/transferred",
    count: "withdrawals/count",
  }),
  created() {
    this.$store.dispatch("withdrawals/fetchMerchantStats");
  },
  methods: {
    ...mapActions(["fetchMerchantStats"]),
  }
}
</script>
