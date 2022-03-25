<template>
  <div>
      <h1 class="text-center" >{{$store.state.counter}}</h1>
      <app-button class="my-[10px]" variant="contained" :fullWidth="true"   @click="$store.dispatch('add')">+</app-button>
      <app-button class="my-[10px]" variant="contained" :fullWidth="true"  @click="$store.commit('subtract')">-</app-button>
  </div>
</template>
<script>
import AppButton from "@/components/buttons/Button.vue"
export default {
  data() {
        return {
          
        
        }
    },
    components: {
      "app-button": AppButton,
    },
    // methods: {
    //     add() {
    //         console.log('clicked');
    //         this.counter++
    //     },
    //      subtract() {
    //         console.log('clicked');
    //         this.counter--
    //     },
    // },
};
</script>