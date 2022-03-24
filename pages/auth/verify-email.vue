<template>
  <div
    class="
      relative
      w-full
      h-full
      after:fixed
      after:h-[70vh]
      after:-z-10
      after:top-0
      after:-skew-y-12
      after:origin-top-left
      after:bg-primary-400
      after:w-full
    "
  >
    <div
      class="
        min-h-[100vh]
        border-box
        flex
        w-full
        flex-row flex-wrap
        items-center
        justify-center
      "
    >
      <div
        class="
          box-border
          m-0
          flex-0
          max-w-full
          flex-row
          grow
          basis-0
          flex
          justify-center
        "
      >
        <div
          class="
            w-full
            px-6
            py-10
            sm:m-8
            bg-white
            shadow-md
            sm:px-10 sm:py-12
            max-w-lg
          "
        >
          <div class="h-10">
            <nuxt-link to="/" class="mr-6">
              <brand-logo class="!w-full !h-full" />
            </nuxt-link>
          </div>

          <div
            v-if="error"
            class="
              flex
              relative
              items-center
              text-error-900
              my-4
              rounded
              bg-error-50
              w-full
            "
          >
            <span class="text-center flex-grow p-2">Your account has been verified</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CancelIcon from "@/components/svg/Cancel.vue"
import BrandLogo from "@/components/svg/Logo";

export default {
  layout: "authpages",
  name: "VerifyEmail",
  components: {
    "brand-logo": BrandLogo,
    "cancel-icon": CancelIcon,
  },
  mounted() {
    setTimeout(() => this.$router.push('/'), 7000)
  },
};
</script>
