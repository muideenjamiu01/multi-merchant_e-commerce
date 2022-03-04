// //using the plugin approach to register componets
// //when user register a component ,user can use it the component
// //anywhere on the page and dont need to be importing on each page
import Vue from 'vue'

import AppButton from "@/components/buttons/Button.vue";



 Vue.component('AppButton',AppButton)