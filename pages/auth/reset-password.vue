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

          <p class="text-center font-medium my-6">Reset password</p>

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
                name="password"
                rules="min:6||required"
                slim
              >
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
                    v-model="password"
                    type="password"
                    id="password"
                  />
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="confirm_password"
                rules="min:6||required"
                slim
              >
                <div class="mb-4">
                  <label class="mb-2 capitalize" for="confirm_password">Confirm your Password</label>
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
                    v-model="confirm_password"
                    type="password"
                    id="confirm_password"
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
  name: "ResetPassword",
  layout: "authpages",
  components: {
    ValidationObserver,
    ValidationProvider,
    "brand-logo": BrandLogo,
    "cancel-icon": CancelIcon,
  },
  data() {
    return {
        password: "",
        confirm_password: "",
      loading: false,
      error: null
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true
      try {
        const resetLink = window.localStorage.getItem("reset-link") || ""

        if (this.password === this.confirm_password) {
          const qs = this.$route.query.user || ""
        const response = await this.$axios.post(
            resetLink,
            {
              newPassword: this.password,
              confirmPassword: this.confirm_password
            }
        );

        this.password = "",
        this.confirm_password = "",

        qs === 'merchant' ? this.$router.push('/auth/merchant-login') : this.$router.push('/auth/login')
        this.$toast.success(response.data.msg)
        } else {
          this.error = 'Both password fields must match'
        }
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
      this.$router.go(-1);
    }
  }
};
</script>
