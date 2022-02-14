<template>
  <div class="signup__page bg-primary-blue flex justify-center ">
    <div class="skewed-box bg-primary-blue w-full h-full"></div>
    <div class="signup max-w-2xl">
      <div class="flex w-full justify-center"><img src="../../assets/images/logos/login-logo.svg" alt="login-logo"/></div>
      <p class="heading">Sign in to your acount</p>
      <div class="flex flex-col text-left">
        <label for="">Email</label>
        <input class="w-full" type="email"/>
        <label for="">Password</label>
        <input type="password"/>
      </div>
      <app-button fullWidth uppercase size="large" variant="contained" class="mt-3">
        LOGIN
      </app-button>
      <!-- <AppButton
        class="uppercase"
        buttonText="login"
        color="fillbutton"
        size="sm"
        rounded
      /> -->
      <p>
        Don't have an account? &nbsp;
        <span>
          <nuxt-link to="/auth/signup">Sign up here</nuxt-link>
        </span>
      </p>
      <p>
        <span> <nuxt-link to="">Forgot your password?</nuxt-link> </span>
      </p>
    </div>
  </div>
</template>
<script>
import AppButton from "@/components/buttons/Button.vue"

  export default {
  layout: 'empty',
    components: {
      'app-button': AppButton
    },
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
