<template>
  <div
    @click="closeModal"
    class="fixed inset-0 flex items-center justify-center z-[99] bg-black bg-opacity-60"
  >
    <div @click.stop="" :style="{ width: width, minWidth: minWidth }" class="bg-white">
      <div
        v-if="containsHeader"
        :class="[
          { 'border-b border-[#E1E3E3]': containsBorder },
          'flex items-center justify-between py-4 px-5',
        ]"
      >
        <div class="text-primary-black font-medium">{{ title }}</div>
        <cancel-icon @click.native="closeModal" class="cursor-pointer" />
      </div>

      <div class="py-4 px-5">
        <slot />
      </div>

      <div v-if="containsFooter" class="border-t border-[#E1E3E3] py-4 px-5">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/svg/Cancel.vue";
export default {
  components: {
    CancelIcon,
  },
  props: {
    width: {
      default: "50%",
    },
    minWidth: {
      default: "400px",
    },
    containsHeader: {
      default: false,
    },
    containsBorder: {
      default: true,
    },
    title: {},
    containsFooter: {
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
