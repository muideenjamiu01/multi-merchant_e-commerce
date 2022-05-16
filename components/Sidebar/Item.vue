<template>
<li class="block">
    <div class="flex items-center">
 <NuxtLink :to="to" class="flex items-center space-x-5" active-class="text-primary-500">
    <slot name="icon"></slot>
      
      <span class="inline-block p-2 text-xl flex-grow capitalize text-inherit">
        <slot name="label"></slot>
      </span>
 </NuxtLink>
      
    <slot name="dropdown-icon">
    </slot>
    </div>

            <transition name="fade">
    <ul class="block ml-10 p-4">
        <slot name="dropdown"></slot>
    </ul>
            </transition>
 </li>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
      to: {
          type: String,
          default: "/"
      },
  },
  data() {
      return {
          isOpen: false
      }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
