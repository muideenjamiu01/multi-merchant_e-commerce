<template>
  <div class="flex justify-center relative">
    <div class="z-0 absolute skewed-box bg-primary-blue h-[35.688rem] w-full"></div>
    <div class="container bg-white rounded z-10 h-[35.25rem] w-[32.25rem] mt-[218px] mb-[171px] px-[48px] pb-[48px] pt-[58px]">
        <nuxt-link to="/"><div class="flex w-full justify-center"><img src="../../assets/images/logos/login-logo.svg" alt="login-logo"/></div></nuxt-link>
        <h1 class="font-bold text-base mt-[45px]">Password assistance</h1>
        <p class="font-light text-base mt-[15px] mb-[52px]">Please enter the e-mail address associated with your Jumia account. We will send you a link to this e-mail address to reset your password.</p>
        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit"  class="flex flex-col text-left">
                <ValidationProvider  name="Email" rules="email||required" v-slot="{ errors }">
                    <input class="h-[2.669rem] px-[1rem] mb-[5px] w-full" v-model="email" name="email" type="email" placeholder="Enter your e-mail address"/>
                    <span class="text-xs text-red-900 ml-5 ">{{errors[0]}}</span>
                </ValidationProvider >
                <button class="bg-primary-blue text-white rounded h-[2.5rem] mt-[30px] mb-[30px] w-full"  :disabled="invalid" type="submit">RESET PASSWORD</button>
            </form>
        </ValidationObserver>
        <nuxt-link to="/auth/login" class="flex w-full justify-center"><button class="bg-white text-primary-blue rounded hover:bg-primary-blue hover:text-white hover:p-[5px]">RETURN TO LOGIN</button></nuxt-link>
    
    </div>
  </div>
</template>

<script>
    import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm"

    export default {
        layout: 'authpages',
        name: 'login',
       
        data() {
            return {
            email: '',
            password: ''
            }
        },

        components: {
            ValidationObserver,
            ValidationProvider
        },
        methods: {
            async onSubmit() {
                try {
                    const response = await fetch('http://localhost:8000/api/login',{
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        credentials: 'include',
                        body: JSON.stringify({
                            email: this.email,
                            password: this.password
                        })
                    })
                    const content = await response.json();
                    console.log("login-page", content.message);
                    if (content.message == 'Invalid credentials!') { 
                        alert("Wrong email or password!");
                    } 
                    else {
                        this.$router.push('/')
                        alert("Signed in succesfully")
                    }
                    
                } catch (err) {
                    console.log(err)
                    await this.$router.push('/auth/login');
                    alert('Could not contact server!')
                }
            }
        }
    }
</script>

<style scoped>
    .skewed-box {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
    }
    .container {
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    }
    input {
        border: 1px solid #E1E3E3;
    }
</style>