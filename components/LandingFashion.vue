<template>
   <div class="flex flex-col w-80 h-420 p-6 my-3 mx-auto bg-white shadow-lg md:mr-5 rounded md:my-0 md:w-1/3"> <!-- card 1 bottom row-->
    <h1 class="mb-6 font-bold capitalize">{{name}}</h1>
    <div class="flex w-full h-32 px-2 mb-2">
      <div class="mb-2 mr-2 w-3/6 h-32 hover:border-4 border-sky-500 bg-slate-300">
        <img
          class="h-full w-full"
          :src="require('@/assets/images/test-images/' + name + '/1.jpg')"
          :alt="name"
        />
      </div>
      <div class="mb-2 w-3/6 h-32 hover:border-4 border-sky-500 bg-slate-300">
        <img
          class="h-full w-full"
          :src="require('@/assets/images/test-images/' + name + '/2.jpg')"
          :alt="name"
        />
      </div>
    </div>
    <div class="flex w-full h-32 px-2">
      <div class="mb-2 mr-2 w-32 h-32 hover:border-4 border-sky-500 bg-slate-300">
        <img
          class="h-full w-full"
          :src="require('@/assets/images/test-images/' + name + '/3.jpg')"
          :alt="name"
        />
      </div>
      <div class="mb-2 w-32 h-32 hover:border-4 border-sky-500 bg-slate-300">
        <img
          class="h-full w-full"
          :src="require('@/assets/images/test-images/' + name + '/4.jpg')"
          :alt="name"
        />
      </div>
    </div>
    <NuxtLink :to="'/products?category=' + name"><h3 class="text-primary-blue pt-8 cursor-pointer">Shop now</h3></NuxtLink>
  </div>
</template>
 

<script>
export default {
  props: {
    name: {},
  }
}
</script>

 <style scoped>

 .shadow {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
 }
 </style>