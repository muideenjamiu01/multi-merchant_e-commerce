<template>
  <div>
    <div class="hidden lg:block bg-primary-blue-light w-96 p-4">
      <h1 class="pt-2">Order Summary</h1>
      <p class="my-3 text-gray-400">{{ length }} items in cart</p>
      <div>
        <div
          v-for="item in 3"
          :key="item"
          class="flex justify-start items-start gap-2 mt-4"
        >
          <div>
            <img src="" alt="" class="w-12 h-12" />
          </div>
          <div>
            <div class="flex justify-between items-center gap-8">
              <p>Women's Los Angeles C...</p>
              <p>23958.00</p>
            </div>
            <div>quantity:1</div>
            <div>size:large</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between items-center mt-6">
        <span>Subtotal</span>
        <span>402080.00</span>
      </div>
      <div class="flex justify-between items-center mt-4">
        <span>Shipping and handling</span>
        <span>2080.00</span>
      </div>
      <p class="text-gray-400 text-xs">
        International Shipping (8-10 <br />
        Days) - Flate Rate
      </p>
      <div class="flex justify-between items-center mt-6">
        <span>Total</span>
        <span>462080.00</span>
      </div>
      <div class="mt-10">
        <button type="submit" @click.prevent="initializePaystack">Make Payment</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed: {
		...mapGetters({
			email:'getUserEmail',
			length: 'getNumberOfProducts',
			total:'getTotal'

		}),
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
    
    initializePaystack() {
      this.$paystack({
        key: "pk_test_1439df5ec859471cd4e3d8405a5b7dea45667b48", // Replace with your public key.
        email: this.email,
        amount: this.amount * 100,
        ref: "",
        currency: "NGN",
        callback: () => {
          // Do something.
          console.log(response);
        },
        onClose: () => {
          // Do something.

          console.log("Payment Closed");
        },
      });
    },
}
}
</script>

<style lang="scss" scoped></style>
