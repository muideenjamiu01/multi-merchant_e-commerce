<template>
  <div class="">
    <div class="bg-primary-blue-light p-4">
      <div class="mt-4 flex gap-4">
        <div>
          <img :src="getProductImage(product)" :alt="product.name" class="w-16 h-24">
        </div>
        <div>
          <div>
            <h4 class="font-light text-sm">
              {{product.name}}
            </h4>
            <div class="">
              <ContentsRating 
                :rating="testAverage"
                :ratingLabel="`Avg. Rating`"
              />
              <div class="flex gap-2">
                <span class="font-light text-sm">₦{{product.price.toLocaleString()}}</span>
                <span class="font-light text-sm text-gray-400">-18%</span>
              </div>
              
            </div>
            <app-button 
              @click="test"
              class="mt-2" 
              variant="contained" 
              fullWidth 
              size="small"
              >
              ADD TO CART
            </app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppButton from "@/components/buttons/Button.vue"
  export default {
    data () {
      return {
        averageRating: 5
      }
    },
    props: {
      product: "",
    },
    components: {
      'app-button': AppButton
    },
    methods: {
      test () {

      },
      getProductImage(product) {
        return product.images[0];
      },
     
    },
    computed : {
        testAverage() {
          let ratingSum = 0;
          for (let review of this.product.reviews) {
            ratingSum+=review.rating;
          }
          this.averageRating = Math.round(ratingSum/this.product.reviews.length)
          return this.averageRating
        },
    }

  }
</script>

