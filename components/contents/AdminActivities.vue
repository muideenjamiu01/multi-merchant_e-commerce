<template>
  <div>
    <div class="bg-primary-100 p-4">
      <p class="text-3xl font-medium">Activities</p>
      <hr class="bg-primary-400" />
      <div class="flex flex-col mt-4" v-for="n in 2" :key="n.id">
        <div class="flex gap-x-2 mt-4">
          <div class="rounded-full h-10 w-10 bg-primary-400"></div>
          <div class="flex flex-col">
            <h1 class="font-medium text-sm">Travis Reynolds</h1>
            <p class="font-normal text-sm">Created a new admin 2 days ago.</p>
          </div>
        </div>
        <div class="flex gap-x-2 mt-4">
          <div class="rounded-full h-10 w-10 bg-primary-400"></div>
          <div class="flex flex-col">
            <h1 class="font-medium text-sm">Travis Reynolds</h1>
            <p class="font-normal text-sm">Verified a merchant 3 days ago</p>
          </div>
        </div>
        <div class="flex gap-x-4 mt-4">
          <div class="rounded-full h-10 w-10 bg-primary-400"></div>
          <div class="flex flex-col">
            <h1 class="font-medium text-sm">Travis Reynolds</h1>
            <span class="font-normal text-xs">
              Changed a product’s order status from dispatched to delivered
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
