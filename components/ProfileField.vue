<template>
    <div class="flex">
        <div v-if="editing" class="flex-grow">
            <label :for="label" class="font-medium text-xl mb-4">{{ label }}</label>
            <input :id="label" v-model="input" :type="type" class="after:w-full after:h-[1px] after:bg-secondary-200 my-1">
            <p class="after:w-full after:h-[1px] after:bg-secondary-200 my-1">{{ value }}</p>
        </div>
        <div v-else class="flex-grow">
            <h4 class="font-medium mb-4 text-xl">{{ label }}</h4>
            <p class="after:w-full after:h-[1px] after:bg-secondary-200 my-1">{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        editing: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            [this.input]: value
        }
    }
}
</script>