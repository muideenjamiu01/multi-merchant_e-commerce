<template>
  <div
    :class="[
      'flex items-center justify-center outline-0 list-none',
      classes,
      { [activeClasses]: isActive },
    ]"
  >
    <input
      :id="'item-' + value"
      :value="value"
      :checked="isActive"
      type="radio"
      class="sr-only peer"
      @change="$emit('change', $event.target.value)"
    />
    <label
      :for="'item-' + value"
      class="flex items-center justify-center capitalize"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    modelValue: {
      type: String,
      default: "",
      required: true
    },
    value: {
      type: String,
      default: undefined,
      required: true
    },
    // Change the default styles for the active tab/filter
    activeClasses: {
      type: String,
      default: "border-primary-100 bg-primary-100",
    },
    // Change the default styles for the tab/filter
    classes: {
      type: String,
      default:
        "px-3 text-sm rounded border sm:h-10 h-8 sm:px-[15px] border-solid border-secondary-200",
    },
  },
  computed: {
    isActive() {
      return this.modelValue === this.value;
    },
  },
};
</script>
