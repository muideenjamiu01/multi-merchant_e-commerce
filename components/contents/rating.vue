<template>
    <div>
        <span 
            v-for="star in rating"
            :key="star" 
            class="text-primary-blue font-light text-sm"
        >
            ⭐
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