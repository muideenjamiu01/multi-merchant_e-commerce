<template>
  <div v-if="src" :class="[classes, imgSize]">
      <img :src="src" :alt="alt" class="w-full h-full items-center text-transparent object-cover">
  </div>
  <div v-else :class="['text-white font-medium hover:cursor-pointer hover:opacity-95', imgSize, classes, getBg]">
      {{ getInitials }}
  </div>
</template>

<script>
export default {
  name: "UserAvatar",
  data() {
      return {
          bgColors: ["bg-red-800", "bg-orange-800", "bg-emerald-800", "bg-cyan-800", "bg-sky-800", "bg-indigo-800", "bg-purple-800", "bg-fuchsia-800", "bg-slate-800", "bg-blue-800"]
      }
  },
  props: {
      size: String,
      src: String,
      alt: {
          type: String,
          required: true,
      }
  },
  computed: {
      getInitials: function() {
          return this.alt.split('')[0]
      },
      getBg() {
          const rnInt = Math.floor(Math.random() * 10)
          return this.bgColors[rnInt]
      },
      classes() {
          return 'flex items-center relative justify-center flex-shrink-0 leading-none rounded-full overflow-hidden select-none'
      },
    imgSize: function() {
        return {
            'w-6 h-6 text-base': this.size === "small",
            'w-8 h-8 text-xl': this.size === "medium",
            'w-10 h-10 text-2xl': this.size === "large"
        }
    }
  }
}
</script>
