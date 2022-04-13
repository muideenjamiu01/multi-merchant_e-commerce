<template>
  <div class="text-primary-black">
    <h1>Hello</h1>
    <!-- <div class="mt-6">
      <div>
        <div class="mb-2 flex items-center my-[10px]">
          <img class="rounded-full bg-primary-gray w-[40px] h-[40px] my-[10px]" :src="customerAvatar" alt="">
          <h1 class="text-sm font-light ml-2 my-[10px]">
            {{name}}
          </h1>
        </div>
        <p class="font-light text-sm flex my-[10px]">
           <img 
           class="w-[14px] h-[14px]"
            v-for="star in rating"
            :key="star"
            src="@/assets/images/icons/star.svg"
            alt=""
          >
           &nbsp; &nbsp; rating on {{createdAt}}
        </p>
       
        <p class="font-light text-sm my-[10px]">
          {{review}}
        </p>
        
      </div>
    </div> -->
  </div>
</template>

<script>

export default {
  // props: {
  //   name: "",
  //   createdAt: "",
  //   rating: "",
  //   review:"",
  //   customerAvatar:'',
  // },
    
}
</script>