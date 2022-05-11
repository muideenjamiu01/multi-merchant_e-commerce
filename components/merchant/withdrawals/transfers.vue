<template>
  <div class="my-8 shadow">
    <!-- Modal component -->
    <div
      v-if="transferModal"
      class="fixed inset-0 bg-black/30 flex justify-center items-center z-10 text-sm shadow-lg"
      @click="closeTransferModal"
    >
      <div class="bg-white w-full max-w-md" @click.stop="">
        <h1 class="p-4 border-b font-medium text-base">
          Make Transfer
        </h1>

          <div
            v-if="error"
            class="
              flex
              relative
              items-center
              text-error-900
              my-4
              rounded
              bg-error-50
              w-full
            "
          >
            <span class="text-center flex-grow p-2">{{ error }}</span>
            <icon-button
              @click="closeErrorMessage"
              size="small"
              class="hover:bg-error-100 rounded-full"
            >
              <cancel-icon></cancel-icon>
            </icon-button>
          </div>

        <form class="p-4" @submit.prevent="handleTransfer">
          <legend class="font-medium my-4">Transfer to</legend>
          <div v-if="hasSavedAccountDetails" class="mb-8 flex items-center">
            <span class="h-full w-1/2">
            <input id="savedAccount" v-model="transferTo" type="radio" value="saved" class="sr-only" checked>
            <label for="savedAccount" class="border border-solid border-secondary-200 flex items-center justify-center h-10 bg-transparent px-[15px] py-[5px] text-sm outline-0">Saved account</label>
</span>
            <span class="h-full w-1/2">
            <input id="newAccount" v-model="transferTo" type="radio" value="another" class="sr-only">
            <label for="newAccount" class="border border-solid border-secondary-200 flex items-center justify-center h-10 bg-transparent px-[15px] py-[5px] text-sm outline-0">Another account</label>
          </span>
          </div>

            <div class="my-4">
                <label for="amount">Amount to Transfer</label>
                <input
                      id="amount"
                      v-model="transferFields.amount"
                      type="number"
                      class="
                        flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full
                      " required
                    />
              </div>

            <div v-if="transferTo === 'another'" class="my-4">
              <label for="accNum">Account Number</label>
              <input
              id="accNum"
                type="text"
                v-model="transferFields.account_number"
                class="flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full" required
              >
            </div>

            <div v-if="transferTo === 'another'" class="my-4">
                <label for="bank-select" class="block mb-2 text-sm font-medium"
                  >Select your bank</label
                >
                <select id="bank-select" v-model.trim="transferFields.bank_code" name="banks" class="
                    flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:bg-primary-100
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full" required>
                  <option value="" disabled>--Select a bank--</option>
                  <option v-for="bank in banks" :key="bank.code" :value="bank.name">{{bank.name}}</option>
                </select>
            </div>

          <div class="flex justify-end mt-8 gap-4">
            <app-button variant="outlined" color="secondary" @click="closeTransferModal">
              Cancel
            </app-button>
              <app-button variant="contained" color="success" :disabled="loading" type="submit" class="pl-4">
                {{loading ? 'Transferring' : 'Transfer'}}
                <loading-spinners v-if="loading" size="small" color="white" class="mx-4"></loading-spinners>
                </app-button>
          </div>
        </form>
      </div>
    </div>
    <!-- End modal -->
    <app-table :columns="columns" :data="data">
      <template #toolbar>
        <table-toolbar :title="title">
          <template #buttons>
            <app-button size="small" variant="contained" @click="setTransferModal">
              Make Transfer
            </app-button>
          </template>
        </table-toolbar>
      </template>

      <template #tr-head>
        <table-row>
          <table-cell v-for="column in columns" :key="column" variant="th">
            {{ column }}
          </table-cell>
        </table-row>
      </template>

      <template #tr-body>
        <table-row v-for="(row, ind) in data" :key="ind">
          <table-cell>{{ row.id }}</table-cell>
          <table-cell>{{ row.accountName }}</table-cell>
          <table-cell>{{ row.accountNumber }}</table-cell>
          <table-cell align="right">{{ row.amount }}</table-cell>
          <table-cell>{{ new Date(row.date).toLocaleDateString("en-US") }}</table-cell>
          <table-cell>{{ row.status }}</table-cell>
        </table-row>
      </template>
    </app-table>
  </div>
