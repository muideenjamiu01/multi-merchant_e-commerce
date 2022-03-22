<template>
  <div role="presentation" class="modal-root fixed z-50 inset-0 ">
  <!-- <div class="modal-backdrop fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30"> -->
    <slot name="backdrop"></slot>
    <div role="presentation" tabindex="-1" class="modal-container h-full justify-center items-center flex">
      <div role="dialog" aria-labelledby="modal-title" aria-describedby="modal-content" class="modal text-secondary-800 rounded transition relative overflow-y-auto m-8 bg-white shadow-md max-w-[600px] max-h-[calc(100%_-_64px)] flex-col flex">
      <div id="modal-title" class="modal-header py-4 px-6 flex-[0_0_auto] flex">
        <slot name="header"></slot>
      </div>
      
      <div id="modal-content" class="modal-content relative flex-auto overflow-y-auto pt-0 py-5 px-6 border-b border-b-secondary-400 border-t border-t-secondary-400">
        <slot name="content"></slot>
      </div>

      <div class="modal-actions flex items-center justify-end flex-[0_0_auto] p-2 relative">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
}
</script>

<style>
</style>