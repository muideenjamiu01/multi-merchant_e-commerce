<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <div>
      <h1 class="font-bold">
      49 Comments from verified purchases
      </h1>
      <ContentsReviews 
      v-for="comment in reviews" :key="comment.id"
      :name='comment.customerName'
      :review='comment.review'
      :createdAt='comment.createdAt'
      :customerAvatar='comment.customerAvatar'

      :rating='comment.rating'
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    data () {
      return {
        }
    },
    components: {
    },
    computed: mapGetters({
      reviews: "reviews/reviews",
      loading: "reviews/loading",
      errors: "reviews/errors",
    }),
    mounted() {
      this.$store.dispatch("reviews/fetchReviews")
    },
    methods: {
      ...mapActions(["fetchReviews"]),
      // getProductImage(images) {
      //   return  `https://www.cnet.com/a/img/resize/bf0ae84431f323812b4579499e23ee54870e5cc6/2022/03/15/25776d32-cf18-422e-9094-f5b4f991de56/mac-studio-and-mac-studio-display-002-copy.jpg?auto=webp&fit=crop&height=236&width=420`
      // },
    },
  }
</script>







</script>
