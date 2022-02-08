<template>
  <div class="flex mt-8 px-4">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full text-sm">
      <MerchantWithdrawalsStats />
      <MerchantWithdrawalsTransfers />
      <MerchantWithdrawalsBeneficiaries />
    </main>
  </div>
</template>

<script>
export default {
  layout: "merchant",
};
</script>
