<template>
  <div v-if="index <= 2" class="text-primary-black ml-0">
    <div class="bg-primary-blue-light p-4 ml-0 mb-6">
      <div>
        <div class="mb-2 flex items-center my-[10px]">
          <img class="rounded-full bg-primary-gray w-[40px] h-[40px] my-[10px]" :src="customerAvatar" :alt="customerName">
          <h1 class="text-sm font-medium ml-2 my-[10px]">
            {{customerName.toUpperCase()}}
          </h1>
          
        </div>
        <p class="text-sm flex my-[10px]">
         <ContentsRating 
            class="mr-[6px]"
            :rating="rating"
            :ratingLabel="`Customer Rating`"
          />
          
        </p>
        <p class="font-medium text-sm flex my-[10px]">Posted on: <span class="ml-2 font-light">{{handleDate}}</span></p>
        <p class="font-medium text-sm my-[10px]">
          Comment: <span class="font-light">{{comment[0].toUpperCase()}}{{comment.slice(1)}}.</span>
        </p>
       
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      datePosted : "",
      name: ''
    }
  },
  props: {
    customerName: "",
    createdAt: "",
    rating: "",
    comment:"",
    customerAvatar:'',
    id:'',
    index:''
  },
  methods : {
    
  },
  computed: {
    handleDate() {
      return `${this.datePosted.slice(8, 10)}/${this.datePosted.slice(5, 7)}/${this.datePosted.slice(0, 4)}`;
    },
  },
  mounted () {
    this.datePosted = this.$props.createdAt.split('T')[0];
    this.name = this.$props.customerName.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  },
}
</script>