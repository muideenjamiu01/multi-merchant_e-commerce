<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full">
      <form>
        <p class="font-medium mb-5">
          Personal Information
        </p>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Account Name</label>
            <input
              id="integration_shop_name"
              placeholder="Account Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">E-Mail</label>
            <input
              id="integration_shop_name"
              placeholder="Email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Phone Number</label>
            <input
              id="integration_shop_name"
              placeholder="Phone Number"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="tel"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Old Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-xs"
          >
            <label class="font-semibold text-gray-600 py-2">Hidden field</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">New Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-xs"
          >
            <label class="font-semibold text-gray-600 py-2">Hidden field</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Confirm New Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="text-right">
        <app-button variant="outlined" size="small" color="secondary">
        Cancel
        </app-button>
        <app-button variant="outlined" size="small" color="success">
        Save
        </app-button>
        </div>
      </form>
      <form class="mt-5">
        <p class="font-medium mb-5">
          Business Information
        </p>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Photo/Logo</label>
            <input
              id="integration_shop_name"
              class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 form-control text-xl font-normal rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Banner Photo</label>
            <input
              id="integration_shop_name"
              class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 form-control text-xl font-normal rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Business Email</label>
            <input
              id="integration_shop_name"
              placeholder="Email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Name of Store</label>
            <input
              id="integration_shop_name"
              placeholder="Name of Store"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Business Phone</label>
            <input
              id="integration_shop_name"
              placeholder="080-1234-1234"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              required
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="tel"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Business Address</label>
            <input
              id="integration_shop_name"
              placeholder="Address"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="text-right">
        <app-button variant="outlined" size="small" color="secondary">
        Cancel
        </app-button>
        <app-button variant="outlined" size="small" color="success">
        Save
        </app-button>
        </div>
      </form>
      <form>
        <p class="font-medium mb-5">
          Bank Details
        </p>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Bank Name</label>
            <input
              id="integration_shop_name"
              placeholder="Bank Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Account Name</label>
            <input
              id="integration_shop_name"
              placeholder="Account Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Account Number</label>
            <input
              id="integration_shop_name"
              placeholder="Account Number"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="number"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-xs"
          >
            <label class="font-semibold text-gray-600 py-2">Old Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-xs hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="text-right">
        <app-button variant="outlined" size="small" color="secondary">
        Cancel
        </app-button>
        <app-button variant="outlined" size="small" color="success">
        Save
        </app-button>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue"

  export default {
  layout: 'merchant',
    components: {
      'app-button': AppButton
    }
  }
</script>
