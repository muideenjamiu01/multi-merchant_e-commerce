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
                    class="mr-2 form-check-input appearance-none rounded-full h-4 w-4 border border-primary-blue bg-white checked:bg-primary-blue checked:border-primary-blue focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                  />
                </div>
                <label for="saved-address">Use saved address</label>
              </div>
            </div>
          </div>

          <div class="mt-2">
            <button @click="openModal">Or ship to new address</button>
            <new-address-modal v-model="modalOpen"> </new-address-modal>
          </div>

          <div class="md:mt-10">
            <div class="mt-10">
              <h2 class="text-xl">Payment</h2>
              <hr class="mt-2" />
            </div>
            <section>
              <div class="flex justify-between items-center mt-6">
                <span>Subtotal</span>
                <span>NGN {{ totalPrice }}</span>
              </div>
              <div class="mt-6 flex justify-between border-b pb-2">
                <p class="">Shipping Method</p>
                <select name="" id="" class="" v-model="shippingFee">
                  <option value="500">Standard Shipping ₦500</option>
                  <option value="1000">Fast Shipping ₦1000</option>
                </select>
              </div>
              <div class="flex justify-between items-center mt-6">
                <span class="font-semibold">Total</span>
                <span class="text-primary-blue font-medium">
                  NGN {{ sumTotal }}</span
                >
              </div>
              <div class="mt-8 flex justify-center">
                <app-button
                  @click.prevent="initializePaystack"
                  type="submit"
                  size="medium"
                  variant="contained"
                  color="primary"
                  >Proceed To Make Payment</app-button
                >
              </div>
            </section>
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
import { mapGetters } from "vuex";

import NewAddressModal from "~/components/newAddressModal.vue";
export default {
  middleware: "auth",
  components: { NewAddressModal },
  data() {
    return {
      email: "",
      amount: "",
      props: [],
      SelectedAddress: "",
      modalOpen: false,
      shippingFee: "",
    };
  },
  computed: {
    ...mapGetters({
      cart: "cart/cartProducts",
      totalPrice: "cart/cartTotalPrice",
      itemsCount: "cart/cartItemsCount",
      orderId: "orders/getOrderId",
    }),
    sumTotal() {
      return Number(this.totalPrice) + Number(this.shippingFee);
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
  },
  methods: {
    saveAddress() {
      console.log();
    },
    openModal() {
      this.modalOpen = !this.modalOpen;
    },
    initializePaystack() {
      const transId = this.orderId;
	  console.log(this.orderId)
      this.$paystack({
        key: "pk_test_2691da63d4da3f3e0839ba27151b097ef6019781", // Replace with your public key.
        email: this.$auth.user.email,
        amount: Math.floor(this.sumTotal * 100),
        ref: transId,
        currency: "NGN",
        callback: () => {
          //   // Do something.
          let res = this.$axios.get(`/api/payments/verify/${transId}`);
          let data = res.data;
          
        },
        onClose: () => {
          // Do something.
          console.log("Payment Closed"); 
        },
      });
    },
  },
};
</script>

<style></style>
