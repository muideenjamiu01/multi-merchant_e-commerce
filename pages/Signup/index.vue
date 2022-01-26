<template>
  <div class="signup__page">
    <div class="skewed-box">
    </div>
     <div class="signup">
                <img src="../../assets/images/logos/login-logo.svg" alt="login-logo">

        <p class="heading"> Create your account</p>

        <input type="text" placeholder="Your Name">
        <input type="email" placeholder="Email Address">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm Password">
        <button class="flex justify-center items-center bg-primary-blue" >SIGNUP</button>
        <p>Already have an account? &nbsp; <span> <nuxt-link to="/Login">Sign-In</nuxt-link>  </span> </p>
        <p>By clicking the signup button you agree to our</p>
        <p><span> <a href=""> Conditions Of Use</a> </span></p>
      </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  layout: 'auth'
}
</script>
<style>
  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }

</style>


<style>
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
  background-color: #45b2c7;
  width: 100%;
  height: 100%;
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

.signup .skewed-logo p{
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
  margin-bottom: 1rem;
  width:83%;
  height: 2rem;
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

