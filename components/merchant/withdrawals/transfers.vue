<template>
  <div class="mt-8">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">
        Transfers
      </h1>
      <app-button size="small" variant="contained" @click="toggleNewTransferModal">
        New Transfer
      </app-button>
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
            <app-button variant="outlined" color="secondary">
              Cancel
            </app-button>
            <div>
              <!-- <button
                class="py-2 px-4 border border-primary-blue text-primary-blue rounded"
              >
                Save and Transfer
              </button> -->
              <app-button variant="outlined" color="success">
                Save and Tranfer
                </app-button>
              <!-- <button class="py-2 px-4 bg-primary-blue text-white rounded">
                Transfer
              </button> -->
              <app-button variant="contained" color="success">
                Transfer
                </app-button>
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
          <th v-for="name in columns" :key="name" class="pb-3">
            {{name}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.id" class="border-b cursor-pointer">
          <td class="w-40 py-3">
            {{row.id}}
          </td>
          <td class="w-40 py-3">
            {{row.accountName}}
          </td>
          <td class="w-40 py-3">
            {{row.accountNo}}
          </td>
          <td class="w-40 py-3">
            {{row.amount}}
          </td>
          <td class="w-40 py-3">
            {{row.created_on}}
          </td>
          <td class="w-40 py-3">
            {{row.status}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue"

  export default {
    components: {
      'app-button': AppButton
    },
    props: ['columns', 'data'],
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
