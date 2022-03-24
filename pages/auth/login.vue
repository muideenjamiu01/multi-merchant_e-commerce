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

          <form @submit.prevent="loginUser" class="flex flex-col text-left">
            <div class="mb-4">
              <label class="mb-2 capitalize" for="email">Email</label>
              <input
                class="
                  w-full
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
                "
                v-model="input.email"
                name="email"
                type="email"
                id="email"
              />
            </div>

            <div class="mb-4">
              <label class="mb-2 capitalize" for="password">Password</label>
              <input
                class="
                  w-full
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
                "
                v-model="input.password"
                name="password"
                type="password"
                id="password"
              />
            </div>

            <app-button class="" type="submit" variant="contained" color="primary" size="large" :disabled="loading" fullWidth uppercase>
                {{loading ? 'Loading' : 'login'}}
                <loading-spinners v-if="loading" size="small" color="white" class="mx-4"></loading-spinners>
            </app-button>
          </form>

          <p class="text-primary-500 text-sm my-4">
            <nuxt-link to="/auth/merchant-login">Login as Merchant</nuxt-link>
          </p>

          <p class="text-sm my-4">
            Don't have an account?<span class="text-primary-500 text-sm ml-2"
              ><nuxt-link to="/auth/signup">Sign up here</nuxt-link></span
            >
          </p>
          <p class="text-sm text-primary-500">
            <nuxt-link to="/auth/forgot-password">Forgot your password?</nuxt-link>
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
  name: "login",
  components: {
    "brand-logo": BrandLogo,
    "cancel-icon": CancelIcon,
  },
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      loading: false,
      error: null
    };
  },
  methods: {
    async loginUser() {
      this.loading = true
      try {
       window.localStorage.setItem("ys.user_type", "customer")
       
        await this.$auth.loginWith("local", {
          data: this.input,
          params: { userType: "customer" },
        });

        this.input.email = '';
        this.input.password = '';

        this.$toast.success('Successfully authenticated')
      } catch (err) {
        this.error = err.response.data.msg
        window.localStorage.removeItem("ys.user_type", "customer")
        this.$toast.error('Error while authenticating')
      }
      finally {
        this.loading = false
      }
    },
    closeErrorMessage() {
      this.error = null
    }
  },
  beforeMount() {
    if (this.$auth.loggedIn) {
      this.$router.go(-1);
    }
  }
};
</script>
