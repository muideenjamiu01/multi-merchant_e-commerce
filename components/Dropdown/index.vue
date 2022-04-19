<template>
  <div ref="reference" class="relative">
    <slot name="reference" v-bind="{ isOpen, handleShow, handleHide }"></slot>

    <div v-show="isOpen" id="content" ref="content" :class="classes">
      <slot name="content" v-bind="{ handleHide }"></slot>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
  name: "DropdownMenu",
  data() {
    return {
      isOpen: false,
      reference: null,
      content: null,
      popper: null,
    };
  },
  computed: {
    classes() {
      return "bg-white z-10 text-secondary-800 rounded shadow overflow-x-hidden overflow-y-auto min-w-[16px] min-h-[16px] outline-0";
    },
  },
  mounted() {
    this.content = this.$refs.content;
    this.reference = this.$refs.reference;
  },
  methods: {
    createPopper() {
      if (!this.popper) {
        this.popper = createPopper(this.reference, this.content, {
          placement: "bottom",
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
          ],
        });
      } else {
        this.popper.update();
      }
    },
    handleShow(e) {
      if (this.isOpen) {
        return;
      }

      this.isOpen = true;
      this.$nextTick(() => {
        this.createPopper();

        this.popper.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: "eventListeners", enabled: true },
          ],
        }));

        // Update its position
        this.popper.update();
      });
    },
    handleHide(e) {
      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;
      this.popper.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: "eventListeners", enabled: false },
        ],
      }));
    },
  },
};
</script>
