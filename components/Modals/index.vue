<template>
  <div class="modal-backdrop fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30">
    <div class="modal bg-white shadow-md overflow-x-auto flex flex-col">
      <header class="modal-header relative justify-between p-4 flex border-b border-b-secondary-400">
        <slot name="header"></slot>
        <icon-button
          class="!absolute top-0 right-0"
          @click="close"
        >
          x
        </icon-button>
      </header>

      <section class="modal-body relative pt-5 px-3">
        <slot name="body">
          This is the default body!
        </slot>
       </section>

      <footer class="modal-footer relative justify-between p-4 flex border-b border-b-secondary-400">
        <slot name="footer"></slot>
      </footer>
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