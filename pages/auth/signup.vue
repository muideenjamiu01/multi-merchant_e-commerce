<template>
  <div class="flex justify-center relative">
    <div
      class="z-0 absolute skewed-box bg-primary-blue h-[43.688rem] w-full"
    ></div>
    <div
      class="container bg-white rounded z-10 h-[44.625] w-[31.25rem] mt-[218px] mb-[171px] px-[48px] pb-[48px] pt-[58px]"
    >
      <nuxt-link to="/"
        ><div class="flex w-full justify-center">
          <img
            src="../../assets/images/logos/login-logo.svg"
            alt="login-logo"
          /></div
      ></nuxt-link>
      <p class="text-center font-light text-base mt-[25px] mb-[32px]">
        Create your account
      </p>
      <div v-if="error" class="flex relative items-center text-error-900 my-4 rounded bg-error-50 w-full">
          <span class="text-center flex-grow p-2">{{ error }}</span>
          <icon-button @click="closeErrorMessage" size="small" class="hover:bg-error-100 rounded-full">
              <cancel-icon></cancel-icon>
          </icon-button>
        </div>
      <ValidationObserver>
        <form @submit.prevent="onSubmit" class="flex flex-col text-left">

        <div class="mb-6">
          <ValidationProvider
            name="firstName"
            rules="required||alpha"
            v-slot="{ errors }"
          >
            <label class="text-base mb-[8px]" for="firstName">First Name</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-1 px-[1rem]"
              v-model="input.firstName"
              type="text"
            />
            <span class="text-xs text-error-900">{{ errors[0] }}</span>
          </ValidationProvider>
          </div>
        <div class="mb-6">
          <ValidationProvider
            name="lastName"
            rules="required||alpha"
            v-slot="{ errors }"
            class="mt-[10px]"
          >
            <label class="text-base mb-[8px]" for="lastName">Last Name</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-1 px-[1rem]"
              v-model="input.lastName"
              type="text"
            />
            <span class="text-xs text-error-900">{{ errors[0] }}</span>
          </ValidationProvider>
          </div>
          
        <div class="mb-6">
          <ValidationProvider
            name="email"
            rules="required||email"
            v-slot="{ errors }"
            class="mt-[10px]"
          >
            <label class="text-base mb-[8px]" for="email">Email</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-1 px-[1rem]"
              v-model="input.email"
              type="email"
            />
            <span class="text-xs text-error-900">{{ errors[0] }}</span>
          </ValidationProvider>
          </div>
          
        <div class="mb-6">
          <ValidationProvider
            name="phone"
            rules="required||digits:11"
            v-slot="{ errors }"
            class="mt-[10px]"
          >
            <label class="text-base mb-[8px]" for="phone">Phone</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-1 px-[1rem]"
              v-model="input.phone"
              type="phone"
            />
            <span class="text-xs text-error-900">{{ errors[0] }}</span>
          </ValidationProvider>
          </div>
          
        <div class="mb-6">
          <ValidationProvider
            name="Password"
            rules="min:6||required"
            v-slot="{ errors }"
            class="mt-[10px]"
          >
            <label class="text-base mb-[8px]" for="password">Password</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-1 px-[1rem]"
              v-model="input.password"
              name="password"
              type="password"
              required
            />
            <span class="text-xs text-error-900">{{ errors[0] }}</span>
          </ValidationProvider>
          </div>

        <app-button class="" type="submit" variant="contained" color="primary" size="large" :disabled="loading" fullWidth uppercase>
            {{loading ? 'Loading' : 'Signup'}}
            <loading-spinner v-if="loading" size="small" color="white" class="mx-4"></loading-spinner>
        </app-button>
        </form>
      </ValidationObserver>

      <p class="font-light text-sm mb-[16px]">
        Already have an account?<span
          class="text-primary-blue text-sm ml-[10px]"
          ><nuxt-link to="/auth/login">Sign in</nuxt-link></span
        >
      </p>
      <p class="font-light text-sm mb-[16px]">
        By clicking the sign up button, you agree to our<span
          class="font-light text-sm text-primary-blue ml-[8px] mb-[48px]"
        >
          <nuxt-link to="">conditions of use</nuxt-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
import IconButton from "@/components/buttons/IconButton.vue"
import CancelIcon from "@/components/svg/Cancel.vue"
import Spinner from "@/components/Loading/Spinners.vue"

export default {
  layout: "empty",
  components: {
    ValidationObserver,
    ValidationProvider,
      "icon-button": IconButton,
      "cancel-icon": CancelIcon,
      "loading-spinner": Spinner
  },
  data() {
    return {
      loading: false,
      error: null,
      input: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: ""
      },
    };
  },
  methods: {
    async onSubmit() {
        this.loading = true
      try {
        const res = await this.$axios.post('/auth/register', this.input);
        Object.keys(this.input).forEach(key => ({ [this.input[key]]: '' }))
        const response = await this.$auth.setUserToken(res.data.token)
        this.$auth.setUser(response.data.user);
        this.$toast.success('Registration Succesful!!')
      } catch (err) {
        this.error = err.response.data.message
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
