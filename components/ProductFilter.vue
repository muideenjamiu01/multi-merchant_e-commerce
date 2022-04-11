<template>
  <div>
    <input
      :id="'category-' + value"
      :value="value"
      :checked="isChecked"
      type="radio"
      class="sr-only"
      @change="$emit('change', $event.target.value)"
    />
    <label
      :for="'category-' + value"
      class="
        border border-solid border-secondary-200
        flex
        items-center
        justify-center
        capitalize
        h-10
        bg-transparent
        px-[15px]
        text-sm
        rounded
        outline-0
      "
      >
        <slot></slot>
      </label
    >
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    "modelValue": { type: String, default: "" },
    "value": { type: String, default: undefined }
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  }
};
</script>

<style scoped>
input:checked ~ label {
  border: 2px solid #ebf8fe;
  background-color: #ebf8fe;
}
</style>