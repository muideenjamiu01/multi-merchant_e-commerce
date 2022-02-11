<template>
  <div class="mt-12">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">
        Beneficiaries
      </h1>
      <!-- <button
        @click="toggleAddNew"
        class="bg-primary-blue text-white text-sm py-2 px-4 rounded"
      >
        New
      </button> -->
      <AppButton button-text="New" color="fillbutton" size="sm" rounded @click="toggleAddNew" />
    </div>

    <div
      v-if="newBeneficiaryModal"
      class="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center text-sm"
      @click="toggleAddNew"
    >
      <div class="bg-white w-full max-w-md" @click.stop="">
        <h1 class="p-4 border-b font-medium text-base">
          Make Transfer
        </h1>
        <form class="p-4" @submit.prevent="">
          <div class="space-y-4">
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
          <div class="text-sm flex justify-end mt-8">
            <!-- <button @click="toggleAddNew" class="py-2 px-4">Cancel</button> -->

            <AppButton button-text="Cancel" color="outlinegray" size="md" rounded @click="toggleAddNew" />
            <!-- <button class="py-2 px-4 bg-primary-blue text-white rounded">
              Add Beneficiary
            </button> -->
            <AppButton button-text="Add Beneficiary" color="fillbutton" size="md" rounded />
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
            Account Name
          </th>
          <th class="pb-3">
            Account Number
          </th>
          <th class="pb-3">
            Name of Bank
          </th>
          <th class="pb-3">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in 3" :key="b" class="border-b">
          <td class="w-40 py-3">
            Marvin Walters
          </td>
          <td class="w-40 py-3">
            4839052885
          </td>
          <td class="w-40 py-3">
            Wema Bank
          </td>
          <td class="w-40 py-3">
            18 / 01 / 2022
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
      newBeneficiaryModal: false
    }
  },
  methods: {
    toggleAddNew () {
      this.newBeneficiaryModal = !this.newBeneficiaryModal
    }
  }
}
</script>
