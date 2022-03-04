<template>
  <div>
    <form action="">
      <input type="text" name="password" v-validate="'required'">
      <span>{{ errors.first('password') }}</span>
    </form>
       
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from "vee-validate/dist/vee-validate.full.esm"
export default {
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
        onSubmit() {
            console.log('Submitted');
        },
    },
};
</script>