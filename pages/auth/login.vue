<template>
  <div class="flex justify-center relative">
    <div class="z-0 absolute skewed-box bg-primary-blue h-[35.688rem] w-full"></div>
    <div class="container bg-white rounded z-10 h-[35.25rem] w-[32.25rem] mt-[218px] mb-[171px] px-[48px] pb-[48px] pt-[58px]">
        <nuxt-link to="/"><div class="flex w-full justify-center"><img src="../../assets/images/logos/login-logo.svg" alt="login-logo"/></div></nuxt-link>
        <p class="text-center font-light text-base mt-[25px] mb-[32px]">Sign in to your acount</p>
        <ValidationObserver v-slot="{ invalid }">
            <form @submit.prevent="onSubmit"  class="flex flex-col text-left">
                <ValidationProvider name="Email" rules="email||required" v-slot="{ errors }">
                    <label class="text-base mb-[8px]" for="email">Email</label>
                    <input class="w-[25.25rem] h-[2.669rem] mb-[24px] px-[1rem]" v-model="email" name="email" type="email"/>
                    <span class="text-xs text-red-900 ml-5">{{errors[0]}}</span>
                </ValidationProvider>
                <ValidationProvider name="Password" rules="min:6||required" v-slot="{ errors }">
                    <label class="text-base mb-[8px]" for="password">Password</label>
                    <input class="w-[25.25rem] h-[2.669rem] mb-[24px] px-[1rem]" v-model="password" name="password" type="password"/>
                    <span class="text-xs text-red-900 ml-5">{{ errors[0]}}</span>
                </ValidationProvider>
                <button type="reset">Reset</button>
                <button class="bg-primary-blue text-white rounded w-[25.25rem] h-[2.5rem] mb-[32px]"  :disabled="invalid" type="submit">LOGIN</button>
            </form>
        </ValidationObserver>
        <p class="font-light text-base mb-[16px]">Don't have an account?<span class="text-primary-blue ml-[10px]"><nuxt-link to="/auth/signup">Sign up here</nuxt-link></span></p>
        <p><span class="font-light text-base text-primary-blue mb-[48px]"> <nuxt-link to="">Forgot your password?</nuxt-link> </span></p>
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