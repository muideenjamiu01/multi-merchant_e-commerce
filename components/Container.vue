<template>
  <div :class="['w-full relative box-border mx-auto block px-3 xs:px-4 md:!px-8', setMaxWidth]">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "AppContainer",
    props: {
        maxWidth: {
            type: String,
            default: 'lg',
            validator: function (value) {
                return (["xs","sm","md","xl","lg"].indexOf(value) !== -1);
            },
        }
    },
    computed: {
      setMaxWidth() {
        return {
          "max-w-screen-xs": this.maxWidth === "xs",
          "max-w-screen-sm": this.maxWidth === "sm",
          "max-w-screen-md": this.maxWidth === "md",
          "max-w-screen-lg": this.maxWidth === "lg",
          "max-w-screen-xl": this.maxWidth === "xl"
        }
      }
    }
}
</script>
