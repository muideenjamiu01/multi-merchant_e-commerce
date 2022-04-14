<template>
  <div class="">
    <div class="bg-primary-blue-light p-4">
      <div class="mt-4 flex gap-4">
        <div>
          <img :src="getProductImage(product)" alt="" class="w-16 h-24">
        </div>
        <div>
          <div>
            <h4 class="font-light text-sm">
              {{product.name}}
            </h4>
            <div class="">
              <ContentsRating 
                :rating="product.reviews['0'].rating"
              />
              <div class="flex gap-2">
                <span class="font-light text-sm">₦{{product.price.toLocaleString()}}</span>
                <span class="font-light text-sm text-gray-400">-18%</span>
              </div>
              <app-button 
                @click="test" 
                class="mt-2" 
                variant="contained" 
                fullWidth 
                size="small"
              >
                Add to cart
              </app-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppButton from "@/components/buttons/Button.vue"
  export default {
    props: {
      product: "",
    },
    components: {
      'app-button': AppButton
    },
    methods: {
      test () {
        console.log(this.$props.product)
      },
      getProductImage(product) {
        return product.images[0];
      }
    }
  }
</script>

