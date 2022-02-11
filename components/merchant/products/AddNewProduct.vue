<template>
  <div class="my-7 space-y-6 text-sm text-primary-black">
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Category</label><br>
        <select class="focus:outline-none w-full border py-2.5 px-4 my-1">
          <option value="">
            Computing
          </option>
        </select>
        <p class="text-xs text-primary-gray-text">
          Select a category that this product belongs to.
        </p>
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Name</label><br>
        <input
          type="text"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
        >
        <p class="text-xs text-primary-gray-text">
          What you want to call this product.
        </p>
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Price</label><br>
        <input
          type="text"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
        >
        <p class="text-xs text-primary-gray-text" />
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Discount</label><br>
        <input
          type="text"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
        >
        <p class="text-xs text-primary-gray-text">
          The discount you are giving on this product
        </p>
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Photos</label><br>
        <input type="file" class="my-1">
        <p class="text-xs">
          Please upload multiple images of this product, preferably different
          views of the product
        </p>
        <p class="text-xs text-primary-gray-text">
          Recommended size is a square image of not more than 150kb
        </p>
        <p class="text-xs text-primary-gray-text">
          File type: JPG, PNG or GIF
        </p>
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Quantity</label><br>
        <input
          type="text"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
        >
        <p class="text-xs text-primary-gray-text">
          How many of this product is left
        </p>
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Specifications</label><br>
        <textarea
          rows="5"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          placeholder="What are this products specification"
        />
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Description</label><br>
        <textarea
          rows="5"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          placeholder="Detailed description of the product"
        />
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <div class="">
          <label>Sizes</label><br>
          <input
            type="text"
            class="focus:outline-none w-full border-b py-2.5 my-1"
            placeholder="Enter the size and press enter"
          >
          <p class="text-xs text-primary-gray-text">
            The sizes available for this product
          </p>
        </div>
        <div class="py-2.5 mt-6">
          <label>Colors</label><br>
          <input type="color" class="">
        </div>
      </div>
      <div class="w-full">
        <label>Sub-category</label>
        <p class="text-xs text-primary-gray-text">
          Select a subcategory for this product.
        </p>
        <div class="mt-4">
          <div v-for="category in categories" :key="category">
            <input :id="category" type="checkbox">
            <label :for="category">{{ category }}</label>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-end mt-8">
      <!-- <button class="py-2 px-4 bg-primary-blue text-white rounded">
        Save and add another
      </button> -->
      <AppButton
        button-text="Save and add another"
        color="fillbutton"
        size="md"
        rounded
      />
      <AppButton
        button-text="Save Product"
        color="fillbutton"
        size="md"
        rounded
      />
      <!-- <button class="py-2 px-4 bg-primary-blue text-white rounded">
        Save Product
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [
        'Desktop',
        'Laptops',
        'Battery',
        'Mouse',
        'Scanner',
        'Keyboard'
      ]
    }
  }
}
</script>
