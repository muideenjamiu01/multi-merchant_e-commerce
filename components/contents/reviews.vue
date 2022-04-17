<template>
  <div class="text-primary-black">
    <div class="mt-6">
      <div>
        <div class="mb-2 flex items-center my-[10px]">
          <img class="rounded-full bg-primary-gray w-[40px] h-[40px] my-[10px]" :src="customerAvatar" :alt="name">
          <h1 class="text-sm font-light ml-2 my-[10px]">
            {{name}}
          </h1>
          
        </div>
        <p class="font-light text-sm flex my-[10px]">
          <ContentsRating 
            class="mr-[6px]"
            :rating="rating"
          />
          Posted on {{handleDate}}
        </p>
       
        <p class="font-light text-sm my-[10px]">
          Comment: {{comment[0].toUpperCase()}}{{comment.slice(1)}}.
        </p>
        <app-button @click="deleteReview(id)"  variant="contained" color='error'>
            Delete Review
        </app-button>
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
    id:''
  },
  methods : {
    async deleteReview(id) {
      const reviewId = id
      try {
        const response = await this.$axios.delete(`https://youstore-products.herokuapp.com/v1/product/${reviewId}`);
        this.$toast.success(response.data.msg)
      } catch (error) {
        this.$toast.error("An error occured")
      } finally {
        this.$router.push("/products?category=fashion")
      }
    },
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