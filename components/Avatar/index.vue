<template>
  <div 
    v-if="!src" 
    :class="['font-medium hover:cursor-pointer hover:opacity-95 border border-solid text-primary-600 border-primary-300 hover:border-primary-400', imgSize, classes, isRound]">
      {{ getInitials }}
  </div>
  <div 
    v-else 
   :class="[classes, imgSize, isRound]">
      <img :src="src" :alt="alt" class="w-full h-full items-center text-transparent object-cover">
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  props: {
      size: String,
      src: String,
      alt: {
          type: String,
          default: ''
      },
      square: {
          type: Boolean,
          default: false
      },
      outlined: {
          type: Boolean,
          default: false
      }
  },
  computed: {
      getInitials: function() {
          return this.alt && this.alt.split('')[0]
      },
    //   setBackground() {
    //       const rnInt = Math.floor(Math.random() * 10)
    //       const bg = this.bgColors[rnInt]
    //       return this.outlined ? `border border-solid border-${bg} text-${bg}` : `bg-${bg} text-white`
    //   },
      isRound() {
          return this.square ? 'rounded' : 'rounded-full'
      },
      classes() {
          return 'flex items-center relative justify-center flex-shrink-0 leading-none overflow-hidden select-none'
      },
    imgSize: function() {
        return {
            'w-6 h-6 text-base': this.size === "small",
            'w-9 h-9 text-xl': this.size === "medium",
            'w-12 h-12 text-2xl': this.size === "large"
        }
    }
  }
}
</script>
