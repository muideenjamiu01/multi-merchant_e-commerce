<template>
  <div class="container mx-auto py-8 xs:px-8">
    <div class="mt-4">
      <h1 class="text-2xl font-normal text-black">Merchant Center</h1>
      <p class="text-base font-normal text-black">
        Register and start selling today - create your own seller account.
      </p>
    </div>
    <div class="mt-8">
      <h1 class="text-xl">Create Seller Account</h1>
      <hr class="mt-2" />
    </div>
    <form class="mt-6" @submit.prevent="createMerchant">
      <div class="w-full">
        <div class="md:flex justify-between gap-8">
          <div class="md:w-1/2">
            <div>
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Name of store</label
              >
              <input
                id="storeName"
                type="text"
                class="
                  border
                  text-sm
                  focus:outline-primary-blue
                  block
                  w-full
                  p-2.5
                "
                v-model.trim="sellerAccountDetails.storeName"
              />
              <p class="mt-2 text-sm text-gray-400">
                Choose a unique name for your online shop: this is the name that
                will appear on our marketplace! It is forbidden to use a
                registered trademark in your shop name without the brand
                authorization.
              </p>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="mt-6 md:mt-0">
              <label for="shop-name" class="block mb-2 text-sm font-medium">Email Address</label>
              <input
                v-model.trim="sellerAccountDetails.email"
                id="email"
                type="text"
                class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5" />
              <p class="mt-2 text-sm text-gray-400">
                Your account will be linked to this email address and we will
                use it to send all our communications.
              </p>
            </div>
          </div>
        </div>
        
        <div class="md:flex justify-between gap-8 mt-4">
         
          <div class="mt-4 md:w-1/2">
            <div>
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Phone Number</label
              >
              <input
                id="phone"
                type="text"
                class="
                  border border-gray-200
                  text-sm
                  focus:outline-primary-blue
                  block
                  w-full
                  p-2.5
                "
                v-model.trim="sellerAccountDetails.phoneNo"
              />
              <p class="mt-2 text-sm text-gray-400">
                When we need to contact you urgently, this is the number we will
                call.
              </p>
            </div>
          </div>
		  <div class="mt-4 md:w-1/2">
            <div>
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Address</label
              >
              <input
                id="address"
                type="text"
                class="
                  border border-gray-200
                  text-sm
                  focus:outline-primary-blue
                  duration-200
                  block
                  w-full
                  p-2.5
                "
                v-model.trim="sellerAccountDetails.address"
              />
              <p class="mt-2 text-sm text-gray-400">
                The location of your business.
              </p>
            </div>
          </div>
        </div>
        <div class="md:flex justify-between gap-8">
         
          <div class="mt-4 md:w-1/2">
            <div>
              <label for="password" class="block mb-2 text-sm font-medium"
                >Password</label
              >
              <input
                id="confirm-password"
                type="password"
                class="
                  border border-gray-200
                  text-sm
                  focus:outline-primary-blue
                  block
                  w-full
                  p-2.5
                "
                v-model.trim="sellerAccountDetails.password"
              />
              <p class="mt-2 text-sm text-gray-400">
                At least 8 characters containing a capital letter, a lower
                letter and a numeric character
              </p>
            </div>
          </div>
        </div>

      </div>
      <div class="flex mt-6">
        <div>
          <input
            type="radio"
            id="terms"
            value="yes"
            v-model="terms"
            class="mr-4"
          />
        </div>
        <div class="">
          <p>
            I acknowledge that I have read and hereby accept the terms and
            conditions in Youstore's <br />
            <span class="text-primary-blue"
              >third party partners', Terms of Use, Merchant Agreement
              <span class="text-black">and</span> Privacy Policy</span
            >
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center mt-8">
        <app-button
        type='submit'
          uppercase
          variant="contained"
          size="large"
          :disabled="loading"
        >
          {{ loading ? "Loading" : "Get Started" }}
          <loading-spinners
            v-if="loading"
            size="small"
            color="white"
            class="mx-4"
          ></loading-spinners>
        </app-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data() {
    return {
      loading: false,
      error: null,
      terms: false,
      sellerAccountDetails: {
        storeName: "",
        email: "",
        logo: "",
        banner: "",
        fullName: "",
        phoneNo: "",
        address: "",
        password: "",
        bankName: "",
        accountName: "",
        accountNo: "",
        // 
      },
    };
  },
  methods: {
    async createMerchant() {
      this.loading = true;
      console.log("submitting");

      try {
        await this.$axios.post(
          "/api/users/v1/merchants/",
          this.sellerAccountDetails,
          {
            params: {
              user_key: "4fbc6c112a19f295d08dfc27f36333b6",
            },
          }
        );

        window.localStorage.setItem("ys.user_type", "merchant");
        const { email, password } = this.sellerAccountDetails;

        await this.$auth.loginWith("local", {
          data: { email, password },
          params: { userType: "merchant" },
        });

        this.sellerAccountDetails.storeName = "";
        this.sellerAccountDetails.email = "";
        this.sellerAccountDetails.logo = "";
        this.sellerAccountDetails.banner = "";
        this.sellerAccountDetails.fullName = "";
        this.sellerAccountDetails.phoneNo = "";
        this.sellerAccountDetails.address = "";
        this.sellerAccountDetails.password = "";
        this.sellerAccountDetails.bankName = "";
        this.sellerAccountDetails.accountName = "";
        this.sellerAccountDetails.accountNo = "";

        this.$router.push("/merchant/dashboard");
        this.$toast.success("Registration Succesful!!");
      } catch (err) {
        this.error = err.response.data.msg;
        window.localStorage.removeItem("ys.user_type");
      } finally {
        this.loading = false;
      }
    },
    closeErrorMessage() {
      this.error = null;
    },
  },
};
</script>
