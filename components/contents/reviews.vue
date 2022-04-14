<template>
  <div class="text-primary-black">
    <div class="mt-6">
      <div>
        <div class="mb-2 flex items-center my-[10px]">
          <img class="rounded-full bg-primary-gray w-[40px] h-[40px] my-[10px]" :src="customerAvatar" alt="">
          <h1 class="text-sm font-light ml-2 my-[10px]">
            {{name}}
          </h1>
        </div>
        <p class="font-light text-sm flex my-[10px]">
          <ContentsRating 
                :rating="rating"
          />
           &nbsp; &nbsp; posted {{datePosted}}
        </p>
       
        <p class="font-light text-sm my-[10px]">
          {{comment}}
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      datePosted : ""
    }
  },
  created () {
    this.datePosted = this.$props.createdAt
    
    console.log(this.handleDate(this.datePosted) )
  },
  props: {
    name: "",
    createdAt: "",
    rating: "",
    comment:"",
    customerAvatar:'',
  },
  methods : {
    handleDate(date) {
       return typeof(date)
    }
  }
    
}
</script>