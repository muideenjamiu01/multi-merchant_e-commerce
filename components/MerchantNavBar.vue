<template>
  <div class="flex items-center sm:px-6 px-4 h-12">
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
    <div class="flex items-center justify-end flex-grow">
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
              :alt="user.storeName"
            />
          </app-button>
        </template>
        <template #content="{ handleHide }">
          <ul class="m-0 py-2 px-0 relative list-none outline-0">
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
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/components/Avatar";
import BrandLogo from "@/components/svg/Logo";
import NotificationIcon from "@/components/svg/Notifications.vue";

export default {
  components: {
    "notif-icon": NotificationIcon,
    "user-avatar": UserAvatar,
    BrandLogo
  },
  data() {
    return {
      links: [
        {
          to: '/merchant/dashboard',
          label: 'Dashboard'
        },
        {
          to: '/merchant/products',
          label: 'Products'
        },
        // {
        //   to: '/merchant/transactions',
        //   label: 'Transactions'
        // },
        {
          to: '/merchant/withdrawals',
          label: 'Withdrawals'
        },
        {
          to: '/merchant/settings',
          label: 'Settings'
        },
      ]
    }
  },
  computed: {
    user() {
      if (this.$auth.user) {
        return this.$auth.user;
      }
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      window.localStorage.removeItem("ys.user_type");
      this.$toast.show("Successfully Signed Out");
    },
  },
};
</script>
