<template>
  <div class="py-8 px-4">
    <div class="w-full md:flex gap-4">
      <div class="md:w-1/4">
        <ContentsCustomerProfileCard />
      </div>
      <div class="md:w-3/4">
        <h1 class="text-2xl font-normal text-black">Profile</h1>
        <form action="" @submit.prevent="saveProfile">
          <div>
            <div class="flex justify-between items-center">
              <div class="mt-4 flex flex-col border-b w-full">
                <label>Your Name</label>
                <div v-if="editing">
                  <input
                    type="text"
                    class="mt-4 outline-0"
                    v-model.trim="profile.UserName"
                  />
                </div>
              </div>

              <app-button
                v-if="!editing"
                @click="EditButton()"
                color="secondary"
                size="small"
                variant="outlined"
              >
                Edit
              </app-button>
              <!-- <AppButton buttonText=""  color="outlinegray" size="sm" rounded />  -->
            </div>
          </div>
          <div class="mt-4 hidden md:flex justify-between items-center">
            <div class="md:flex flex-col">
              <h3>Photo</h3>
              <div class="flex flex-col mt-2 text-gray-400">
                <span
                  >Recommended size is a square image of not more than
                  150kb</span
                >
                <span>File type: JPG, PNG or GIF</span>
              </div>
            </div>
            <div class="shrink-0">
              <img
                src="@/assets/images/icons/profile-picture.jpg"
                alt=""
                class="w-20 h-20 rounded-full object-cover"
              />
			  
            </div>

            <div class="flex gap-2">
              <app-button
                @click="CancelButton"
                color="secondary"
                size="small"
                variant="outlined"
              >
                Cancel
              </app-button>
              <app-button
                type="submit"
                color="success"
                size="small"
                variant="outlined"
              >
                Save
              </app-button>
              <!-- <AppButton button-text="" color="outlinegray" size="md" rounded />
            <AppButton button-text="" color="outlinebutton" size="md" rounded /> -->
            </div>
          </div>
          <div class="mt-4">
            <div class="flex justify-between items-center">
              <div class="mt-4 flex flex-col border-b w-full">
                <label>Email</label>
                <input
                  type="text"
                  class="mt-4 outline-0"
                  v-model.trim="profile.Email"
                />
              </div>

              <app-button color="secondary" size="small" variant="outlined">
                Edit
              </app-button>
              <!-- <AppButton buttonText=""  color="outlinegray" size="sm" rounded />  -->
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="mt-4 flex flex-col border-b w-full">
              <label>Phone</label>
              <input
                type="text"
                class="mt-4 outline-0"
                v-model.trim="profile.Phone"
              />
            </div>

            <app-button color="secondary" size="small" variant="outlined">
              Edit
            </app-button>
            <!-- <AppButton buttonText=""  color="outlinegray" size="sm" rounded />  -->
          </div>
          <div class="mt-4">
            <div class="flex justify-between items-center">
              <div class="mt-4 flex flex-col border-b w-full">
                <label>Address</label>
                <input
                  type="text"
                  class="mt-4 outline-0"
                  v-model.trim="profile.Address"
                />
              </div>

              <app-button color="secondary" size="small" variant="outlined">
                Edit
              </app-button>
              <!-- <AppButton buttonText=""  color="outlinegray" size="sm" rounded />  -->
            </div>
          </div>
        </form>

        <!-- <div class="mt-6">
         
          <div class="mt-2 md:flex justify-between gap-8">
            <div class="md:w-1/2">
              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl">Primary Address</h2>
                  <div>
                    <img src="@/assets/images/icons/edit-icon.svg" alt="" />
                  </div>
                </div>
                <hr class="mt-2" />
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="mt-6">
                <h2 class="text-xl">Home Address</h2>
                <hr class="mt-2" />
              </div>
              <div class="mt-4">
                <label for="shop-name" class="block mb-2 text-sm font-medium"
                  >Home Address</label
                >
                <input
                  id="username-error"
                  type="text"
                  placeholder="Home Address"
                  class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                />
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
                      >Address</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    />
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >City / LGA</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    />
                  </div>
                </div>
              </div>
              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >State</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 t text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    />
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >Zip / postal code</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                    />
                  </div>
                  <div class="flex justify-end items-end mt-4 gap-4">
                    <app-button
                      color="secondary"
                      size="small"
                      variant="outlined"
                    >
                      Cancel
                    </app-button>
                    <app-button color="success" size="small" variant="outlined">
                      Save
                    </app-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        
        <div class="mt-8">
          <div class="flex justify-between items-center">
            <h3>Payment Channels</h3>
          </div>
          <div class="mt-2 md:flex justify-between gap-8">
            <div class="md:w-1/2">
              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl">Debit Card</h2>
                  <div>
                    <app-button
                      color="secondary"
                      variant="outlined"
                      size="small"
                      >Edit</app-button
                    >
                  </div>
                </div>
                <hr class="mt-2" />
              </div>
              <h3 class="mt-2">Main Card</h3>
              <div class="mt-4 flex justify-between">
                <h3>Auxillary card</h3>
                <div class="flex gap-4">
                  <img
                    src="@/assets/images/icons/edit-icon.svg"
                    alt=""
                    class="bg-gray-300 p-1 rounded"
                  />
                  <img src="@/assets/images/icons/delete-icon.svg" alt="" />
                </div>
              </div>
              <div class="mt-4">
                <label for="shop-name" class="block mb-2 text-sm font-medium"
                  >Name</label
                >
                <input
                  id="username-error"
                  type="text"
                  placeholder="Auxillary card"
                  class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                />
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
                      >Card number</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200  text-sm focus:outline-primary-blue block w-full p-2.5"
                    />
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >Expiry</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                    />
                  </div>
                </div>
              </div>
              <div class="md:flex justify-between gap-4">
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >cvv</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200  text-sm focus:outline-primary-blue block w-full p-2.5"
                    />
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >Pin</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                    />
                  </div>
                  <div class="flex justify-end items-end mt-4 gap-4">
                    <app-button
                      color="secondary"
                      size="small"
                      variant="outlined"
                    >
                      Cancel
                    </app-button>
                    <app-button color="success" size="small" variant="outlined">
                      Save
                    </app-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="mt-6">
                <div class="flex justify-between items-center">
                  <h2 class="text-xl">Bank Transfer</h2>
                  <div>
                    <app-button
                      color="secondary"
                      variant="outlined"
                      size="small"
                      >Edit</app-button
                    >
                  </div>
                </div>
                <hr class="mt-2" />
              </div>
              <div class="mt-4 flex justify-between">
                <h3>Main account</h3>
                <div class="flex gap-4">
                  <img
                    src="@/assets/images/icons/edit-icon.svg"
                    alt=""
                    class="bg-gray-300 p-1 rounded"
                  />
                  <img src="@/assets/images/icons/delete-icon.svg" alt="" />
                </div>
              </div>
              <div class="mt-4">
                <label for="shop-name" class="block mb-2 text-sm font-medium"
                  >Home Address</label
                >
                <input
                  id="username-error"
                  type="text"
                  placeholder="Home Address"
                  class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                />
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
                      >Bank Name</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                    />
                  </div>
                </div>
                <div class="mt-4 md:w-1/2">
                  <div>
                    <label
                      for="shop-name"
                      class="block mb-2 text-sm font-medium"
                      >Account Number</label
                    >
                    <input
                      id="username-error"
                      type="text"
                      class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                    />
                  </div>
                  <div class="flex justify-end items-end mt-4 gap-4">
                    <app-button
                      color="secondary"
                      size="small"
                      variant="outlined"
                    >
                      Cancel
                    </app-button>
                    <app-button color="success" size="small" variant="outlined">
                      Save
                    </app-button>
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
import AppButton from "@/components/buttons/Button.vue";

export default {
  layout: "merchant",
  components: {
    "app-button": AppButton,
  },
  data() {
    return {
      editing: false,
      profile: {
        UserName: "jamie",
        Email: "",
        Phone: "",
        Address: "",
      },
      user: [],
    };
  },
  methods: {
    EditButton() {
      this.profile.UserName;
    },
    CancelButton() {
      this.profile.UserName = "";
      this.profile.Email = "";
      this.profile.Phone = "";
      this.profile.Address = "";
    },
    saveProfile() {
      this.EditProfile.UserName = this.profile[index].UserName;
      this.CancelButton();
      console.log("profile saved");
    },
  },
};
</script>

<style lang="scss" scoped></style>
