<template >
    <div  >
      <AppHeader />
      <h1 class="text-center text-primary-blue font-bold text-lg" >Welcome to YouStore</h1>
      <Footer />
    </div>
</template>

<script>

import Footer from '../components/base/Footer.vue';
import AppHeader from '../components/base/AppHeader.vue';
  export default {
    name: 'IndexPage',
    head: {
      title: 'YouStore',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'the Best Online Shop in Africa'
        }
      ]
    },
    components: {
      Footer, 
      AppHeader
    }
  }


</script>
