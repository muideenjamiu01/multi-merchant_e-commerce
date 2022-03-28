<template>
  <div class="my-7 space-y-6 text-sm text-primary-black">
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Category</label><br/>
        <select
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          v-model="category"
        >
          <option value="fashion">Fashion</option>
          <option value="phones">Phones</option>
          <option value="computing">Computing</option>
          <option value="phones">Gaming</option>
          <option value="home">Home</option>
          <option value="electronics">Electronics</option>
        </select>
        <p class="text-xs text-primary-gray-text">
          Select a category that this product belongs to.
        </p>
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Name</label><br/>
        <input
          type="text"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          v-model="name"
        />
        <p class="text-xs text-primary-gray-text">
          What do you want to call this product.
        </p>
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Price</label><br />
        <input
          type="number"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          v-model="price"
        />
        <p class="text-xs text-primary-gray-text" />
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Discount</label><br />
        <input
          type="number"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          v-model="discount"
        />
        <p class="text-xs text-primary-gray-text">
          The discount you are giving on this product
        </p>
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Photos</label><br />
        <input type="file" class="my-1" />
        <p class="text-xs">
          Please upload multiple images of this product, preferably different
          views of the product
        </p>
        <p class="text-xs text-primary-gray-text">
          Recommended size is a square image of not more than 150kb
        </p>
        <p class="text-xs text-primary-gray-text">File type: JPG, PNG or GIF</p>
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Quantity</label><br />
        <input
          type="number"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          v-model="quantity"
        />
        <p class="text-xs text-primary-gray-text">
          How many of this product is left
        </p>
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Specifications</label><br />
        <textarea
          rows="5"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          placeholder="What are this products specification"
        />
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Description</label><br />
        <textarea
          rows="5"
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          placeholder="Detailed description of the product"
          v-model="description"
        />
      </div>
    </div>
    <div class="md:flex gap-8">
      <div class="w-full">
        <div class="">
          <label>Sizes</label><br />
          <input
            type="text"
            class="focus:outline-none w-full border-b py-2.5 my-1"
            placeholder="Enter the size and press enter"
             v-model="size"
          />
          <p class="text-xs text-primary-gray-text">
            The sizes available for this product
          </p>
        </div>
        <div class="py-2.5 mt-6">
          <label>Colors</label><br />
          <input type="color" class="" v-model="color" />
        </div>
      </div>
      <div v-if="category == 'computing'" class="w-full">
        <label>Sub-category</label>
        <p class="text-xs text-primary-gray-text">
          Select a subcategory for this product.
        </p>
        <div class="mt-4">
          <div v-for="category in categories" :key="category">
            <input :id="category" type="checkbox" />
            <label :for="category">{{ category }}</label>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-end mt-8">
      <app-button variant="contained" color="success">
        Save and add another
      </app-button>
    
      <app-button @click="addNewProduct" variant="outlined" color="success">
        Save Product
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue";

export default {
  components: {
    "app-button": AppButton,
  },
  data() {
    return {
      categories: [
        "Desktop",
        "Laptops",
        "Battery",
        "Mouse",
        "Scanner",
        "Keyboard",
      ],
        category: "",
        color: "",
        description: "",
        name: "",
        price: "",
        quantity: 0,
        size: "",
        discount: "",
    };
    
  },
  methods: {
    async addNewProduct() {
      try {
        const response = await this.$axios.post(
          "https://youstore-products.herokuapp.com/v1/products",
           {
            category: this.category,
            color: this.color,
            description: this.description,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            size: this.size,
            discount: this.discount,
          })
          console.log(response)
      } catch (err) {
        console.log(err);
      } finally {
        this.$toast.success('Product added succesfully!!')
        this.$router.push("/merchant/products")

      }
    },
  },
};
</script>
