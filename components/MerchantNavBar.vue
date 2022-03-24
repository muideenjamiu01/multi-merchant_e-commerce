<template>
  <div class="flex justify-end items-center sm:px-6 px-4 h-12 flex-grow">
    <!--
      <input
        type="text"
        placeholder="Search Youstore"
        class="focus:outline-none bg-transparent w-full"
      >
      <img class="cursor-pointer" src="@/assets/images/icons/search-icon.svg">
    </div>
     -->
    <div class="flex items-center justify-end">
      <NuxtLink
        to="/merchant/transactions"
        class="hover:bg-secondary-100 relative rounded-full p-[5px]"
      >
        <notif-icon />
      </NuxtLink>

      <dropdown-menu>
        <template v-slot:dropdown-element="{ setOpen, isOpen }">
          <app-button
            class="rounded-full hover:!bg-transparent"
            size="small"
            @click.native="setOpen(!isOpen)"
          >
            <user-avatar
              class="w-8 h-8"
              :src="user.avatar"
              :alt="user.storeName"
            />
          </app-button>
        </template>
        <template v-slot:dropdown-content="{ setOpen }">
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
              @click="setOpen(false)"
            >
              <NuxtLink :to="link.to">
                {{ link.label }}
              </NuxtLink>
            </li>
            <div class="border-t" />
            <app-button class="" @click="logout" fullWidth>
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
import NotificationIcon from "@/components/svg/Notifications.vue";

export default {
  components: {
    "notif-icon": NotificationIcon,
    "user-avatar": UserAvatar,
  },
  data() {
    return {
      isOpen: false,
      links: [
        {
          to: '/merchant/dashboard',
          label: 'Dashboard'
        },
        {
          to: '/merchant/products',
          label: 'Products'
        },
        {
          to: '/merchant/transactions',
          label: 'Transactions'
        },
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
      return this.$auth.user;
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
