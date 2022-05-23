<template>
  <portal>
    <div
      role="presentation"
      class="
        fixed
        top-1/2
        left-1/2
        w-full
        h-full
        -translate-x-1/2 -translate-y-1/2
        inset-0
      "
    >
      <transition name="fade">
        <Backdrop :is-open="open" :close="closeModal" />
      </transition>

      <transition name="fade">
        <div
          role="presentation"
          tabindex="-1"
          class="h-full justify-center outline-0 items-center flex z-40"
        >
          <div
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-content"
            class="
              text-secondary-800
              rounded
              transition
              relative
              overflow-y-auto
              m-8
              bg-white
              shadow-md
              max-w-[600px]
              max-h-[calc(100%_-_64px)]
              flex-col flex
            "
          >
            <div
              id="modal-header"
              class="py-3 px-4 sm:px-6 items-center justify-between flex"
            >
              <slot name="header" />
              <icon-button @click="closeModal">
                <cancel-icon></cancel-icon>
              </icon-button>
            </div>

            <div
              id="modal-content"
              class="
                relative
                flex-auto
                overflow-y-auto
                pt-0
                py-5
                px-4
                sm:px-6
                border-b border-b-secondary-200 border-t border-t-secondary-200
              "
            >
              <slot name="content" />
            </div>

            <div
              class="
                flex
                items-center
                justify-end
                flex-[0_0_auto]
                p-3
                pr-4
                sm:pr-6
                relative
              "
            >
              <slot name="footer" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </portal>
</template>

<script>
import Backdrop from "@/components/Backdrop";
import CancelIcon from "@/components/svg/Cancel";

export default {
  name: "AppModal",
  components: {
    Backdrop,
    CancelIcon,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
