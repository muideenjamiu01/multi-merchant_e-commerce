<template>
  <Popper
    v-slot="{ isOpen, handleShow, handleHide }"
    :reference="reference"
    :content="content"
  >
    <div class="relative mx-4 grow max-w-2xl">
      <form
        ref="reference"
        class="bg-primary-100 h-10 flex items-center rounded-md"
        @submit.prevent="handleSubmit"
      >
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Search products..."
          class="
            bg-transparent
            relative
            px-4
            h-[38px]
            w-full
            flex
            items-center
            rounded
            peer
            outline-0
            transition-colors
            focus:outline-none
            placeholder:italic placeholder:text-secondary-400
            z-30
            focus:rounded-r-none
            focus:bg-white
            focus:border-primary-200
            focus:ring-primary-200
            focus:ring-1
          "
          @input="handleInput"
          @focus="handleShow"
        />
        <icon-button
          type="submit"
          class="
            p-[9px]
            hover:!bg-primary-200
            bg-transparent
            rounded-md
            peer-focus:rounded-l-none
            peer-focus:z-30
            peer-focus:ring-1
            peer-focus:ring-primary-200
            peer-focus:bg-white
            peer-focus:hover:bg-primary-100
            peer-focus:border-primary-200
          "
          size="small"
        >
          <search-icon size="small" />
        </icon-button>
      </form>

      <transition name="fade">
        <Backdrop :is-open="isOpen" :close="handleHide" />
      </transition>
      <transition name="fade">
        <div v-show="isOpen" ref="content" :class="classes">
          <div v-if="loading" class="flex justify-center w-full my-4">
            <loading-spinners size="medium" color="secondary" />
          </div>
          <div v-else-if="errors" class="w-full my-4">
            <p class="text-lg text-secondary-600 text-center">
              {{ errors }}
            </p>
          </div>
          <div v-else-if="$nuxt.isOffline" class="w-full my-4">
            <p class="text-secondary-600 text-center">
              You are offline. Check your internet connection and try again.
            </p>
          </div>

          <search-results v-else :products="products" :view-product="viewProduct" :hide="handleHide" />

        </div>
      </transition>
    </div>
  </Popper>
</template>

<script>
import { mapGetters } from "vuex"
import _debounce from "lodash.debounce";
import slugify from "@/helpers/slugify"
import SearchIcon from "@/components/svg/Search";

export default {
  name: "Search",
  components: {
    SearchIcon,
  },
  data() {
    return {
      reference: null,
      content: null,
      searchTerm: "",
      focusSearch: false
    };
  },
  computed: {
    ...mapGetters({
      products: "search/products",
      errors: "search/errors",
      loading: "search/loading"
    }),
    classes() {
      return "bg-white z-30 rounded shadow-md max-h-72 box-border overflow-x-hidden overflow-y-auto w-full block outline-0";
    },
  },
  mounted() {
    this.content = this.$refs.content;
    this.reference = this.$refs.reference;
  },
  methods: {
    handleInput: _debounce(function () {
      if (this.searchTerm) {
        this.$store.dispatch("search/search", this.searchTerm);
      }
    }, 300),
    handleSubmit() {
      if (this.searchTerm) {
        this.$router.push({
          path: "/products",
          query: { search: this.searchTerm },
        });
      }
    },
    async viewProduct(product) {
      const slug = slugify(`${product.name} ${product._id}`)
      await this.$store.dispatch("products/getSingleProduct", product)
      this.searchTerm = ''
      this.$store.commit("search/setResults", [])
      this.$router.push(slug);
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>