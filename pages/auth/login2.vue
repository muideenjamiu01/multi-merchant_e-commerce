<template>
  <div class="signup__page bg-primary-blue flex justify-center ">
    <div class="skewed-box bg-primary-blue w-full h-full"></div>
    <div class="signup max-w-2xl">
      <nuxt-link to="/"><div class="flex w-full justify-center"><img src="../../assets/images/logos/login-logo.svg" alt="login-logo"/></div></nuxt-link>
      <p class="heading">Sign in to your acount</p>
      <form @submit.prevent="submit"  class="flex flex-col text-left">
          <label for="email">Email</label>
          <input v-model="email" name="email" class="w-full" type="email"/>
          <label for="password">Password</label>
          <input v-model="password" name="password" type="password"/>
          <button class="bg-black text-white" type="submit">Signin</button>
      </form>
      
      <!-- <AppButton
        class="mt-3 uppercase"
        buttonText="login"
        color="fillbutton"
        size="sm"
        rounded
      /> -->
      <p>
        Don't have an account? &nbsp;
        <span>
          <nuxt-link to="/auth/signup2">Sign up here</nuxt-link>
        </span>
      </p>
      <p>
        <span> <nuxt-link to="">Forgot your password?</nuxt-link> </span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'empty',
  name: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      await fetch('http://localhost:8000/api/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then(console.log("login succesfull"))
      await this.$router.push('/');
    }
  }
  
}
</script>

<style scoped>
.signup__page .heading {
  align-self: center;
  font-weight: bold;
  margin: 1rem 1rem 2rem 1rem;
}

.signup__page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
}

.skewed-box {
  clip-path: polygon(0 0, 100% 0, 100% 34%, 0 56%);
}

.skewed-logo {
  background-color: #45b2c7;
  clip-path: polygon(100% 0, 100% 74%, 70% 100%, 0 100%, 0 0);
  width: 8rem;
  padding: 1rem 2rem 1rem 0rem;
  height: 2rem;
  border-radius: 8px;
}

.signup .skewed-logo p {
  color: white;
  padding: 0;
  height: 100%;
  margin: 0rem 0.7rem;
  font-size: 1.5rem;
  line-height: 2rem;
}

.signup {
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 48px;
  height: 532px;
  min-width: 470px;
  border-left-color: 1px solid black;
  box-shadow: 2px 2px 2px grey;
  border-radius: 3px;
}

.signup input {
  padding: 0.5rem 0rem 0.5rem 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid grey;
  border-radius: 3px;
}

.signup input:hover {
  border: 2px solid black;
}

.signup button {
  margin: 1rem 0 1rem 0;
  height: 2rem;
  border-radius: 3px;
  outline: none;
  border: none;
}

.signup button:hover {
  cursor: pointer;
  background-color: #08cff7;
}

.signup button:active {
  background-color: #08cff7;
  box-shadow: 5px 5px 5px #999;
  transform: translateY(4px);
}

.signup p a {
  color: #45b2c7;
  text-decoration: none;
}
.signup p a:hover {
  color: #08cff7;
  text-decoration: none;
}

.signup p {
  align-self: flex-start;
  margin: 1rem 0 0.5rem 0;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
