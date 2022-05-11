<template>
  <div class="w-full overflow-x-auto">
    <slot name="toolbar"></slot>
    <table role="table" class="table w-full border-collapse my-4">
      <thead class="table-head">
        <slot name="tr-head"></slot>
      </thead>
      <tbody class="table-body">
        <slot name="tr-body"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "AppTable",
};
</script>

<style scoped>
.table {
  display: table;
  border-spacing: 0;
  min-width: 650px;
}

.table-head {
  display: table-header-group;
}

.table-body {
  display: table-row-group;
}
</style>
