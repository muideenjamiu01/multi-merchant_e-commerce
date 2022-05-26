<template>
<div>
  <app-table>
    <template #toolbar>
      <table-toolbar :title="title">
        <template #buttons>
          <icon-button square>
            <filter-icon size="small" color="primary" />
          </icon-button>
        </template>
      </table-toolbar>
    </template>

    <template #tr-head>
      <table-row class="bg-secondary-200">
        <table-cell v-for="column in columns" :key="column" scope="col" variant="th">
          {{ column }}
        </table-cell>
          <table-cell
            v-if="hasPermission('view-users')"
            variant="th"
          ></table-cell>
      </table-row>
    </template>

    <template #tr-body>
      <div v-if="loading" class=" flex items-center justify-center w-full mt-8">
        <loading-spinners size="medium" color="secondary" />
      </div>
      <offline v-else-if="$nuxt.isOffline"></offline>
      <h2 v-else-if="error" class="text-xl mt-8 w-full text-secondary-600">
        Ooops, An has error occurred.
      </h2>
      <template v-else>
        <table-row v-for="(row, i) in customers" :key="row._id">
          <table-cell class="w-[72px]">
              {{ i + 1 }}
          </table-cell>
          <table-cell class="max-w-[180px] md:max-w-[240px] truncate capitalize" align="left" variant="th" scope="row">
              {{ row.name }}
          </table-cell>
          <table-cell class="max-w-[180px] md:max-w-[200px] truncate" align="left">
              {{ row.email }}
          </table-cell>
          <table-cell class="max-w-[160px]" align="left">
              {{ row.phone }}
          </table-cell>
          <table-cell class="max-w-[160px]" align="left">
              {{ row.status }}
          </table-cell>
          <table-cell class="max-w-[160px]">{{
            new Date(row.created).toLocaleDateString("en-US")
          }}
          </table-cell>
          <table-cell v-if="hasPermission('view-users')">
            <app-button
              type="button"
              variant="outlined"
              size="small"
              color="secondary"
              @click="viewUser(row._id)"
            >
              view
            </app-button>
          </table-cell>
        </table-row>
      </template>
    </template>
  </app-table>

    <transition name="fade">
      <app-modal
        v-if="isModalOpen"
        :open="isModalOpen"
        :close-modal="closeModal"
      >
        <template #header>
          <div class="flex items-center flex-grow">
            <user-avatar
              :alt="customer.firstName"
              :src="customer.avatar"
              size="medium"
            />
            <h2 class="font-medium text-xl truncate ml-2">
              {{ customer.firstName + ' ' + customer.lastName }}
            </h2>
          </div>
        </template>
        <template #content>
          <div class="flex items-center my-4">
            <p class="w-[calc(50%_-_16px)] truncate">
              Orders: {{ getOrdersCount }}
            </p>
            <p class="w-[calc(50%_- 16px)] ml-8 truncate">
              Wishlist: {{ getOrdersCount + getOrdersCount }}
            </p>
          </div>

          <form class="mt-8" >
            <text-input
              v-model="input.firstName"
              type="text"
              class="min-w-[300px] !my-8"
              name="storeName"
              required
            >
              First Name
            </text-input>
            <text-input
              v-model="input.lastName"
              type="text"
              class="min-w-[300px] !my-8"
              name="name"
              required
            >
              Last Name
            </text-input>
            <text-input
              v-model="input.email"
              type="email"
              class="min-w-[300px] !my-8"
              name="email"
              required
            >
              Email
            </text-input>
            <text-input
              v-model="input.phone"
              type="text"
              class="min-w-[300px] !my-8"
              name="phone"
              required
            >
              Phone
            </text-input>
            <text-input
              v-model="input.address"
              type="text"
              class="min-w-[300px] !my-8"
              name="address"
              required
            >
              Address
            </text-input>
            <div class="flex items-center mt-8 gap-4">
              <input
                id="verified"
                v-model="input.verified"
                type="checkbox"
                class=""
              />
              <label for="verified" class=""> Verified </label>
            </div>
            <div v-if="hasPermission('sanction-users')" class="flex items-center my-4 gap-4">
              <input
                id="suspended"
                v-model="input.suspended"
                type="checkbox"
                class=""
              />
              <label for="suspended" class=""> Suspended </label>
            </div>
            <div class="flex justify-end">
              <app-button
                variant="contained"
                color="success"
                :disabled="loading"
                type="submit"
                class="pl-4 ml-3"
              >
                {{ loading ? "Submitting" : "Submit" }}
                <loading-spinners
                  v-if="loading"
                  size="small"
                  color="white"
                  class="mx-4"
                ></loading-spinners>
              </app-button>
            </div>
          </form>
        </template>
      </app-modal>
    </transition>
    </div>
</template>

<script>
import AppTable from "@/components/Table";
import TableToolbar from "@/components/Table/Toolbar.vue";
import AddIcon from "@/components/svg/Add.vue";
import FilterIcon from "@/components/svg/Filter.vue";

export default {
  layout: "admin",
  middleware: "auth-admin",
  components: {
    AppTable,
    TableToolbar,
    AddIcon,
    FilterIcon
  },
  data() {
    return {
      title: "Customers",
      columns: [
        "S.No",
        "Name",
        "Email",
        "Phone",
        "Status",
        // "Last Seen",
        "Date Created",
      ],
      error: null,
      loading: false,
      data: [],
      isModalOpen: false,
      input: {
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        address: "",
        suspended: "",
        verified: "",
      },
      customer: null
    };
  },
  computed: {
    customers() {
      return this.data.map(user => ({
         _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phoneNo,
        status: user.isVerified ? 'verified' : 'unverified',
        // lastSeen: new Date("2022-03-14 17:14:29.847696"),
        created: user.createdAt,
      }))
    },
    getOrdersCount() {
      return Math.ceil(Math.random() * 50) + 10;
    }
  },
  async mounted() {
    this.loading = true

    try {
      const response = await this.$axios.get('/api/users/v1/admins', {
        params: {
          userType: "customer"
        }
      })

      this.data = response.data.data
      this.$toast.success(response.data.msg)
      console.log(response)
    } catch(error) {
      console.log(error)
      this.error = error.response.data.msg
      this.$toast.error(error.response.data.msg)
    } finally {
      this.loading = false
    }
  },
  methods: {
    viewUser(id) {
      this.isModalOpen = true
      this.customer = this.data.filter(user => user._id === id)[0]
      this.input.firstName = this.customer.firstName;
      this.input.lastName = this.customer.lastName;
      this.input.email = this.customer.email;
      this.input.phone = this.customer.phoneNo;
      this.input.address = this.customer.address;
      this.input.suspended = this.customer.isRestricted;
      this.input.verified = this.customer.isVerified;
    },
    closeModal() {
      this.customer = null
      this.isModalOpen = false
    },
    hasPermission(permission) {
      const adminPerms = this.$auth.$state.user.user.permissions;
      return adminPerms && adminPerms.includes(permission);
    }
  }
};
</script>
