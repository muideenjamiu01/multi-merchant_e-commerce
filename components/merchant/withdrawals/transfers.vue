<template>
  <div class="my-8 shadow">
    <div class="whites relative flex items-center px-4 sm:px-0 sm:min-h-[64px] min-h-[56px] sm:pl-4 sm:pr-2">
      <span class="text-2xl capitalize font-medium m-0 flex-[1_1_100%]">
        {{title}}
      </span>
      <app-button size="small" variant="contained" @click="toggleNewTransferModal">
        Make Transfer
      </app-button>
    </div>

    <div
      v-if="transferModal"
      class="fixed inset-0 bg-black/30 flex justify-center items-center z-10 text-sm"
      @click="toggleNewTransferModal"
    >
      <div class="bg-white p-4 w-full max-w-md" @click.stop="">
        <h1 class="p-4 border-b font-medium text-base">
          Make Transfer
        </h1>
        <form class="p-4" @submit.prevent="">
          <div class="mb-4">
            <h1 class="text-base">
              Transfer to saved account details:
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

          <div class="flex justify-end mt-8">
            <app-button variant="outlined" color="secondary">
              Cancel
            </app-button>
              <app-button variant="contained" color="success" class="pl-4">
                Transfer
                </app-button>
          </div>
        </form>
      </div>
    </div>

    <div class="w-full overflow-x-auto">
    <table class="table w-full border-collapse">
      <thead class="table-head">
        <tr class="text-inherit table-row align-middle outline-0">
          <th v-for="name in columns" :key="name" class="font-medium text-sm leading-6 table-cell text-center p-4 border-b border-solid border-b-secondary-200 tracking-[0.01em] text-secondary-800">
            <span class="relative p-0 border-0 m-0 bg-transparent box-border outline-0 rounded-none select-none align-middle no-underline text-inherit inline-flex justify-start items-center">{{name}}</span>
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="row in data" :key="row.id" class="text-inherit table-row align-middle outline-0">
          <td class="td border-b border-solid border-b-secondary-200 text-secondary-800">
            {{row.id}}
          </td>
          <td class="td border-b border-solid border-b-secondary-200 text-secondary-800">
            {{row.accountName}}
          </td>
          <td class="td border-b border-solid border-b-secondary-200 text-secondary-800">
            {{row.accountNo}}
          </td>
          <td class="td border-b border-solid border-b-secondary-200 text-secondary-800">
            {{Math.ceil(row.amount / 100)}}
          </td>
          <td class="td border-b border-solid border-b-secondary-200 text-secondary-800">
            {{new Date(row.created_on).toLocaleDateString("en-US")}}
          </td>
          <td class="td border-b border-solid border-b-secondary-200 text-secondary-800">
            {{row.status}}
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'columns', 'data'],
  data () {
    return {
      beneficiaries: ['Marvin Walters', 'Marilyn Munroe'],
      transferModal: false
    }
  },
  methods: {
    toggleNewTransferModal () {
      this.transferModal = !this.transferModal
    },
  }
}
</script>

<style scoped>
.table {
  display: table;
  border-spacing: 0;
  min-width: 650px;
}

.table-head {
  display: table-header-group;
}

.table-body {
  display: table-row-group;
}

.td {
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    vertical-align: inherit;
    text-align: center;
    padding: 16px;
  }
</style>