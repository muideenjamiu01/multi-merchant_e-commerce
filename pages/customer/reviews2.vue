<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsCustomerProfileCard />
    </aside>
    <div class="border border-gray-300 rounded-lg mt-5 ml-10 p-4 bg-success-200 w-full" >
        <h1 class="font-bold">
            My reviews from verified purchases
        </h1>
        <div
            v-if="loading"
            class="flex justify-center items-center mt-24"
        >
            <LoadingSpinners size="large" color="primary" />
        </div>
        <div v-else
            v-for="order in orders"
            :key="order._id"
            class="border border-gray-300 rounded-lg mt-5 p-4 bg-rose-200"
        >
            <p>{{order._id}}</p>
            <div class="flex justify-between">
                <div class="w-full text-sm font-light pt-4 border-t border-gray-100 bg-primary-blue mb-6">
                    <div class="md:flex items-center justify-between">
                        <div class="md:flex mb-6">
                        <div class="w-24 h-24 bg-primary-gray mr-4">
                            <img :src="order.image" alt="product-image" />
                        </div>
                        <div class="space-y-0.5">
                            
                            <h1 v-for="review in reviews" :key="review._id"  @click="deleteProductReview(review._id, order)" class="bg-rose-300 font-medium" >
                                Review: {{review.comment}} 
                            </h1>
                            <h1 class="font-medium" >
                                {{ order.name }}
                            </h1>
                            <button class="font-medium bg-primary-blue" @click="getProductReview(order)">View reviews for this product</button>
                            <p class="font-medium">Price: ₦ {{Number(order.price).toLocaleString() }}</p>
                            
                            <p>
                                
                            </p>
                            <p>{{comment}}</p>
                            <textarea name="review" id="review" cols="30" rows="10" v-model="comment">
                                Hello
                            </textarea>


                            <app-button
                                class="w-[100px]"
                                @click="addNewReview(order.id)"
                                variant="contained"
                                size="small"
                                color="success"
                            >
                                Add A Review
                            </app-button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  import AppButton from "@/components/buttons/Button.vue";
  import { mapGetters, mapActions } from "vuex";
  export default {
    middleware: "auth",
    data () {
      return {
        comment: "",
        reviews: []
        }
    },
    components: {
      "app-button": AppButton,
    },
    computed: mapGetters({
        orders: "reviews2/getOrders",
	    loading: "reviews2/loading",
      
    }),
    created() {
      this.$store.dispatch("reviews2/fetchOrders");
    },
    methods: {
        async getProductReview(item) {
             try {
                const response = await this.$axios.get(
                    `https://youstore-products.herokuapp.com/v1/products/${item.id}/one`,
                   
                );
                console.log(response.data.data);
                this.reviews = response.data.data.reviews
            } catch (error) {
                alert("error")
            } finally {
            // commit("setLoading", false);
            }
        },
        async postReviews(id, comment) {
            // commit("setLoading", true);
            // const productId = rootState.products.singleProduct._id
            try {
                const response = await this.$axios.post(
                    // `https://youstore-products.herokuapp.com/v1/product/${productId}/review`,
                    `https://youstore-products.herokuapp.com/v1/product/${id}/review`,
                    {
                    comment: comment,
                    rating: 4,
                    }
                );
                // alert(id)
                // console.log(response);
                // alert("check")
                this.comment = ""
                this.$toast.success("Review added succesfully")
                this.refresh(id)
            // commit("setReviews", reviewData);
            } catch (error) {
            // commit("setError", error.message);
            alert("error")
            } finally {
            // commit("setLoading", false);
            }
        },
        addNewReview(id) {
            // alert(id);
            // this.$router.push("/customer/create-reviews")
            this.postReviews(id, this.comment)
        },
        async refresh(item) {
            try {
                const response = await this.$axios.get(
                    `https://youstore-products.herokuapp.com/v1/products/${item}/one`,
                );
                this.reviews = response.data.data.reviews
            } catch(error) {
            // commit("setError", error.message);
            alert("error")
            } finally {
            // commit("setLoading", false);
            }
        },
        async deleteProductReview(item, product) {
            try {
                const response = await this.$axios.delete(
                    `https://youstore-products.herokuapp.com/v1/product/${item}`
                );
                this.getProductReview(product)
            } catch (error) {
                console.log(response);
            alert("error")
            } finally {
            }
        },
    },
  }
</script>







</script>
