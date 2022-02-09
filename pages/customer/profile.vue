<template>
  <div class="py-8 px-4">
    <div class="w-full md:flex gap-4">
      <div class="md:w-1/4">
        <ContentsCustomerProfileCard />
      </div>
      <div class="md:w-3/4">
        <h1 class="text-2xl font-normal text-black">
          Profile
        </h1>
        <div>
          <div class="flex justify-between items-center">
            <h3>Your Name</h3>
            <AppButton button-text="Edit" color="outlinegray" size="md" rounded />
          </div>
          <div class="mt-4">
            <h2 class="text-xl">
              Muideen Muhammed Jamiu
            </h2>
            <hr class="mt-2">
          </div>
        </div>
        <div class="mt-4 hidden md:flex  justify-between items-center">
          <div class="md:flex flex-col">
            <h3>Photo</h3>
            <div class="flex flex-col mt-2 text-gray-400">
              <span>Recommended size is a square image of not more than 150kb</span>
              <span>File type: JPG, PNG or GIF</span>
            </div>
          </div>
          <div class="shrink-0">
            <img
              src="@/assets/images/icons/profile-picture.jpg"
              alt=""
              class="w-20 h-20  rounded-full object-cover"
            >
          </div>

          <div class="flex gap-2">
            <AppButton button-text="Cancel" color="outlinegray" size="md" rounded />
            <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
          </div>
        </div>
        <div class="mt-4">
          <div class="flex justify-between items-center">
            <h3>Email</h3>
            <AppButton button-text="Edit" color="outlinegray" size="md" rounded />
          </div>
          <div class="mt-4">
            <h2 class="text-xl">
              lloyd.lane@example.com
            </h2>
            <hr class="mt-2">
          </div>
        </div>
        <div class="mt-4">
          <div class="flex justify-between items-center">
            <h3>Phone</h3>
            <AppButton button-text="Edit" color="outlinegray" size="md" rounded />
          </div>
          <div class="mt-4">
            <h2 class="text-xl">
              +234-816-421-0941
            </h2>
            <hr class="mt-2">
          </div>
        </div>
        <div class="mt-6">
          <div class="flex justify-between items-center">
            <h3>Shipping Information</h3>
            <AppButton button-text="Edit" color="outlinegray" size="md" rounded />
          </div>
          <div class="mt-2 md:flex justify-between gap-8">
            <div class="md:w-1/2">
              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl">
                    Primary Address
                  </h2>
                  <div>
                    <img src="@/assets/images/icons/edit-icon.svg" alt="">
                  </div>
                </div>
                <hr class="mt-2">
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="mt-6">
                <h2 class="text-xl">
                  Home Address
                </h2>
                <hr class="mt-2">
              </div>
              <div class="mt-4">
                <label
                  for="shop-name"
                  class="block mb-2 text-sm font-medium"
                >Home Address</label>
                <input
                  id="username-error"
                  type="text"
                  placeholder="Home Address"
                  class="border border-gray-200 text-sm ring-primary-blue focus:border-primary-blue block w-full p-2.5"
                >
                <p class="mt-2 text-sm text-gray-400">
                  A name that helps you identify the address.
                </p>
              </div>
              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Address</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >City / LGA</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
              </div>
              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >State</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Zip / postal code</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                  <div class="flex justify-end items-end mt-4 gap-4">
                    <AppButton button-text="Cancel" color="outlinebutton" size="md" rounded />
                    <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <div class="flex justify-between items-center">
            <h3>Payment Channels</h3>
          </div>
          <div class="mt-2 md:flex justify-between gap-8">
            <div class="md:w-1/2">
              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl">
                    Debit Card
                  </h2>
                  <div>
                    <AppButton button-text="Edit" color="outlinegray" size="md" rounded />
                  </div>
                </div>
                <hr class="mt-2">
              </div>
              <h3 class="mt-2">
                Main Card
              </h3>
              <div class="mt-4 flex justify-between">
                <h3>Auxillary card</h3>
                <div class="flex gap-4">
                  <img
                    src="@/assets/images/icons/edit-icon.svg"
                    alt=""
                    class="bg-gray-300 p-1 rounded"
                  >
                  <img src="@/assets/images/icons/delete-icon.svg" alt="">
                </div>
              </div>
              <div class="mt-4">
                <label
                  for="shop-name"
                  class="block mb-2 text-sm font-medium"
                >Name</label>
                <input
                  id="username-error"
                  type="text"
                  placeholder="Auxillary card"
                  class="border border-gray-200 text-sm ring-primary-blue focus:border-primary-blue block w-full p-2.5"
                >
                <p class="mt-2 text-sm text-gray-400">
                  A name that helps you identify the card.
                </p>
              </div>
              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Card number</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Expiry</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
              </div>
              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >cvv</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Pin</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                  <div class="flex justify-end items-end mt-4 gap-4">
                    <AppButton button-text="Cancel" color="outlinebutton" size="md" rounded />
                    <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl">
                    Bank Transfer
                  </h2>
                  <div>
                    <AppButton button-text="Edit" color="outlinegray" size="md" rounded />
                  </div>
                </div>
                <hr class="mt-2">
              </div>
              <div class="mt-4 flex justify-between">
                <h3>Main account</h3>
                <div class="flex gap-4">
                  <img
                    src="@/assets/images/icons/edit-icon.svg"
                    alt=""
                    class="bg-gray-300 p-1 rounded"
                  >
                  <img src="@/assets/images/icons/delete-icon.svg" alt="">
                </div>
              </div>
              <div class="mt-4">
                <label
                  for="shop-name"
                  class="block mb-2 text-sm font-medium"
                >Home Address</label>
                <input
                  id="username-error"
                  type="text"
                  placeholder="Home Address"
                  class="border border-gray-200 text-sm ring-primary-blue focus:border-primary-blue block w-full p-2.5"
                >
                <p class="mt-2 text-sm text-gray-400">
                  A name that helps you identify the address.
                </p>
              </div>

              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Bank Name</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                    >Account Number</label>
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    >
                  </div>
                  <div class="flex justify-end items-end mt-4 gap-4">
                    <AppButton button-text="Cancel" color="outlinebutton" size="md" rounded />
                    <AppButton button-text="Save" color="outlinebutton" size="md" rounded />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
