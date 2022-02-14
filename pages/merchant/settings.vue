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
        <div class="md:flex flex-row md:space-x-4 w-full">
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-normal leading-4 py-2">Account Name</label>
            <input
              id="integration_shop_name"
              placeholder="Account Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">E-Mail</label>
            <input
              id="integration_shop_name"
              placeholder="Email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px]">
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Phone Number</label>
            <input
              id="integration_shop_name"
              placeholder="Phone Number"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="tel"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Old Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px]">
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-[14px]"
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
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">New Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px]">
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-[14px]"
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
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Confirm New Password</label>
            <input
              id="integration_shop_name"
              placeholder="password"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="password"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="text-right">
         
          <AppButton
            button-text="Cancel"
            color="outlinegray"
            class="font-normal mr-[15px] my-[64px]"
            size="md"
            rounded
          />
          <AppButton
            button-text="Save"
            color="outlinebutton"
            class="font-normal"
            size="md"
            rounded
          />
        </div>
      </form>
      <form class="mt-5">
        <p class="font-medium mb-5">
          Business Information
        </p>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px]">
          <div class="mb-3 space-y-2 w-full text-[14px] flex justify-between">
            <div class="flex flex-col">
              <label class="font-semibold text-gray-600 py-2">Photo/Logo</label>
              <p class="text-xs font-normal not-italic text-gray-400 mt-[33px] border-t-4">Recommended size is a square image of not more than 150kb</p>
              <p class="text-xs font-normal not-italic text-gray-400 border-b-4">File type: JPG, PNG or GIF</p>
            </div>
            
            <AppButton
              button-text="Upload"
              color="outlinegray"
              size="md"
              rounded
              class="font-normal h-[40px]"
            />
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px] flex justify-between">
            <div class="flex flex-col">
              <label class="font-semibold text-gray-600 py-2">Banner Photo</label>
              <p class="text-xs font-normal not-italic text-gray-400 mt-[33px] border-t-4">Recommended size is a square image of not more than 150kb</p>
              <p class="text-xs font-normal not-italic text-gray-400 border-b-4">File type: JPG, PNG or GIF</p>
            </div>
            <AppButton
                button-text="Upload"
                color="outlinegray"
                size="md"
                rounded
                class="font-normal h-[40px]"

              />
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px] mt-[24px]">
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Business Email</label>
            <input
              id="integration_shop_name"
              placeholder="Email"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Name of Store</label>
            <input
              id="integration_shop_name"
              placeholder="Name of Store"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px] mt-[24px]">
          <div class="mb-3 space-y-2 w-full text-[14px]">
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
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Business Address</label>
            <input
              id="integration_shop_name"
              placeholder="Address"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="text-right">
          <AppButton
            button-text="Cancel"
            color="outlinegray"
            size="md"
            rounded
            class="mr-[15px] my-[64px]"
          />
          <AppButton
            button-text="Save"
            color="outlinebutton"
            size="md"
            rounded
          />
        </div>
      </form>
      <form>
        <p class="font-medium mb-5">
          Bank Details
        </p>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px]">
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Bank Name</label>
            <input
              id="integration_shop_name"
              placeholder="Bank Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Account Name</label>
            <input
              id="integration_shop_name"
              placeholder="Account Name"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="text"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="md:flex flex-row md:space-x-4 w-full text-[14px]">
          <div class="mb-3 space-y-2 w-full text-[14px]">
            <label class="font-semibold text-gray-600 py-2">Account Number</label>
            <input
              id="integration_shop_name"
              placeholder="Account Number"
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
              required="required"
              type="number"
              name="integration[shop_name]"
            >
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
          <div
            class="hidden md:block md:invisible mb-3 space-y-2 w-full text-[14px]"
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
            <p class="text-red text-[14px] hidden">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div class="text-right">
          <AppButton
            button-text="Cancel"
            color="outlinegray"
            size="md"
            class="mr-[15px] mt-[64px]"
            rounded
          />
          <AppButton
            button-text="Save"
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
  layout: 'merchant'
}
</script>
