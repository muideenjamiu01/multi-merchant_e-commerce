<template>
  <div class="box-border container mx-auto py-4 px-2">
    <div class="w-full md:flex gap-16 mt-6">
      <div class="md:w-2/3">
        <div>
          <h1 class="text-2xl font-normal text-black">Checkout</h1>
          <div class="mt-10">
            <h2 class="text-xl">Shipping Information</h2>
            <hr class="mt-2" />
          </div>
        </div>

        <h3 class="mt-6">Use saved address</h3>

        <div>
          <div class="md:flex justify-between gap-8 mt-4">
            <div class="md:md:w-1/2">
              <div class="flex">
                <div>
                  <input
                    type="radio"
                    id="primary-address"
                    value="Primary address"
                    name="radio"
                    v-model="SelectedAddress"
                    class="mr-2 hidden"
                  />
                </div>
                <label
                  for="primary-address"
                  class="flex items-center cursor-pointer text-xl"
                >
                  <span
                    class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink"
                  ></span>
                  Primary address</label
                >
              </div>
            </div>

            <div class="mt-4 md:mt-0 md:md:w-1/2">
              <div class="flex">
                <div>
                  <input
                    type="radio"
                    id="home-address"
                    value="Home address"
                    v-model="SelectedAddress"
                    class="mr-2 bg-primary-blue"
                  />
                </div>
                <label for="home-address">Home address</label>
              </div>
            </div>
          </div>

          <div class="mt-2">
            <NuxtLink to="/">Or ship to new address</NuxtLink>
          </div>

          <form action="" @submit.prevent="saveAddress">
            <div class="md:flex justify-between gap-8">
              <div class="mt-4 md:w-1/2">
                <div>
                  <label for="shop-name" class="block mb-2 text-sm font-medium"
                    >Street Address</label
                  >
                  <input
                    type="text"
                    id="street-address"
                    name="street-address"
                    v-model="streetAddress"
                    class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  />
                </div>
              </div>
              <div class="mt-4 md:w-1/2">
                <div>
                  <label for="shop-name" class="block mb-2 text-sm font-medium"
                    >City / LGA</label
                  >
                  <input
                    type="text"
                    id="city-lga"
                    name="city-lga"
                    v-model="cityLga"
                    class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  />
                </div>
              </div>
            </div>
            <div class="md:flex justify-between gap-8">
              <div class="mt-4 md:w-1/2">
                <div>
                  <label for="shop-name" class="block mb-2 text-sm font-medium"
                    >State</label
                  >
                  <input
                    type="text"
                    id="state"
                    name="state"
                    v-model="state"
                    class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  />
                </div>
              </div>
              <div class="mt-4 md:w-1/2">
                <div>
                  <label for="shop-name" class="block mb-2 text-sm font-medium"
                    >Zip / postal code</label
                  >
                  <input
                    type="text"
                    id="zip-postal-code"
                    name="zip-postal-code"
                    v-model="zipPostalCode"
                    class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                  />
                </div>
                <div class="flex justify-end items-end mt-4">
                  <button
                    class="border-2 border-primary-blue rounded-lg font-bold text-primary-blue px-6 py-1 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div class="md:mt-10">
            <div class="mt-10">
              <h2 class="text-xl">Payment</h2>
              <hr class="mt-2" />
            </div>
            <h3 class="mt-6">Use saved details</h3>
            <div class="md:flex justify-between gap-8 mt-4">
              <div class="md:w-1/2">
                <div class="flex">
                  <div>
                    <input
                      type="radio"
                      id="auxillary-card"
                      value="Auxillary Card"
                      v-model="paymentMethod"
                      class="mr-2"
                    />
                  </div>
                  <label for="auxillary-card">Auxillary card</label>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:w-1/2">
                <div class="flex">
                  <div>
                    <input
                      type="radio"
                      id="main-account"
                      value="main-account"
                      v-model="paymentMethod"
                      class="mr-2"
                    />
                  </div>
                  <label for="main-account">Main account</label>
                </div>
              </div>
            </div>
            <div class="md:flex justify-between gap-8 mt-4">
              <div class="md:w-1/2">
                <div class="mt-6">
                  <h2 class="text-xl">Use Debit Card</h2>
                  <hr class="mt-2" />
                </div>
                <form action="" @submit.prevent="saveDebitCard">
                  <div class="md:flex justify-between gap-4">
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="card-number"
                          class="block mb-2 text-sm font-medium"
                          >Card number</label
                        >
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          v-model="cardDetails.cardNumber"
                          class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        />
                      </div>
                    </div>
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="expiry"
                          class="block mb-2 text-sm font-medium"
                          >Expiry</label
                        >
                        <input
                          type="text"
                          id="expiry-date"
                          name="expiry"
                          v-model="cardDetails.expiryDate"
                          class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="md:flex justify-between gap-4">
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label for="cvv" class="block mb-2 text-sm font-medium"
                          >cvv</label
                        >
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          v-model="cardDetails.cVV"
                          class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        />
                      </div>
                    </div>
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label for="pin" class="block mb-2 text-sm font-medium"
                          >Pin</label
                        >
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          v-model="cardDetails.pin"
                          class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        />
                      </div>
                      <div class="flex justify-end items-end mt-4">
                        <button
                          class="border-2 border-primary-blue rounded-lg font-bold text-primary-blue px-6 py-1 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-white"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="md:w-1/2">
                <div class="mt-6">
                  <h2 class="text-xl">Use Bank Transfer</h2>
                  <hr class="mt-2" />
                </div>
                <form action="" @submit.prevent="saveBankDetail">
                  <div class="md:flex justify-between gap-4">
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="bank-name"
                          class="block mb-2 text-sm font-medium"
                          >Bank Name</label
                        >
                        <input
                          type="text"
                          id="bank-name"
                          name="bank-name"
                          v-model="bankData.bankName"
                          class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        />
                      </div>
                    </div>
                    <div class="mt-4 md:w-1/2">
                      <div>
                        <label
                          for="account-number"
                          class="block mb-2 text-sm font-medium"
                          >Account Number</label
                        >
                        <input
                          type="text"
                          id="account-number"
                          name="account-number"
                          v-model="bankData.accountNumber"
                          class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                        />
                      </div>
                      <div class="flex justify-end items-end mt-4">
                        <button
                          class="border-2 border-primary-blue rounded-lg font-bold text-primary-blue px-6 py-1 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-white"
                        >
                          Save
                        </button>
                      </div>
                      <div>
                        <div class="flex space-x-2 justify-center mt-16">
                          <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-primary-blue text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-primary-blue-dark hover:shadow-lg focus:bg-primary-blue focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-blue active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Make Order
                          </button>
                        </div>
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
export default {
  data() {
    return {
      //data for address input
      SelectedAddress: "", // for radio button

      streetAddress: "",
      cityLga: "",
      state: "",
      zipPostalCode: "",

      //binding of payment input
      paymentMethod: "", // for radio button
      cardDetails: {
        expiryDate: "12/2",
        cVV: "",
        pin: "",
        cardNumber: "",
      },

      //binding for bank transfer input
      bankData: {
        bankName: "",
        accountNumber: "",
      },
    };
  },
  methods: {
    saveAddress() {
      console.log("this is " + this.streetAddress);
    },
    saveDebitCard() {
      const cardDetail = {
        card,
      };
      console.log("this is");
    },
    saveBankDetail() {
      const userAccoutData = {
        bankName: this.bankData.bankName,
        accountNumber: this.bankData.accountNumber,
      };

      console.log(userAccoutData);
    },
  },
};
</script>

<style>
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: #46b2c8;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #46b2c8;
}
</style>
