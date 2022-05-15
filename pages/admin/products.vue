<template>
  <div class="px-4 py-8">
    <div class="md:flex">
      <!-- <side-nav merchant>
        <ContentsAdminProfileCard />
      </side-nav> -->
      <main class="sm:ml-72 sm:w-[calc(100%_-_288px)] my-4">
        Products
        <Table/>
      </main>
    </div>
  </div>
</template>

<script>
import Table from "~/components/Table/index.vue";

export default {
  layout: "admin",
  components: {
    Table
},
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
