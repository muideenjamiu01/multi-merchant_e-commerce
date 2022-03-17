<template>
  <div>
    <div
      class="w-72 bg-primary-blue-light py-8 px-7 hidden lg:block mr-8 text-sm text-center"
    >
      <div class="flex flex-col ">
        <img v-if="!$auth.user" src="../../assets/images/logos/merchant-logo.svg" alt="merchant logo">
        <img class="ml-[50px] " v-else :src="$auth.user.photo" width="100px" height="100px" alt="merchant logo">
         
        <div class="flex flex-col text-left mx-4 my-4 ">
          <p class="font-medium ">
            Address: &nbsp {{$auth.user.address}}
          </p>
          <p >
            Merchant ID: &nbsp {{$auth.user.id}}
          </p>
        </div>
      </div>

      <div class="space-y-6 mt-6 pt-4 border-t">
        <NuxtLink
          v-for="nav in navs"
          :key="nav.name"
          :to="'/merchant/' + nav.link"
          class="flex items-center space-x-5 font-light cursor-pointer"
        >
          <div class="w-5">
            <img :src="nav.icon" alt="">
          </div>
          <h1 class="text-xl">
            {{ nav.name }}
          </h1>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      navs: [
        {
          icon: require('@/assets/images/icons/overview-icon.svg'),
          name: 'Overview',
          link: 'dashboard'
        },
        {
          icon: require('@/assets/images/icons/products-icon.svg'),
          name: 'Products',
          link: 'products'
        },
        {
          icon: require('@/assets/images/icons/transactions-icon.svg'),
          name: 'Transactions',
          link: 'transactions'
        },
        {
          icon: require('@/assets/images/icons/customers-icon.svg'),
          name: 'Customers',
          link: 'customers'
        },
        {
          icon: require('@/assets/images/icons/withdrawals-icon.svg'),
          name: 'Withdrawals',
          link: 'withdrawals'
        },
        {
          icon: require('@/assets/images/icons/settings-icon.svg'),
          name: 'Settings',
          link: 'settings'
        }
      ]
    }
  }
}
</script>