</template>

<script>
import AppTable from "@/components/Table"
import CancelIcon from "@/components/svg/Cancel.vue"

  export default {
  components: {
    AppTable,
    "cancel-icon": CancelIcon,
  },
    props: ['title', 'columns', 'data'],
  data () {
    return {
      transferModal: false,
      loading: false,
      error: null,
      transferTo: '',
      transferFields: {
        bank_code: "",
        account_number: "",
        amount: 0
      },
      banks: [],
      withdrawals: window.localStorage.getItem("ys-transfers") || []
    }
  },
  computed: {
    hasSavedAccountDetails() {
      return !!this.$auth.user.accountNo && !!this.$auth.user.bankName
    }
  },
  methods: {
    setTransferModal() {
      this.transferModal = true
      this.fetchBanks()
    },
    closeTransferModal() {
      this.transferModal = false
      this.loading = false
      this.error = null
      this.transferTo = ''
      this.transferFields.amount = 0
      this.transferFields.bank_code = ""
      this.transferFields.account_number = ""
    },
    async fetchBanks() {
      const instance = this.$axios.create({
        baseURL: 'https://api.paystack.co',
        timeout: 10000,
        headers: {'Authorization': 'Bearer sk_test_55ceccf870fc585f49df71a6decd01ff457c583c'}
      })

      try {
        const response = await instance.get('/bank', {
          params: { country: 'nigeria', currency: "NGN" }
        })

        this.banks = response.data.data
        return 
      } catch(error) {
        this.error = error.response.data.message || null
      }
    },
    getBankCode(name) {
      if (this.banks.length > 0) {
        return this.banks.filter(bank => bank.name === name)[0].code
      } else {
        this.transferModal = false
        this.$toast.error("Couldn't fetch list of banks, please try again.")
      }
    },
    validateTransferFields() {
      if (!this.transferTo) {
        return "Please select a button below to transfer to your saved account details or to another account."  
      }
      // if (this.transferFields.amount > this.$auth.user.balance) {
      //   return "You cannot withdraw more than your available balance"
      // }

      if (this.transferFields.amount < 10000) {
        return "You cannot withdraw less than 10000 NGN"
      }

      if (this.transferTo === 'another') {
        if (this.transferFields.account_number.length !== 10) {
        console.log(this.transferFields.account_number.length)
          return "Account number must be 10 digits"
        }
      }
    },
    closeErrorMessage() {
      this.error = null
    },
    async handleTransfer() {
      const err = this.validateTransferFields()

      if (err) {
        this.error = err
        return
      }

      this.loading = true
 
      if (this.transferTo === 'saved') {
        this.transferFields.account_number = this.$auth.user.accountNo
        this.transferFields.bank_code = this.getBankCode(this.$auth.user.bankName)
      }

      const payload = {
          id: "403904032",
          accountName: this.$auth.user.accountName,
          accountNumber: this.transferFields.account_number,
          amount: this.transferFields.amount,
          date: new Date(Date.now()).toISOString(),
          status: "pending"}
      console.log(payload)

      try {
        const response = await this.$axios.post('/api/payments/transfer', {
          name: this.$auth.user.accountName,
          amount: this.transferFields.amount,
          account_number: this.transferFields.account_number,
          bank_code: this.transferFields.bank_code,
          customerId: this.$auth.user._id
        })

        this.transferModal = false
        window.localStorage.setItem("ys-transfers", [{
          id: response.data.data.reference,
          accountName: this.$auth.user.accountName,
          accountNumber: this.transferFields.account_number,
          amount: this.transferFields.amount,
          date: new Date(Date.now()).toISOString(),
          status: "pending"
        }, ...this.withdrawals])
        this.$toast.success(response.data.message)
      } catch (error) {
        console.log(error)
        this.error = error.response.data.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
input:checked ~ label {
  border: 2px solid #EBF8FE;
  background-color: #EBF8FE
}
</style>