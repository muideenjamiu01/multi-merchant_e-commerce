<template>
  <div class="signup__page flex justify-center">
    <div class="skewed-box bg-primary-blue w-full h-full">
    </div>
     <div class="signup">
        <nuxt-link to='/'><img src="../../assets/images/logos/login-logo.svg" alt="login-logo"></nuxt-link>
        <p class="heading ">Sign in to your acount</p>
        <input type="email" placeholder="Email Address">
        <input type="password" placeholder="Password">
        <button class="bg-primary-blue text-white flex justify-center items-center">LOGIN</button>
        <p>Don't have an account? &nbsp; <span> <nuxt-link to='/authentication/signup'>Sign up here</nuxt-link>  </span> </p>
        <p><span> <nuxt-link to=''>Forgot your password?</nuxt-link> </span></p>
      </div>
  </div>
</template>
<script>

export default {
  layout: 'auth'
}
</script>

