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
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="submit" class="flex flex-col text-left">
          <ValidationProvider
            name="First Name"
            rules="required||alpha"
            v-slot="{ errors }"
          >
            <label class="text-base mb-[8px]" for="name">First Name</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-[24px] px-[1rem]"
              v-model="firstName"
              type="text"
            />
            <span class="text-xs text-red-900">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="Last Name"
            rules="required||alpha"
            v-slot="{ errors }"
          >
            <label class="text-base mb-[8px]" for="name">Last Name</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-[24px] px-[1rem]"
              v-model="lastName"
              type="text"
            />
            <span class="text-xs text-red-900">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="E-mail"
            rules="required||email"
            v-slot="{ errors }"
          >
            <label class="text-base mb-[8px]" for="email">E-mail</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-[24px] px-[1rem]"
              v-model="email"
              type="email"
            />
            <span class="text-xs text-red-900">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="Password"
            rules="min:6||required"
            v-slot="{ errors }"
          >
            <label class="text-base mb-[8px]" for="password">Password</label>
            <input
              class="w-[25.25rem] h-[2.669rem] mb-[32px] px-[1rem]"
              v-model="password"
              name="password"
              type="password"
              required
            />
            <span class="text-xs text-red-900">{{ errors[0] }}</span>
          </ValidationProvider>

          <ValidationProvider
            name="Password"
            rules="min:6||required"
            v-slot="{ errors }"
          >
            <label class="text-base mb-[8px]" for="password"
              >Confirm Password</label
            >
            <input
              class="w-[25.25rem] h-[2.669rem] mb-[32px] px-[1rem]"
              name="password"
              type="password"
            />
            <span class="text-xs text-red-900">{{ errors[0] }}</span>
          </ValidationProvider>

          <button
            class="bg-primary-blue text-white rounded w-[25.25rem] h-[2.5rem] mb-[32px]"
            :disabled="invalid"
            type="submit"
          >
            SIGN UP
          </button>
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

export default {
  layout: "empty",
  data() {
    return {
        firstName: "",
        lastName: "",
        name: ``,
        email: "",
        password: "",
    };
  },
  methods: {
    async submit() {
      await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${this.firstName} ${this.lastName}`,
          email: this.email,
          password: this.password,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then(alert("Signup Succesfull!"));
      await this.$router.push("/auth/login");
    },
  },
  components: {
    ValidationObserver,
    ValidationProvider,
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
