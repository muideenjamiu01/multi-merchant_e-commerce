<template>
  <header class="flex flex-shrink-0 items-center top-0 bg-white z-50 w-full shadow">
      <div class="h-10 sm:hidden block">
        <nuxt-link to="/" class="mr-6">
          <brand-logo class="!w-full !h-full" />
        </nuxt-link>
      </div>

    <!--
      <input
        type="text"
        placeholder="Search Youstore"
        class="focus:outline-none bg-transparent w-full"
      >
      <img class="cursor-pointer" src="@/assets/images/icons/search-icon.svg">
    </div>
     -->
    <nav
      class="px-4 sm:px-6 md:px-8 h-14 flex items-center justify-end max-w-screen-xl flex-grow"
    >
      <!-- <NuxtLink
        to="/merchant/transactions"
        class="hover:bg-secondary-100 relative rounded-full p-[5px]"
      >
        <notif-icon />
      </NuxtLink> -->

      <dropdown-menu>
        <template #reference="{ isOpen, handleShow, handleHide }">
          <app-button
            class="rounded-full hover:!bg-transparent"
            size="small"
            @click.native="() => isOpen ? handleHide($event) : handleShow($event)"
          >
            <user-avatar 
              class="w-8 h-8"
              :src="user.avatar"
              :alt="user.firstName"
            />
          </app-button>
        </template>
        <template #content="{ handleHide }">
          <ul class="m-0 py-2 px-0 min-w-[180px] relative list-none outline-0">
            <li
              v-for="(link, index) in links"
              :key="index"
              class="
                bg-transparent
                outline-0
                border-0
                m-0
                rounded-none
                cursor-pointer
                select-none
                align-middle
                appearance-none
                text-inherit
                font-normal
                text-base
                flex
                justify-start
                items-center
                relative
                min-h-[48px]
                py-[6px]
                px-4
                box-border
                whitespace-nowrap
              "
              @click="handleHide"
            >
              <NuxtLink :to="link.to">
                {{ link.label }}
              </NuxtLink>
            </li>
            <div class="border-t" />
            <app-button class="" full-width @click="() => { logout(); handleHide() }">
              Log out
            </app-button>
          </ul>
        </template>
      </dropdown-menu>
    </nav>
  </header>
  <!-- <header
    class="flex flex-col flex-shrink-0 items-center sticky top-0 bg-white z-50 w-full shadow"
  >
      <div class="h-10">
        <nuxt-link to="/" class="mr-6">
          <brand-logo class="!w-full !h-full" />
        </nuxt-link>
      </div>
      <div class="flex gap-8 items-center">
        <notification-icon class="cursor-pointer" />
        <div class="w-10 h-10 rounded-full bg-primary-blue-light cursor-pointer"></div>
      </div>
  </header> -->
</template>

<script>
import BrandLogo from "@/components/svg/Logo";
import NotificationIcon from "@/components/svg/Notifications";

export default {
  components: {
    "brand-logo": BrandLogo,
    NotificationIcon,
  },
  data() {
    return {
      links: [
        {
          to: '/admin/dashboard',
          label: 'Dashboard'
        },
        {
          to: '/admin/users',
          label: 'Admin'
        },
        {
          to: '/admin/customers',
          label: 'Customers'
        },
        {
          to: '/admin/merchants',
          label: 'Merchants'
        },
        {
          to: '/admin/products',
          label: 'Products'
        },
        {
          to: '/admin/orders',
          label: 'Orders'
        }
      ]
    }
  },
  computed: {
    user() {
      return this.$auth.user
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      window.localStorage.removeItem("ys.user_type");
      this.$toast.success("Successfully Signed Out");
    },
  }
};
</script>
