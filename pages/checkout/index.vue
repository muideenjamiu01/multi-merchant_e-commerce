<template>
  <div class="box-border container mx-auto py-4 px-2">
    <div class="w-full md:flex gap-16 mt-6">
      <div class="md:w-2/3">
        <div>
          <h1 class="text-2xl font-normal text-black">
            Checkout
          </h1>
          <div class="mt-10">
            <h2 class="text-xl">
              Shipping Information
            </h2>
            <hr class="mt-2">
          </div>
        </div>

        <h3 class="mt-6">
          Use saved address
        </h3>

        <div>
          <div class="md:flex justify-between gap-8 mt-4">
            <div class="md:md:w-1/2">
              <div class="flex">
                <div>
                  <input
                    id="primary-address"
                    v-model.trim="SelectedAddress"
                    type="radio"
                    value="Primary address"
                    name="radio"
                    class="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary-blue checked:border-primary-blue focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  >
                </div>
                <label for="primary-address"> Primary address</label>
              </div>
            </div>

            <div class="mt-4 md:mt-0 md:md:w-1/2">
              <div class="flex">
                <div>
                  <input
                    id="home-address"
                    v-model.trim="SelectedAddress"
                    type="radio"
                    value="Home address"
                    class="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary-blue checked:border-primary-blue focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  >
                </div>
                <label for="home-address">Home address</label>
              </div>
            </div>
          </div>

          <div class="mt-2">
            <NuxtLink to="/">
              Or ship to new address
            </NuxtLink>
          </div>

          <form action="" @submit.prevent="saveAddress">
            <div class="md:flex justify-between gap-8">
              <div class="mt-4 md:w-1/2">
                <div>
                  <label
                    for="shop-name"
                    class="block mb-2 text-sm font-medium"
                  >Street Address</label>
                  <input
                    id="street-address"
                    v-model.trim="streetAddress"
                    type="text"
                    name="street-address"
                    class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  >
                </div>
              </div>
              <div class="mt-4 md:w-1/2">
                <div>
                  <label
                    for="shop-name"
                    class="block mb-2 text-sm font-medium"
                  >City / LGA</label>
                  <input
                    id="city-lga"
                    v-model="cityLga"
                    type="text"
                    name="city-lga"
                    class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  >
                </div>
              </div>
            </div>
            <div class="md:flex justify-between gap-8">
              <div class="mt-4 md:w-1/2">
                <div>
                  <label
                    for="shop-name"
                    class="block mb-2 text-sm font-medium"
                  >State</label>
                  <input
                    id="state"
                    v-model.trim="state"
                    type="text"
                    name="state"
                    class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  >
                </div>
              </div>
              <div class="mt-4 md:w-1/2">
                <div>
                  <label
                    for="shop-name"
                    class="block mb-2 text-sm font-medium"
                  >Zip / postal code</label>
                  <input
                    id="zip-postal-code"
                    v-model.trim="zipPostalCode"
                    type="text"
                    name="zip-postal-code"
                    class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  >
                </div>
                <div class="flex justify-end items-end mt-4">
                  <!-- <button
                    class="border-2 border-primary-blue rounded-lg font-bold text-primary-blue px-6 py-1 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-white"
                  >
                    Save
                  </button> -->
                  <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
                </div>
              </div>
            </div>
          </form>
          <div class="md:mt-10">
            <div class="mt-10">
              <h2 class="text-xl">
                Payment
              </h2>
              <hr class="mt-2">
            </div>
            <h3 class="mt-6">
              Use saved details
            </h3>
            <div class="md:flex justify-between gap-8 mt-4">
              <div class="md:w-1/2">
                <div class="flex">
                  <div>
                    <input
                      id="auxillary-card"
                      v-model.trim="paymentMethod"
                      type="radio"
                      value="Auxillary Card"
                      class="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary-blue checked:border-primary-blue focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    >
                  </div>
                  <label for="auxillary-card">Auxillary card</label>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:w-1/2">
                <div class="flex">
                  <div>
                    <input
                      id="main-account"
                      v-model.trim="paymentMethod"
                      type="radio"
                      value="main-account"
                      class="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-primary-blue bg-white checked:bg-primary-blue checked:border-primary-blue focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    >
                  </div>
                  <label for="main-account">Main account</label>
                </div>
              </div>
            </div>
            <div class="md:flex justify-between gap-8 mt-4">
              <div class="md:w-1/2">
                <div class="mt-6">
                  <h2 class="text-xl">
                    Use Debit Card
                  </h2>
                  <hr class="mt-2">
                </div>
                <form action="" @submit.prevent="saveDebitCard">
                  <div class="md:flex justify-between gap-4">
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="card-number"
                          class="block mb-2 text-sm font-medium"
                        >Card number</label>
                        <input
                          id="card-number"
                          v-model.trim="cardDetails.cardNumber"
                          type="text"
                          name="card-number"
                          class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        >
                      </div>
                    </div>
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="expiry"
                          class="block mb-2 text-sm font-medium"
                        >Expiry</label>
                        <input
                          id="expiry-date"
                          v-model.trim="cardDetails.expiryDate"
                          type="text"
                          name="expiry"
                          class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        >
                      </div>
                    </div>
                  </div>
                  <div class="md:flex justify-between gap-4">
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="cvv"
                          class="block mb-2 text-sm font-medium"
                        >cvv</label>
                        <input
                          id="cvv"
                          v-model.trim="cardDetails.cVV"
                          type="text"
                          name="cvv"
                          class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        >
                      </div>
                    </div>
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="pin"
                          class="block mb-2 text-sm font-medium"
                        >Pin</label>
                        <input
                          id="pin"
                          v-model.trim="cardDetails.pin"
                          type="text"
                          name="pin"
                          class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        >
                      </div>
                      <div class="flex justify-end items-end mt-4">
                        <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="md:w-1/2">
                <div class="mt-6">
                  <h2 class="text-xl">
                    Use Bank Transfer
                  </h2>
                  <hr class="mt-2">
                </div>
                <form action="" @submit.prevent="saveBankDetail">
                  <div class="md:flex justify-between gap-4">
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="bank-name"
                          class="block mb-2 text-sm font-medium"
                        >Bank Name</label>
                        <input
                          id="bank-name"
                          v-model="bankData.bankName"
                          type="text"
                          name="bank-name"
                          class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        >
                      </div>
                    </div>
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="account-number"
                          class="block mb-2 text-sm font-medium"
                        >Account Number</label>
                        <input
                          id="account-number"
                          v-model.trim="bankData.accountNumber"
                          type="text"
                          name="account-number"
                          class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        >
                      </div>
                      <div class="flex justify-end items-end mt-4">
                        <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
                      </div>
                      <div>
                        <div class="flex space-x-2 justify-center mt-16">
                          <!-- <button
                            type ="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-primary-blue text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-primary-blue-dark hover:shadow-lg focus:bg-primary-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-blue active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Make Order
                          </button> -->
                          <AppButton button-text="Make order" color="fillbutton" size="md" rounded />
                        </div>
                        <div class="flex justify-center" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-1/3">
        <ContentsOrderSummary />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../../components/global/AppButton.vue'
export default {
  components: { AppButton },
  data () {
    return {
      // 		styleObject: {
    //     color: "red",
    //     fontSize: "130px",
    //   },
      // data for address input
      SelectedAddress: '',
      streetAddress: '',
      cityLga: '',
      state: '',
      zipPostalCode: '',
      // binding of payment input
      paymentMethod: '',
      cardDetails: {
        expiryDate: '12/2',
        cVV: '',
        pin: '',
        cardNumber: ''
      },
      // binding for bank transfer input
      bankData: {
        bankName: '',
        accountNumber: ''
      }
    }
  },
  methods: {
    saveAddress () {
      console.log('this is ' + this.streetAddress)
    },
    saveDebitCard () {
      const cardDetail = {
        card
      }
      console.log('this is')
    },
    saveBankDetail () {
      const userAccoutData = {
        bankName: this.bankData.bankName,
        accountNumber: this.bankData.accountNumber
      }
      console.log(userAccoutData)
    }
  }
}
</script>

<style>

</style>
