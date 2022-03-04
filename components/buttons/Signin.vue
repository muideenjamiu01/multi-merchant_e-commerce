<template>
  <div>
    <nuxt-link to="/auth/login" v-if="!auth">
      <button
        class="bg-primary-blue py-2 text-white font-light w-full rounded-sm"
      >
        Sign In
      </button>
    </nuxt-link>

    <a href="#" v-if="auth" @click="logout" >
      <button
        class="bg-rose-400 py-2 text-white font-light w-full rounded-sm"
      >
        Sign Out
      </button>
    </a>
  </div>
</template>


<script>
  // import Footer from "../base/Footer.vue";
  export default {
    data() {
      return {
        dropdown: false,
        auth: false
      };
    },
    mounted() {
      this.$nuxt.$on ('auth', auth => {this.auth = auth})
      this.$nuxt.$on ('auth', auth => console.log(auth))
    },
    methods: {
      toggleDropdown() {
        this.dropdown = !this.dropdown;
      },
      async logout () {
        await fetch(
          'http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
          }
        );
        await this.$router.push('auth/login2')
      }
    },
   
  };
</script>
