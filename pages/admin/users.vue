<template>
  <div>
    <app-table :columns="columns" :data="data">
      <template #toolbar>
        <table-toolbar :title="title">
          <template #buttons>
            <icon-button @click="setTransferModal">
              <add-icon size="small" color="primary" />
            </icon-button>
            <icon-button square>
              <filter-icon size="small" color="primary" />
            </icon-button>
          </template>
        </table-toolbar>
      </template>

      <template #tr-head>
        <table-row>
          <table-cell v-for="column in columns" :key="column" variant="th">
            {{ column }}
          </table-cell>
        </table-row>
      </template>

      <template #tr-body>
        <table-row v-for="i in 20" :key="i">
          <table-cell>{{ data._id }}</table-cell>
          <table-cell>{{ data.nameOfStore }}</table-cell>
          <table-cell>{{ data.name }}</table-cell>
          <table-cell>{{ data.email }}</table-cell>
          <table-cell>{{ data.status }}</table-cell>
          <table-cell>{{
            new Date(data.lastSeen).toLocaleDateString("en-US")
          }}</table-cell>
          <table-cell>{{
            new Date(data.created).toLocaleDateString("en-US")
          }}</table-cell>
        </table-row>
      </template>
    </app-table>
    <transition name="fade">
      <app-modal
        v-if="transferModal"
        :open="transferModal"
        :close-modal="closeTransferModal"
      >
        <template #header>
          <h2 class="font-medium text-xl">Super Admin</h2>
        </template>
		<template #content>
            <form class="min-w-[300px]" @submit.prevent="createAdmin">
            <legend class="font-medium my-4">Create Admin</legend>
            
			<!-- <div class="w-full h-full bg-purple-50">hy</div> -->
            <text-input
              v-model="adminDetails.email"
              type="email"
              name="email"
              required
            >
              email
            </text-input>
			<div>
              <label for="bank-select" class="block mb-2 text-sm font-medium"
                >Role</label
              >
              <select
                id="role-select"
                v-model.trim="adminDetails.role"
                name="Role"
                class="
                  flex
                  items-center
                  outline-0
                  border border-secondary-200
                  rounded-md
                  shadow-sm
                  focus:outline-none
                  focus:bg-primary-100
                  focus:border-primary-200
                  focus:ring-primary-200
                  focus:ring-1
                  sm:text-sm
                  p-2
                  my-1
                  w-full
                "
                required
              >
                <option value="admin" >admin</option>
                <option value="superAdmin" >superAdmin</option>
                <option value="manager" >manager</option>
                
              </select>
            </div>

            <template>
         
          <app-button
            variant="contained"
            color="success"
            :disabled="loading"
            type="submit"
            class="pl-4 ml-3 mt-4 flex justify-center items-center"
          >
            {{ loading ? "creating" : "Create" }}
            <loading-spinners
              v-if="loading"
              size="small"
              color="white"
              class="mx-4"
            ></loading-spinners>
          </app-button>
        </template>
          </form>
         </template>
		  
      </app-modal>
    </transition>
  </div>
</template>

<script>
import AppTable from "@/components/Table";
import TableHeader from "@/components/Table/Toolbar.vue";
import AddIcon from "@/components/svg/Add.vue";
import FilterIcon from "@/components/svg/Filter.vue";
import AppModal from "@/components/Modals";

import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";

export default {
  layout: "admin",
  //   middleware: 'auth-merchant',
  components: {
    AppTable,
    TableHeader,
    AddIcon,
    FilterIcon,
    AppModal,
	ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      transferModal: false,
	  loading:false,
      title: "ADMIN",
      columns: [
        "ID",
        "Name of Store",
        "Name",
        "Email",
        "Status",
        "Last Seen",
        "Date Created",
      ],

      data: {
        _id: "29892739",
        nameOfStore: "MMJ Watch store",
        name: "Ellie Gonçalves",
        email: "ellie.goncalves@example.com",
        status: "verified",
        lastSeen: new Date("2022-03-14 17:14:29.847696"),
        created: new Date("2021-02-06 07:37:07.658872"),
      },
	  adminDetails:{
		  email:"",
		  role:""
	  },
    };
  },
  methods: {
	 async createAdmin(){
		 
		 try{
			 const response = await this.$axios.post('/api/users/v1/admins/', this.adminDetails)
		 } catch(e){

		 }
		 this.adminDetails = ""
	  },
	  
    setTransferModal() {
      this.transferModal = true;
      
    },
    closeTransferModal() {
      this.transferModal = false;
      this.loading = false;
      this.error = null;
    
      
      
    },
  }
};
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}</style>
