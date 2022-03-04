<template>
  <div class="">
    <div class="bg-primary-blue-light p-4">
      <div class="mt-4 flex gap-4">
        <div>
          <img src="" alt="" class="w-16 h-24">
        </div>
        <div>
          <div>
            <h4 class="font-light text-sm">
              Product name
            </h4>
            <div class="">
              <div class="flex justify-between">
                <span class="font-light text-sm">stars rating </span>
                <span class="text-primary-blue font-light text-sm">213</span>
              </div>
              <div class="flex gap-2">
                
                  <span class="font-light text-sm">5000.00 NGN</span>
                
                <span class="font-light text-sm text-gray-400">-18%</span>
              </div>
              <div>
        <app-button class="mt-2" variant="contained" fullWidth size="small">
          Add to cart
        </app-button>
                <!-- <AppButton
                  
                  buttonText="add to cart"
                  color="fillbutton"
                  size="sm"
                  rounded
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 6239209112 famous prior -->
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue"

export default {
    components: {
      'app-button': AppButton
    }
}
</script>

<style lang="scss" scoped></style>
