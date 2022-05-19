// //using the plugin approach to register componets
// //when user register a component ,user can use it the component
// //anywhere on the page and dont need to be importing on each page
import Vue from 'vue'
import {Portal} from '@linusborg/vue-simple-portal'
import AppButton from "@/components/buttons/Button.vue";
import AppContainer from "@/components/Container";
import Backdrop from "@/components/Backdrop"
import BaseSvg from "@/components/svg/Base.vue";
import DropdownMenu from "@/components/Dropdown";
import GridContainer from "@/components/grid/Container";
import GridItem from "@/components/grid/Item";
import IconButton from "@/components/buttons/IconButton.vue";
import Popper from "@/components/Popper"
import Sidebar from "@/components/Sidebar.vue";
import Spinners from "@/components/Loading/Spinners.vue";
import TextInput from "@/components/Form/TextInput"
import UserAvatar from "@/components/Avatar";

Vue.component('app-button', AppButton)
Vue.component('app-container', AppContainer)
Vue.component('Backdrop', Backdrop)
Vue.component('base-svg', BaseSvg)
Vue.component('dropdown-menu', DropdownMenu)
Vue.component('grid-container', GridContainer)
Vue.component('grid-item', GridItem)
Vue.component('icon-button', IconButton)
Vue.component('loading-spinners', Spinners)
Vue.component('Popper', Popper)
Vue.component('Portal', Portal)
Vue.component('side-nav', Sidebar)
Vue.component('text-input', TextInput)
Vue.component('user-avatar', UserAvatar)