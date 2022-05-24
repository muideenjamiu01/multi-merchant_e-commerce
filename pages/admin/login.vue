<template>
  <div
    class="
      relative
      w-full
      h-full
      after:fixed
      after:h-[70vh]
      after:-z-10
      after:top-0
      after:-skew-y-12
      after:origin-top-left
      after:bg-primary-400
      after:w-full
    "
  >
    <div
      class="
        min-h-[100vh]
        border-box
        flex
        w-full
        flex-row flex-wrap
        items-center
        justify-center
      "
    >
      <div
        class="
          box-border
          m-0
          flex-0
          max-w-full
          flex-row
          grow
          basis-0
          flex
          justify-center
        "
      >
        <div
          class="
            w-full
            px-6
            py-10
            sm:m-8
            bg-white
            shadow-md
            sm:px-10 sm:py-12
            max-w-lg
          "
        >
          <div class="h-10">
            <nuxt-link to="/" class="mr-6">
              <brand-logo class="!w-full !h-full" />
            </nuxt-link>
          </div>

          <p class="text-center font-medium my-6">Log in to your account</p>

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

          <form @submit.prevent="handleSubmit" class="flex flex-col text-left">
            <text-input v-model="input.email" type="email" name="email" required>
              email
            </text-input>

            <text-input
              v-model="input.password"
              type="password"
              name="password"
              required
            >
              password
            </text-input>

            <app-button class="capitalize" type="submit" variant="contained" color="primary" size="large" :disabled="loading" fullWidth uppercase>
                {{loading ? 'Loading' : 'login'}}
                <loading-spinners v-if="loading" size="small" color="white" class="mx-4"></loading-spinners>
            </app-button>
          </form>

          <p class="text-primary-blue text-sm my-4">
            <nuxt-link to="/auth/forgot-password?user=admin"
              >Forgot your password?</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/svg/Cancel.vue"
import BrandLogo from "@/components/svg/Logo";

export default {
  layout: "authpages",
  name: "MerchantLogin",
  components: {
    "brand-logo": BrandLogo,
    "cancel-icon": CancelIcon,
  },
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      loading: false,
      error: null,
    };
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
       window.localStorage.setItem("ys.user_type", "admin")
       
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.input,
          params: { userType: "admin" },
        });
        this.input.email = '';
        this.input.password = '';
        this.$router.push('/admin/dashboard')
        this.$toast.success('Login Succesful!!')
        this.$auth.$storage.setUniversal('user', response.data.data, true)
      } catch (err) {
        this.error = err.response.data.msg
       window.localStorage.removeItem("ys.user_type", "admin")
      }
      finally {
        this.loading = false
      }
    },
    closeErrorMessage() {
      this.error = null;
    },
  },
  // beforeMount() {
  //   if (this.$auth.loggedIn) {
  //     this.$router.go(-1);
  //   }
  // }
};
</script>
