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
          <table-cell v-for="column in columns" :key="column" variant="th">
            {{ column }}
          </table-cell>
          <table-cell
            v-if="hasPermission('view-users')"
            variant="th"
          ></table-cell>
        </table-row>
      </template>

      <template #tr-body>
        <div
          v-if="loading"
          class="flex items-center justify-center w-full mt-8"
        >
          <loading-spinners size="medium" color="secondary" />
        </div>
        <offline v-else-if="$nuxt.isOffline"></offline>
        <h2 v-else-if="error" class="text-xl mt-8 w-full text-secondary-600">
          Ooops, An has error occurred.
        </h2>
        <table-row v-for="(row, i) in merchants" :key="row._id">
          <table-cell class="w-[72px]">
            {{ i + 1 }}
          </table-cell>
          <table-cell
            class="max-w-[180px] md:max-w-[240px] truncate capitalize"
            align="left"
            variant="th"
            scope="row"
          >
            {{ row.storeName }}
          </table-cell>
          <table-cell
            class="max-w-[180px] md:max-w-[240px] truncate capitalize"
            align="left"
          >
            {{ row.accountName }}
          </table-cell>
          <table-cell
            class="max-w-[180px] md:max-w-[200px] truncate"
            align="left"
          >
            {{ row.email }}
          </table-cell>
          <table-cell class="max-w-[160px]" align="left">
            {{ row.status }}
          </table-cell>
          <table-cell class="max-w-[160px]"
            >{{ new Date(row.created).toLocaleDateString("en-US") }}
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
              :alt="merchant.storeName"
              :src="merchant.avatar"
              size="medium"
            />
            <h2 class="font-medium text-xl truncate ml-2">
              {{ merchant.storeName }}
            </h2>
          </div>
        </template>
        <template #content>
          <div class="flex items-center my-4">
            <p class="w-[calc(50%_-_16px)] truncate">
              Products: {{ getProductsCount }}
            </p>
            <p class="w-[calc(50%_- 16px)] ml-8 truncate">
              Fulfilled Orders: {{ getProductsCount + getProductsCount }}
            </p>
          </div>
          <div class="flex items-center my-4">
            <div class="flex items-center w-[calc(50%_-_16px)] gap-4">
              Products Quality:
              <star-rating
                read-only
                :show-rating="false"
                :inline="true"
                :star-size="18"
                :increment="0.5"
                :rating="getStarRating"
              />
            </div>
            <div class="flex items-center w-[calc(50%_-_16px)] ml-8 gap-4">
              Customer Rating:
              <star-rating
                read-only
                :show-rating="false"
                :inline="true"
                :star-size="18"
                :increment="0.5"
                :rating="getStarRating"
              />
            </div>
          </div>
          <div class="flex items-center my-4">
            <div class="flex items-center gap-2">
              Order Fulfilment:
              <star-rating
                read-only
                :show-rating="false"
                :inline="true"
                :star-size="18"
                :increment="0.5"
                :rating="getStarRating"
              />
            </div>
          </div>

          <form class="mt-8" @submit="">
            <text-input
              v-model="input.storeName"
              type="text"
              class="min-w-[300px] !my-8"
              name="storeName"
              required
            >
              Name of store
            </text-input>
            <text-input
              v-model="input.accName"
              type="text"
              class="min-w-[300px] !my-8"
              name="name"
              required
            >
              Merchant Name
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
import TableHeader from "@/components/Table/Toolbar.vue";
import AddIcon from "@/components/svg/Add.vue";
import FilterIcon from "@/components/svg/Filter.vue";

export default {
  layout: "admin",
  middleware: "auth-admin",
  components: {
    AppTable,
    TableHeader,
    AddIcon,
    FilterIcon,
  },
  data() {
    return {
      title: "Merchants",
      columns: [
        "S.No",
        "Name of Store",
        "Name",
        "Email",
        "Status",
        "Date Created",
      ],
      error: null,
      loading: false,
      data: [],
      isModalOpen: false,
      input: {
        storeName: "",
        accountName: "",
        email: "",
        phone: "",
        address: "",
        suspended: "",
        verified: "",
      },
      merchant: null,
    };
  },
  computed: {
    merchants() {
      return this.data.map((user) => ({
        _id: user._id,
        storeName: user.storeName,
        accountName: user.accountName,
        email: user.email,
        status: user.isVerified ? "verified" : "unverified",
        created: user.createdAt,
      }));
    },
    getProductsCount() {
      return Math.ceil(Math.random() * 150) + 10;
    },
    getStarRating() {
      return (Math.floor(Math.random() * 10) + 1) / 2;
    },
  },
  async mounted() {
    this.loading = true;

    try {
      const response = await this.$axios.get("/api/users/v1/admins", {
        params: {
          userType: "merchant",
        },
      });

      this.data = response.data.data;
      this.$toast.success(response.data.msg);
    } catch (error) {
      console.log(error);
      this.error = error.response.data.msg;
      this.$toast.error(error.response.data.msg);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    viewUser(id) {
      this.isModalOpen = true;
      this.merchant = this.data.filter((user) => user._id === id)[0];
      this.input.storeName = this.merchant.storeName;
      this.input.accountName = this.merchant.accountName;
      this.input.email = this.merchant.email;
      this.input.phone = this.merchant.phoneNo;
      this.input.address = this.merchant.address;
      this.input.suspended = this.merchant.isRestricted;
      this.input.verified = this.merchant.isVerified;
    },
    closeModal() {
      this.merchant = null;
      this.isModalOpen = false;
    },
    hasPermission(permission) {
      const adminPerms = this.$auth.user.permissions;
      return adminPerms && adminPerms.includes(permission);
    },
  },
};
</script>
