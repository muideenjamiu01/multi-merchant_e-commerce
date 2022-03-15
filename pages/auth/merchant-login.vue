<template>
  <div class="flex justify-center relative">
    <div
      class="z-0 absolute skewed-box bg-primary-blue h-[35.688rem] w-full"
    ></div>
    <div
      class="container bg-white rounded z-10 h-[645px] w-[32.25rem] mt-[218px] mb-[171px] px-[48px] pb-[48px] pt-[58px]"
    >
      <nuxt-link to="/"
        ><div class="flex w-full justify-center">
          <img
            src="../../assets/images/logos/login-logo.svg"
            alt="login-logo"
          /></div
      ></nuxt-link>
      <p class="text-center font-light text-base mt-[25px] mb-[32px]">
        Merchant Login
      </p>
      <form @submit.prevent="submit" class="flex flex-col text-left">
        <label class="text-base mb-[8px]" for="email">Email</label>
        <input
          class="w-[25.25rem] h-[2.669rem] mb-[24px] px-[1rem]"
          v-model="input.email"
          name="email"
          type="email"
          required
        />
        <label class="text-base mb-[8px]" for="password">Password</label>
        <input
          class="w-[25.25rem] h-[2.669rem] mb-[32px] px-[1rem]"
          v-model="input.password"
          name="password"
          type="password"
          required
        />
        <button
          class="bg-primary-blue text-white rounded w-[25.25rem] h-[2.5rem] mb-[32px]"
          type="submit"
        >
          LOGIN
        </button>
      </form>
      <p class="font-light text-base mb-[16px]">
        Don't have a seller account?<span class="text-primary-blue ml-[10px]"
          ><nuxt-link to="/merchant/new">Create one here</nuxt-link></span
        >
      </p>
      <p>
        <span class="font-light text-base text-primary-blue mb-[48px]">
          <nuxt-link to="/auth/forgot-password"
            >Forgot your password?</nuxt-link
          >
        </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: "authpages",
  name: "login",
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
    async submit() {
      this.loading = true;
     try {
        const res = await this.$axios.post('/auth/merchant/login', this.input);
        Object.keys(this.input).forEach(key => ({ [this.input[key]]: '' }))
        const response = await this.$auth.setUserToken(res.data.token)
        this.$auth.setUser(response.data.user);
        this.$toast.success('Login Succesful!!')
		

      } catch (err) {
        this.error = err.response.data.message
      }
      finally {
        this.loading = false
		this.$router.push("/merchant/dashboard");
      }
    },
    closeErrorMessage() {
      this.error = null;
    },
    // async submit() {
    // await fetch('http://localhost:8000/api/login',{
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     credentials: 'include',
    //     body: JSON.stringify({
    //     email: this.email,
    //     password: this.password
    //     })
    // }).then(console.log("login succesfull"))
    // await this.$router.push('/');
    // }
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
