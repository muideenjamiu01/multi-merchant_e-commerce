<template>
  <div class="my-7 space-y-6 text-sm text-primary-black">
    <div class="md:flex gap-8">
      <div class="w-full">
        <label>Category</label><br />
        <select
          class="focus:outline-none w-full border py-2.5 px-4 my-1"
          v-model="category"
        >
          <option value="fashion">Fashion</option>
          <option value="phones">Phones</option>
          <option value="computing">Computing</option>
          <option value="gaming">Gaming</option>
          <option value="home">Home</option>
          <option value="electronics">Electronics</option>
        </select>
        <p class="text-xs text-primary-gray-text">
          Select a category that this product belongs to.
        </p>
      </div>
      <div class="w-full mt-6 md:mt-0">
        <label>Name</label><br />
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
        <form enctype="mutipart/form-data">
          <label for="file">Update Image</label>
          <input type="file" @change="selectFile" ref="file" />
        </form>
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
    </div>

    <div class="flex gap-4 justify-end mt-8">
      <app-button
        @click="addAnotherProduct"
        variant="contained"
        color="success"
      >
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
      file: "",
      category: "",
      color: "#000000",
      description: "",
      name: "",
      price: 0,
      quantity: 0,
      size: "",
      discount: 0,
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
      this.$toast.success("Image is ready for upload");
    },
    async updatePicture(id) {
      const formData = new FormData();
      formData.append("images", this.file);
      try {
        const response = await this.$axios.post(
          `/api/products/v1/products/${id}/upload`,
          formData
        );
        
      } catch (err) {
        this.$toast.error("Failed to upload image");
        console.log(err);
      } finally {
      }
    },
    async addNewProduct() {
      try {
        const response = await this.$axios
          .post("https://youstore-products.herokuapp.com/v1/products", {
            category: this.category,
            color: this.color,
            description: this.description,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            size: this.size,
            discount: this.discount,
          })

          .then((res) => this.updatePicture(res.data.data._id));
          this.$toast.success("Product successfully uploaded!")


      } catch (err) {
        this.$toast.error("Failed to upload product");
        console.log(err);
      } finally {
        this.$router.push("/merchant/products");
      }
    },
    async addAnotherProduct() {
      try {
        const response = await this.$axios
          .post("https://youstore-products.herokuapp.com/v1/products", {
            category: this.category,
            color: this.color,
            description: this.description,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            size: this.size,
            discount: this.discount,
          }).then((res) => this.updatePicture(res.data.data._id))
          await this.$toast.success("Product successfully uploaded, save another!")
         
      } catch (err) {
        this.$toast.error("Failed to upload product, check and try again");
        console.log(err);
      } finally {
      }
    },
  },
};
</script>
