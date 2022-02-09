<template>
  <div class="px-4 py-8 flex">
    <aside>
      <ContentsMerchantProfileCard />
    </aside>
    <main class="w-full">
      <form>
        <p class="font-medium mb-5">Personal Information</p>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Account Name</label>
            <input
              placeholder="Account Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">E-Mail</label>
            <input
              placeholder="Email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Phone Number</label>
            <input
              placeholder="Phone Number"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="tel"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Old Password</label>
            <input
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-xs"
          >
            <label class="font-semibold text-gray-600 py-2">Hidden field</label>
            <input
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">New Password</label>
            <input
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-xs"
          >
            <label class="font-semibold text-gray-600 py-2">Hidden field</label>
            <input
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Confirm New Password</label
            >
            <input
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="text-right">
          <!-- <ButtonsCancelButton/>
                    <ButtonsSaveButton/> -->
          <AppButton
            buttonText="Cancel"
            color="outlinegray"
            size="md"
            rounded
          />
          <AppButton
            buttonText="Save"
            color="outlinebutton"
            size="md"
            rounded
          />
        </div>
      </form>
      <form class="mt-5">
        <p class="font-medium mb-5">Business Information</p>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Photo/Logo</label>
            <input
              class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 form-control text-xl font-normal rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Banner Photo</label>
            <input
              class="w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 form-control text-xl font-normal rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Business Email</label
            >
            <input
              placeholder="Email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Name of Store</label
            >
            <input
              placeholder="Name of Store"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Business Phone</label
            >
            <input
              placeholder="080-1234-1234"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              required
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              type="tel"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Business Address</label
            >
            <input
              placeholder="Address"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>

        <div class="text-right">
          <!-- <ButtonsCancelButton />
          <ButtonsSaveButton /> -->
		   <AppButton
            buttonText="Cancel"
            color="outlinegray"
            size="md"
            rounded
          />
          <AppButton
            buttonText="Save"
            color="outlinebutton"
            size="md"
            rounded
          />
        </div>
      </form>
      <form>
        <p class="font-medium mb-5">Bank Details</p>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Bank Name</label>
            <input
              placeholder="Bank Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2">Account Name</label>
            <input
              placeholder="Account Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-xs">
          <div class="mb-3 space-y-2 w-full text-xs">
            <label class="font-semibold text-gray-600 py-2"
              >Account Number</label
            >
            <input
              placeholder="Account Number"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="number"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-xs"
          >
            <label class="font-semibold text-gray-600 py-2">Old Password</label>
            <input
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
              id="integration_shop_name"
            />
            <p class="text-red text-xs hidden">Please fill out this field.</p>
          </div>
        </div>
        <div class="text-right">
          <!-- <ButtonsCancelButton />
          <ButtonsSaveButton /> -->
		  <AppButton
            buttonText="Cancel"
            color="outlinegray"
            size="md"
            rounded
          />
          <AppButton
            buttonText="Save"
            color="outlinebutton"
            size="md"
            rounded
          />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  layout: "merchant",
};
</script>
