<template>
  <div class="container mx-auto py-8 xs:px-8">
    <!-- <div class="flex justify-between items-center">
      <div>
        <img src="@/assets/images/logos/logo.svg" alt="youveirfy logo" />
      </div>
      <div class="flex justify-center items-center gap-8">
        <svg
          width="18"
          height="21"
          viewBox="0 0 18 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 19H11C11 20.1 10.1 21 9 21C7.9 21 7 20.1 7 19ZM18 17V18H0V17L2 15V9C2 5.9 4 3.2 7 2.3V2C7 0.9 7.9 0 9 0C10.1 0 11 0.9 11 2V2.3C14 3.2 16 5.9 16 9V15L18 17ZM14 9C14 6.2 11.8 4 9 4C6.2 4 4 6.2 4 9V16H14V9Z"
            fill="#262626"
          />
        </svg>
        <div class="rounded-full h-12 w-12 bg-gray-300"></div>
      </div>
    </div>
    <hr class="mt-2" /> -->
    <div class="mt-4">
      <h1 class="text-2xl font-normal text-black">
        Merchant Center
      </h1>
      <p class="text-base font-normal text-black">
        Register and start selling today - create your own seller account.
      </p>
    </div>
    <div class="mt-8">
      <h1 class="text-xl">
        Create Seller Account
      </h1>
      <hr class="mt-2">
    </div>
    <form class="mt-6" @submit.prevent="">
      <div class="w-full">
        <div class="md:flex justify-between gap-8">
          <div class="md:w-1/2">
            <div>
              <label
                for="shop-name"
                class="block mb-2 text-sm font-medium"
              >Name of store</label>
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 text-sm ring-primary-blue focus:border-primary-blue block w-full p-2.5"
              >
              <p class="mt-2 text-sm text-gray-400">
                Choose a unique name for your online shop: this is the name that
                will appear on our marketplace! It is forbidden to use a
                registered trademark in your shop name without the brand
                authorization.
              </p>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="mt-6 md:mt-0">
              <label
                for="shop-name"
                class="block mb-2 text-sm font-medium"
              >Email Address</label>
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
              <p class="mt-2 text-sm text-gray-400">
                Your account will be linked to this email address and we will
                use it to send all our communications.
              </p>
            </div>
          </div>
        </div>

        <div class="md:flex justify-between gap-8">
          <div class="md:w-1/2">
            <div class="flex justify-between items-center mt-6">
              <div>Photo / Logo</div>
              <div class="flex items-end justify-center">
                <input id="fileupload" type="file" hidden>
                <!-- <button
                  id="button"
                  name="button"
                  value="Upload"
                  @click.prevent="thisFileUpload()"
                  class="border-2 border-primary-blue rounded-lg font-bold text-primary-blue px-6 py-1 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-white mr-6"
                >
                  Upload
                </button> -->
                <app-button id="button"
                  name="button"
                  value="Upload"
                  @click.prevent="thisFileUpload()"
                   variant="outlined" color="secondary" size="small">
                     Upload
                </app-button>
              </div>
            </div>
            <hr class="mt-6">
            <div class="flex flex-col mt-2 text-gray-400">
              <span>Recommended size is a square image of not more than 150kb</span>
              <span>File type: JPG, PNG or GIF</span>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="flex justify-between items-center mt-6">
              <div>Banner Photo</div>
              <div class="flex items-end justify-center">
                <input id="fileupload" type="file" hidden>
                <app-button id="button"
                  name="button"
                  value="Upload"
                  @click.prevent="thisFileUpload()"
                   variant="outlined" color="secondary" size="small">
                     Upload
                </app-button>
              </div>
            </div>
            <hr class="mt-6">
            <div class="flex flex-col mt-2 text-gray-400">
              <span>Recommended size is a square image of not more than 150kb</span>
              <span>File type: JPG, PNG or GIF</span>
            </div>
          </div>
        </div>
        <div class="md:flex justify-between gap-8 mt-4">
          <div class="mt-4 md:w-1/2">
            <div>
              <label
                for="shop-name"
                class="block mb-2 text-sm font-medium"
              >Full Name</label>
              <input
                id="full-name"
                type="text"
                class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
              <p class="mt-2 text-sm text-gray-400">
                Your name or the name of the person in your team who will manage
                your account. This is the contact we will primarily use to
                contact you.
              </p>
            </div>
          </div>
          <div class="mt-4 md:w-1/2">
            <div>
              <label
                for="shop-name"
                class="block mb-2 text-sm font-medium"
              >Phone Number</label>
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
              <p class="mt-2 text-sm text-gray-400">
                When we need to contact you urgently, this is the number we will
                call.
              </p>
            </div>
          </div>
        </div>
        <div class="md:flex justify-between gap-8">
          <div class="mt-4 md:w-1/2">
            <div>
              <label
                for="shop-name"
                class="block mb-2 text-sm font-medium"
              >Additional Phone Number</label>
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
              <p class="mt-2 text-sm text-gray-400">
                Another number where we can reach you ?
              </p>
            </div>
          </div>
          <div class="mt-4 md:w-1/2">
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium"
              >Password</label>
              <input
                id="confirm-password"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
              <p class="mt-2 text-sm text-gray-400">
                At least 8 characters containing a capital letter, a lower
                letter and a numeric character
              </p>
            </div>
          </div>
        </div>

        <div class="md:flex justify-between gap-8">
          <div class="mt-4 md:w-1/2">
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium"
              >Confirm Password</label>
              <input
                id="confirm password"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
            </div>
          </div>
          <div class="md:w-1/2" />
        </div>
        <div class="mt-10">
          <h1 class="text-xl">
            Bank Details
          </h1>
          <hr class="mt-2">
          <div class="md:flex justify-between gap-8 mt-4">
            <div class="mt-4 md:w-1/2">
              <label
                for="bank-name"
                class="block mb-2 text-sm font-medium"
              >Bank Name</label>
              <input
                id="bank-name"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
            </div>
            <div class="mt-4 md:w-1/2">
              <label
                for="account-name"
                class="block mb-2 text-sm font-medium"
              >Account Name</label>
              <input
                id="account-name"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
            </div>
          </div>
          <div class="md:flex justify-between gap-8">
            <div class="mt-4 md:w-1/2">
              <label
                for="account-number"
                class="block mb-2 text-sm font-medium"
              >Account Number</label>
              <input
                id="account-number"
                type="text"
                class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
              >
            </div>
            <div class="md:w-1/2" />
          </div>
        </div>
      </div>
      <div class="flex mt-6">
        <div><input type="radio" class="mr-4"></div>
        <div class="">
          <p>
            I acknowledge that I have read and hereby accept the terms and
            conditions in Youstore's <br>
            <span class="text-primary-blue">third party partners', Terms of Use, Merchant Agreement
              <span class="text-black">and</span> Privacy Policy</span>
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center">
          <app-button to="dashboard" uppercase variant="contained" size="large">
          Get Started
          </app-button>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue"

export default {
  layout: 'empty',
    components: {
      'app-button': AppButton
    },
  methods: {
    thisFileUpload () {
      document.getElementById('fileupload').click()
    }
  }
}
</script>

<style lang="scss" scoped></style>
