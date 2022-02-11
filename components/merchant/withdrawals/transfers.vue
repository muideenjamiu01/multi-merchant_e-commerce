<template>
  <div class="mt-8">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">
        Transfers
      </h1>
      <!-- <button
        @click="toggleNewTransferModal"
        class="bg-primary-blue text-white text-sm py-2 px-4 rounded"
      >
        New Transfer
      </button> -->
      <AppButton button-text="New Transfer" color="fillbutton" size="md" rounded @click="toggleNewTransferModal" />
    </div>

    <div
      v-if="transferModal"
      class="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center text-sm"
      @click="toggleNewTransferModal"
    >
      <div class="bg-white w-full max-w-md" @click.stop="">
        <h1 class="p-4 border-b font-medium text-base">
          Make Transfer
        </h1>
        <form class="p-4" @submit.prevent="">
          <div class="mb-4">
            <h1 class="text-base">
              Transfer to:
            </h1>
            <div class="space-y-2">
              <div
                v-for="beneficiary in beneficiaries"
                :key="beneficiary"
                class="space-x-0.5"
              >
                <input type="checkbox">
                <label>{{ beneficiary }}</label>
              </div>
            </div>
          </div>

          <h1 class="text-base">
            Or enter your details here:
          </h1>

          <div class="space-y-4 mt-2">
            <div class="space-y-1">
              <label>Name of Bank</label>
              <input
                type="text"
                class="w-full py-3 px-2.5 text-sm focus:outline-none border"
              >
            </div>
            <div class="space-y-1">
              <label>Account Number</label>
              <input
                type="text"
                class="w-full py-3 px-2.5 text-sm focus:outline-none border"
              >
            </div>
            <div class="space-y-1">
              <label>Name of Beneficiary</label>
              <input
                type="text"
                class="w-full py-3 px-2.5 text-sm focus:outline-none border"
              >
            </div>
          </div>

          <div class="text-sm flex justify-between mt-8">
            <!-- <button @click="toggleNewTransferModal" class="py-2 px-4">
              Cancel
            </button> -->
            <AppButton button-text="Cancel" color="outlinegray" size="md" rounded />
            <div>
              <!-- <button
                class="py-2 px-4 border border-primary-blue text-primary-blue rounded"
              >
                Save and Transfer
              </button> -->
              <AppButton button-text="Save and Tranfer" color="outlinebutton" size="md" rounded />
              <!-- <button class="py-2 px-4 bg-primary-blue text-white rounded">
                Transfer
              </button> -->
              <AppButton button-text="Transfer" color="fillbutton" size="md" rounded />
            </div>
          </div>
        </form>
      </div>
    </div>

    <table
      class="text-primary-black text-sm mt-7 text-left w-full max-h-128 overflow-scroll"
    >
      <thead class="py-3 border-b">
        <tr class="font-medium">
          <th class="pb-3">
            Transfer ID
          </th>
          <th class="pb-3">
            Account Name
          </th>
          <th class="pb-3">
            Account Number
          </th>
          <th class="pb-3">
            Amount (NGN)
          </th>
          <th class="pb-3">
            Date
          </th>
          <th class="pb-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="w in 10" :key="w" class="border-b cursor-pointer">
          <td class="w-40 py-3">
            3798480273
          </td>
          <td class="w-40 py-3">
            Marvin Walters
          </td>
          <td class="w-40 py-3">
            4839052885
          </td>
          <td class="w-40 py-3">
            403900.00
          </td>
          <td class="w-40 py-3">
            18 / 01 / 2022
          </td>
          <td class="w-40 py-3">
            Pending
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      beneficiaries: ['Marvin Walters', 'Marilyn Munroe'],
      transferModal: false
    }
  },
  methods: {
    toggleNewTransferModal () {
      this.transferModal = !this.transferModal
    }
  }
}
</script>
