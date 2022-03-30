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

          <p class="text-center font-medium my-6">Forgot password</p>

          <div
            v-if="message"
            class="
              flex
              relative
              items-center
              text-success-900
              my-4
              rounded
              bg-success-50
              w-full
            "
          >
            <span class="text-center flex-grow p-2">{{ message }}</span>
            <icon-button
              @click="closeMessage"
              size="small"
              class="hover:bg-success-100 rounded-full"
            >
              <cancel-icon></cancel-icon>
            </icon-button>
          </div>

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

          <ValidationObserver slim>
            <form @submit.prevent="handleSubmit" class="w-full">
              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="email|required"
                slim
              >
                <div class="mb-4">
                  <label class="mb-2 capitalize" for="email">Enter your Email</label>
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
                    v-model="email"
                    type="email"
                    id="email"
                  />
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

            <app-button class="" type="submit" variant="contained" color="primary" size="large" :disabled="loading" fullWidth uppercase>
                {{loading ? 'submitting' : 'submit'}}
                <loading-spinners v-if="loading" size="small" color="white" class="mx-4"></loading-spinners>
            </app-button>
          </form>
          </ValidationObserver>

          <p class="text-sm my-4">
            Don't have an account?<span class="text-primary-500 text-sm ml-2"
              ><nuxt-link to="/auth/signup">Sign up here</nuxt-link></span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
import CancelIcon from "@/components/svg/Cancel.vue"
import BrandLogo from "@/components/svg/Logo";

export default {
    name: "ForgotPassword",
  layout: "authpages",
  components: {
    ValidationObserver,
    ValidationProvider,
    "brand-logo": BrandLogo,
    "cancel-icon": CancelIcon,
  },
  data() {
    return {
        email: "",
      loading: false,
      message: "",
      error: null
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      try {
          const qs = this.$route.query.user
        const response = await this.$axios.post(
            `/api/users/v1/auth/${qs}/reset-password`,
            { email: this.email }
        );

        this.email = '';
        console.log(response.data.data)

        window.localStorage.setItem("reset-link", response.data.data)
        this.message = response.data.msg
        this.$toast.success(response.data.msg)
      } catch (err) {
        this.error = err.response.data.msg
      }
      finally {
        this.loading = false
      }
    },
    closeErrorMessage() {
      this.error = null
    },
    closeMessage() {
      this.message = ''
    }
  },
  beforeMount() {
    if (this.$auth.loggedIn) {
      this.$router.go('/');
    }
  }
};
</script>
