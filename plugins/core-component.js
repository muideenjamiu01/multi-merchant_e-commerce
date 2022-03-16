// //using the plugin approach to register componets
// //when user register a component ,user can use it the component
// //anywhere on the page and dont need to be importing on each page
import Vue from 'vue'
import AppButton from "@/components/buttons/Button.vue";
import IconButton from "@/components/buttons/IconButton.vue";
import Spinners from "@/components/Loading/Spinners.vue";

Vue.component('app-button', AppButton)
Vue.component('icon-button', IconButton)
Vue.component('loading-spinners', Spinners)