<template>
  <div class="flex justify-center relative">
    <div
      class="z-0 absolute skewed-box bg-primary-blue h-[35.688rem] w-full"
    ></div>
    <div
      class="
        container
        bg-white
        rounded
        z-10
        h-[35.25rem]
        w-[32.25rem]
        mt-[218px]
        mb-[171px]
        px-[48px]
        pb-[48px]
        pt-[58px]
      "
    >
      <nuxt-link to="/"
        ><div class="flex w-full justify-center">
          <img
            src="../../assets/images/logos/login-logo.svg"
            alt="login-logo"
          /></div
      ></nuxt-link>
      <p class="text-center font-light text-base mt-[25px] mb-[32px]">
        Sign in to your acount
      </p>
      <div v-if="error" class="flex relative items-center text-error-900 my-4 rounded bg-error-50 w-full">
          <span class="text-center flex-grow p-2">{{ error }}</span>
          <icon-button @click="closeErrorMessage" size="small" class="hover:bg-error-100 rounded-full">
              <cancel-icon></cancel-icon>
          </icon-button>
        </div>
        <form @submit.prevent="onSubmit" class="flex flex-col text-left">
            <label class="text-base mb-[8px]" for="email">Email</label>
            <input
            class="w-[26.25rem] h-[2.669rem] mb-[24px] px-[1rem]"
            v-model="input.email"
            name="email"
            type="email"
            />

            <label class="text-base mb-[8px]" for="password">Password</label>
            <input
            class="w-[26.25rem] h-[2.669rem] mb-[24px] px-[1rem]"
            v-model="input.password"
            name="password"
            type="password"
            />

        <app-button class="" type="submit" variant="contained" color="primary" size="large" :disabled="loading" fullWidth uppercase>
            {{loading ? 'Loading' : 'login'}}
            <loading-spinner v-if="loading" size="small" color="white" class="mx-4"></loading-spinner>
        </app-button>
        </form>
      <p class="font-light text-base my-[16px]">
        Don't have an account?<span class="text-primary-blue ml-[10px]"
          ><nuxt-link to="/auth/signup">Sign up here</nuxt-link></span
        >
      </p>
      <p>
        <span class="font-light text-base text-primary-blue mb-[48px]">
          <nuxt-link to="/auth/forgot-password">Forgot your password?</nuxt-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import IconButton from "@/components/buttons/IconButton.vue"
import CancelIcon from "@/components/svg/Cancel.vue"
import Spinner from "@/components/Loading/Spinners.vue"

export default {
  layout: "authpages",
  name: "login",
  components: {
      "icon-button": IconButton,
      "cancel-icon": CancelIcon,
      "loading-spinner": Spinner
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
    async onSubmit() {
        this.loading = true
      try {
         this.$toast.show('Logging in...')
        const response = await this.$auth.loginWith("local", {
          data: this.input,
        });
        this.$auth.setUser(response.data.user);
        this.input.email = '';
        this.input.password = '';
        this.$toast.success('Successfully authenticated')
      } catch (err) {
        this.error = err.response.data.message
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
};
</script>

<style scoped>
.skewed-box {
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
}
.container {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
}
input {
  border: 1px solid #e1e3e3;
}
</style>