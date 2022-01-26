<template>
  <div class="signup__page">
    <div class="skewed-box">
    </div>
     <div class="signup">
          <img src="../../assets/images/logos/login-logo.svg" alt="login-logo">

        <!-- <div class="skewed-logo ">
          <p>YOUSTORE</p>
        </div> -->
        <p class="heading ">Sign in to your acount</p>

          


        <input type="email" placeholder="Email Address">
        <input type="password" placeholder="Password">
        <button class="bg-primary-blue flex justify-center items-center">LOGIN</button>
        <p>Don't have an account? &nbsp; <span> <nuxt-link to='/Signup'>Sign up here</nuxt-link>  </span> </p>
        <p><span> <nuxt-link to=''> Forgot your password?</nuxt-link> </span></p>
      </div>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  layout: 'auth'
}
</script>
<style>

</style>


<style>


.signup__page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100vh;
}

.skewed-box {
  background-color: #45b2c7;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 34%, 0 56%);
}


.signup {
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 510px; 
  width: 424px;
  border-left-color: 1px solid black;
  box-shadow: 5px 5px 5px grey;
  border-radius: 3px;
  /* z-index: 1; */
}

.signup input{
  padding: 0.5rem 0rem 0.5rem 0.5rem;
  margin-bottom: 1rem;
  width:80%;
  border: 1px solid grey;
  border-radius: 3px;
}

.signup input:hover {
  border: 2px solid black;
}

.signup button{
  padding: 0.5rem 0rem 0.5rem 0.5rem;
  margin-bottom: 1rem;
  width:83%;
  height: 2rem;
  color: white;
  border-radius: 3px;
  outline: none;
  border: none;
  box-shadow: 5px 5px 5px #999;
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


.signup p a{
  color: #45b2c7;
  text-decoration: none;
}
.signup p a:hover{
  color: #08cff7;
  text-decoration: none;
}


.signup p{
  align-self: flex-start;
  margin-left: 2.5rem;
  margin-bottom: 0.1rem;
  font-size: 0.8rem;
  font-weight: bold;
}


.footer {
  background-color: white;
  display: flex;
  position: absolute;
  bottom: 0rem;
  justify-content:space-around;
  width: 100%;
  height: 48px;
}
.footer .footer__text{
  display: flex;
  bottom: 0rem;
  justify-content:space-around;
  width: 50%;
}

.footer .footer__text {
  display: flex;
  bottom: 0rem;
  justify-content:space-around;
  width: 50%;
}

.footer .footer__images{
  display: flex;
  bottom: 0rem;
  justify-content:space-around;
  width: 50%;
  padding: 1rem 0rem 1rem 0rem;
}

.footer p a{
  margin: 0rem;
  padding: 2rem 2rem 0rem 2rem;
  color: black;
  text-decoration: none;
}


</style>

