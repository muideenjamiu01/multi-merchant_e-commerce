<template>
  <div>
    <input
      type="file"
      ref="file"
      :name="uploadFieldName"
      @change="onImageChange($event.target.name, $event.target.files)"
      class=""
    />
  </div>
</template>

<script>
export default {
  name: "image-input",
  data: () => ({
    uploadFieldName: "file",
    maxSize: 1024,
  }),
  props: {
    // Use "value" here to enable compatibility with v-model
     value: Object,
  },
};
</script>

<style lang="scss">

</style>
