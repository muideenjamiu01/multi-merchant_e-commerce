<template>
<div :class="['loader relative', sizeclass]">
  <div :class="['loader-dot absolute left-0 top-0 h-full w-full', colorclass]" />
  <div :class="['loader-dot absolute left-0 top-0 h-full w-full', colorclass]" />
  <div :class="['loader-dot absolute left-0 top-0 h-full w-full', colorclass]" />
  <div :class="['loader-dot absolute left-0 top-0 h-full w-full', colorclass]" />
  <div :class="['loader-dot absolute left-0 top-0 h-full w-full', colorclass]" />
  <div :class="['loader-dot absolute left-0 top-0 h-full w-full', colorclass]" />
</div>
</template>

<script>
export default {
  props: {
      size: {
          type: String,
          default: 'small'
    },
    // The background color of the button. Default is primary
    color: {
      type: String,
      default: "white",
      validator: function (value) {
        return ['inherit', 'white', 'primary','secondary'].indexOf(value) !== -1
      }
    }
  },
  computed: {
      sizeclass() {
        return {
            'w-3 h-3': this.size === 'small',
        'w-6 h-6': this.size === 'medium', 
        'w-8 h-8': this.size === 'large'
        }
        },
      colorclass() {
          return {
            'text-primary-400 before:bg-primary-400': this.color === "primary",
            'text-secondary-500 before:bg-secondary-500': this.color === "secondary",
            'text-inherit before:bg-inherit': this.color === "inherit",
            'text-white before:bg-white': this.color === "white",
        }
        }
  },
}
</script>

<style>
.loader {
  animation: loader 1s infinite linear both;
}

.loader-dot {
  animation: loader-dot 1.5s infinite ease-in-out both; 
}

.loader-dot:before {
  content: '';
  display: block;
  width: 35%;
  height: 35%;
  border-radius: 100%;
  animation: loader-dot-before 1.5s infinite ease-in-out both; 
}

.loader-dot:nth-child(1) { animation-delay: -1.1s; }
.loader-dot:nth-child(2) { animation-delay: -1.0s; }
.loader-dot:nth-child(3) { animation-delay: -0.9s; }
.loader-dot:nth-child(4) { animation-delay: -0.8s; }
.loader-dot:nth-child(5) { animation-delay: -0.7s; }
.loader-dot:nth-child(6) { animation-delay: -0.6s; }
.loader-dot:nth-child(1):before { animation-delay: -1.1s; }
.loader-dot:nth-child(2):before { animation-delay: -1.0s; }
.loader-dot:nth-child(3):before { animation-delay: -0.9s; }
.loader-dot:nth-child(4):before { animation-delay: -0.8s; }
.loader-dot:nth-child(5):before { animation-delay: -0.7s; }
.loader-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes loader {
  100% { transform: rotate(360deg); } 
}

@keyframes loader-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes loader-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>
