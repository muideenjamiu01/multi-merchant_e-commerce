<template>
  <div class="relative">
    <!-- <div ref="trigger"> -->
      <slot name="dropdown-element" v-bind="{ setOpen, isOpen }"></slot>
    <!-- </div> -->
    <!-- <portal> -->
      <div v-show="isOpen" class="bg-white text-secondary-800 transition rounded shadow absolute top-full left-1/2 -translate-x-1/2 overflow-x-hidden overflow-y-auto min-w-[16px] min-h-[16px] outline-0">
        <slot name="dropdown-content" v-bind="{ setOpen, isOpen }"></slot>
      </div>
    <!-- </portal> -->
  </div>
</template>

<script>
// import { createPopper } from '@popperjs/core'
// import { Portal } from '@linusborg/vue-simple-portal'

export default {
  name: "Dropdown",
  // components: {
  //   portal: Portal
  // },
  data() {
    return {
      isOpen: false,
    };
  },
  // computed: {
  //   popperInstance() {
  //     return createPopper(this.$refs.trigger, this.refs.content, {
  //       placement: 'bottom',
  //       modifiers: [{
  //         name: 'offset',
  //         options: {
  //           offset: [0, 8]
  //         }
  //       }],
  //       strategy: 'fixed'
  //     })
  //   }
  // },
  methods: {
    setOpen(isOpen) {
      this.isOpen = isOpen;
    },
    // handleShow(e) {
    //   this.$refs.trigger.setAttribute('data-show', '');
    //   this.popperInstance.update();
    // },
    // handleHide(e) {
    //   this.$refs.trigger.removeAttribute('data-hide');
    // }
  }
};
</script>
