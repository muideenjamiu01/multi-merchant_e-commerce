<template>
  <app-container maxWidth="sm">
    <grid-container class="my-6 sm:my-8">
      <!-- <grid-item xs="fill"></grid-item> -->
      <grid-item xs="fill">
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
          <ValidationObserver slim>
              <ValidationProvider
                v-slot="{ errors }"
                name="storeName"
                rules="required||alpha_spaces"
                tag="div"
                class="my-8"
              >
                <label for="storeName" class="block mb-2 text-sm font-medium"
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
                <small class="mt-2 text-gray-400 block">
                  Choose a unique name for your online shop: this is the name
                  that will appear on our marketplace! It is forbidden to use a
                  registered trademark in your shop name without the brand
                  authorization.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="name"
                rules="required||alpha_spaces"
                tag="div"
                class="my-8"
              >
                <label for="name" class="block mb-2 text-sm font-medium"
                  >Your Name</label
                >
                <input
                  id="name"
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
                  v-model.trim="sellerAccountDetails.accountName"
                />
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="required||email"
                tag="div"
                class="my-8"
              >
                <label for="shop-name" class="block mb-2 text-sm font-medium"
                  >Email Address</label
                >
                <input
                  v-model.trim="sellerAccountDetails.email"
                  id="email"
                  type="email"
                  class="
                    border border-gray-200
                    text-sm
                    focus:outline-primary-blue
                    block
                    w-full
                    p-2.5
                  "
                />
                <small class="mt-2 text-gray-400 block">
                  Your account will be linked to this email address and we will
                  use it to send all our communications.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="phone"
                rules="required||digits:11"
                tag="div"
                class="my-8"
              >
                <label for="phone" class="block mb-2 text-sm font-medium"
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
                <small class="mt-2 text-gray-400 block">
                  When we need to contact you urgently, this is the number we
                  will call.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="address"
                rules="required"
                tag="div"
                class="my-8"
              >
                <label for="address" class="block mb-2 text-sm font-medium"
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
                <small class="mt-2 text-gray-400 block">
                  The location of your business.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="password"
                rules="required||min:6"
                tag="div"
                class="my-8"
              >
                <label for="password" class="block mb-2 text-sm font-medium"
                  >Password</label
                >
                <input
                  id="password"
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
                <small class="mt-2 text-sm text-gray-400">
                  At least 6 characters.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            <div class="mx-auto xs:max-w-xs mt-8">
              <app-button
                type="submit"
                uppercase
                variant="contained"
                size="large"
                :disabled="loading"
                fullWidth
              >
                {{ loading ? "Submitting" : "Get Started" }}
                <loading-spinners
                  v-if="loading"
                  size="small"
                  color="white"
                  class="mx-4"
                ></loading-spinners>
              </app-button>
            </div>
          </ValidationObserver>
        </form>
      </grid-item>
      <!-- <grid-item xs="fill"></grid-item> -->
    </grid-container>
  </app-container>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";

export default {
  layout: "empty",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
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
        accountName: "",
        phoneNo: "",
        address: "",
        password: "",
      },
    };
  },
  methods: {
    async createMerchant() {
      this.loading = true;

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
        this.sellerAccountDetails.accountName = "";
        this.sellerAccountDetails.phoneNo = "";
        this.sellerAccountDetails.address = "";
        this.sellerAccountDetails.password = "";

        this.$router.push("/merchant/dashboard");
        this.$toast.success("Registration Succesful!!");
      } catch (err) {
        this.error = err.response.data.msg;
        window.localStorage.removeItem("ys.user_type");
        this.$toast.error(err.repsonse.data.msg);
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
