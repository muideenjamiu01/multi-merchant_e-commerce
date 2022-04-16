<template>
  <div class="my-4">
    <label :for="name" class="mb-2 capitalize">
      <slot></slot>
    </label>
    <input
      :id="name"
      :type="type"
      :name="name"
      :value="value"
      :placeholder="placeholder"
      :required="required"
      :class="[
        'w-full flex items-center border rounded-md shadow-sm text-sm sm:text-base p-2 focus:outline-none focus:text-black focus:border-primary-200 focus:ring-primary-200 focus:ring-1',
        {
          'disabled:bg-secondary-50 disabled:text-secondary-500 disabled:border-secondary-200 disabled:shadow-none':
            disabled,
        },
        valid,
      ]"
      @input="$emit('input', $event.target.value)"
    />
    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    // The input type. Must be one of "text", "email", "password", "number".
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "email", "password", "number"].includes(value);
      },
    },
    // Used to set the 'id' attr on input and 'for' on label. Should be a word in kebab case.
    name: {
      type: String,
      required: true,
    },
    // The input value
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    // Is the form disabled?
    disabled: {
      type: Boolean,
      default: false,
    },
    // Is the form field required?
    required: {
      type: Boolean,
      default: false,
    },
    // Is the value passed in valid?
    isValid: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    valid() {
      return this.isValid
        ? "border-secondary-200"
        : "border-error-500 text-error-600";
    },
  },
};
</script>
