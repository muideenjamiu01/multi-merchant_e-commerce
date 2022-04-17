<template>
    <div>
        <span 
            v-for="star in rating"
            :key="star" 
            class="text-xl"
        >
            &#9733;
        </span>
        <span 
            v-for="star in 5-rating"
            :key= "`${star} 1`" 
            class="text-xl"
        >
            &#9734;
        </span>

    </div>
</template>

<script>
    export default {
        props: {
            rating: "",
        },
    }
</script>