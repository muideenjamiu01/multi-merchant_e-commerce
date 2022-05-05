<template>
  <Popper
    v-slot="{ isOpen, handleShow, handleHide }"
    :reference="reference"
    :content="content"
    :config="{
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          }
        }
      ]
    }"
  >
    <div ref="reference" class="relative">
      <slot name="reference" v-bind="{ isOpen, handleShow, handleHide }"></slot>

      <transition name="fade">
        <Backdrop :is-open="isOpen" :close="handleHide" />
      </transition>
      <transition name="fade">
        <div v-show="isOpen" ref="content" :class="classes">
          <slot name="content" v-bind="{ handleHide }"></slot>
        </div>
      </transition>
    </div>
  </Popper>
</template>

<script>
import Backdrop from "@/components/Backdrop"
import Popper from "@/components/Popper"

export default {
  name: "DropdownMenu",
  components: {
    Backdrop,
    Popper
  },
  data() {
    return {
      reference: null,
      content: null,
    };
  },
  computed: {
    classes() {
      return "bg-white z-20 text-secondary-800 rounded shadow overflow-x-hidden overflow-y-auto min-w-[16px] min-h-[16px] outline-0";
    },
  },
  mounted() {
    this.content = this.$refs.content;
    this.reference = this.$refs.reference;
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 200ms ease-in;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>