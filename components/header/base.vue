<template>
  <header
    class="
      flex flex-col flex-shrink-0
      items-center
      sticky
      top-0
      bg-white
      z-50
      w-full
      shadow
    "
  >
    <div
      class="
        px-4
        sm:px-6
        md:px-8
        h-14
        flex
        items-center
        justify-between
        max-w-screen-xl
        w-full
      "
    >

      <slot name="logo"></slot>

      <app-button
        v-if="isMerchant"
        to="/merchant/dashboard"
        color="primary"
        class="hidden justify-end md:flex capitalize mr-4"
      >
        my dashboard
      </app-button>

      <app-button
        v-else
        to="/merchant/new"
        color="primary"
        class="hidden md:flex mr-4"
      >
        Become a merchant
      </app-button>

      <div class="flex items-center justify-end gap-2">
        <slot name="search"></slot>

        <slot name="dropdown"></slot>

        <slot name="cart"></slot>
      </div>
    </div>
  </header>
</template>
