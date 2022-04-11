<template>
    <p>
        <!-- {{review}} -->
    </p>
</template>

<script>
    export default {
        data () {
            return {
                review : "review"
            }
        },
        async getProductReview(id) {
             try {
                const response = await this.$axios.get(
                    // `https://youstore-products.herokuapp.com/v1/product/${productId}/review`,
                    `https://youstore-products.herokuapp.com/v1/product/${id}`,
                   
                );
                alert("success")
                console.log(response);
            // commit("setReviews", reviewData);
            } catch (error) {
            // commit("setError", error.message);
            alert("error")
            } finally {
            // commit("setLoading", false);
            }
        },
    }
</script>
