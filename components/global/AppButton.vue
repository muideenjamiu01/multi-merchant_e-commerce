<template>
  <button
	:is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    v-on="$listeners"
    :class="[
      {
        'bg-primary-blue text-white border-bg-primary-blue hover:bg-primary-blue-dark hover:border-bg-primary-blue hover:text-white':
          fillbutton
      },

      {
        'border border-gray-600 bg-white text-gray-600 hover:bg-gray-600 hover:border-gray-600 hover:text-white':
          outlinegray
      },
      {
        'border border-primary-blue bg-white text-primary-blue hover:bg-primary-blue hover:border-white hover:text-white':
          outlinebutton
      },

      { 'h-8 text-sm px-4': size === 'sm'},
      { 'py-2 px-6': size === 'md' },
      { 'h-12 text-lg  px-32': size ===  'lg' },
	  {'rounded-lg': round},
      {'rounded': rounded },
    ]"
   
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Label'
    },
    color: {
      type: String,
      default: 'Label'
    },
    size: {
      type: String,
      default: ''
    },
	to: {
        type: String,
        default: null,
      },
      href: {
        type: String,
        default: null,
      },
	rounded:Boolean,
	round:Boolean,
  },

  computed: {
    fillbutton () {
      return this.color === 'fillbutton'
    },
    outlinebutton () {
      return this.color === 'outlinebutton'
    },
    outlinegray () {
      return this.color === 'outlinegray'
    },
    error () {
      return this.color === 'error'
    }
  }
}
</script>

<style lang="scss" scoped></style>
