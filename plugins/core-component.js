// //using the plugin approach to register componets
// //when user register a component ,user can use it the component
// //anywhere on the page and dont need to be importing on each page
import Vue from 'vue'
import AppButton from "@/components/buttons/Button.vue";
import BaseSvg from "@/components/svg/Base.vue";
import Dropdown from "@/components/Dropdown";
import IconButton from "@/components/buttons/IconButton.vue";
import Sidebar from "@/components/Sidebar.vue";
import Spinners from "@/components/Loading/Spinners.vue";
import UserAvatar from "@/components/Avatar";

Vue.component('app-button', AppButton)
Vue.component('base-svg', BaseSvg)
Vue.component('dropdown-menu', Dropdown)
Vue.component('icon-button', IconButton)
Vue.component('loading-spinners', Spinners)
Vue.component('side-nav', Sidebar)
Vue.component('user-avatar', UserAvatar)