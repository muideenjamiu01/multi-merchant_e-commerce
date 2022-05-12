<template>
  <app-container maxWidth="sm">
    <grid-container class="my-6 sm:my-8">
      <grid-item xs="fill">
        <div @click="goBack" class="flex items-center gap-4 mt-8">
          <img src="@/assets/images/icons/back-arrow.svg" alt="" />
          <div class="rounded-full h-10 w-10 bg-black"></div>
          <h1 class="md:text-3xl font-medium">Travis Reynolds</h1>
        </div>
        <form action="">
          <form class="mt-6" @submit.prevent="createMerchant">
            <ValidationObserver slim>
              <ValidationProvider
                v-slot="{ errors }"
                name="fullName"
                rules="required||alpha_spaces"
                tag="div"
                class="my-8"
              >
                <label for="storeName" class="block mb-2 text-sm font-medium"
                  >Full Name</label
                >
                <input
                  id="fullName"
                  type="text"
                  class="border text-sm focus:outline-primary-blue block w-full p-2.5"
                  v-model.trim="fullName"
                />
                <small class="mt-2 text-gray-400 block">
                  Your name or the name of the person in your team who will
                  manage this account.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="required||email"
                tag="div"
                class="my-8"
              >
                <label for="shop-name" class="block mb-2 text-sm font-medium"
                  >Email Address</label
                >
                <input
                  v-model.trim="email"
                  id="email"
                  type="email"
                  class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                />
                <small class="mt-2 text-gray-400 block">
                  The email of the new admin. An email would be sent to them to
                  activate this account.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="phone number"
                rules="required||digits:11"
                tag="div"
                class="my-8"
              >
                <label for="phone" class="block mb-2 text-sm font-medium"
                  >Phone Number</label
                >
                <input
                  id="phone"
                  type="text"
                  class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                  v-model.trim="phoneNo"
                />
                <small class="mt-2 text-gray-400 block">
                  When we need to contact you urgently, this is the number we
                  will call.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="password"
                rules="required||min:6"
                tag="div"
                class="my-8"
              >
                <label for="password" class="block mb-2 text-sm font-medium"
                  >Password</label
                >
                <input
                  id="password"
                  type="password"
                  class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                  v-model.trim="password"
                />
                <small class="mt-2 text-sm text-gray-400">
                  Assign the new admin a password, the would be asked to reset
                  it once they claim this account.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
              <section class="w-full">
                <form enctype="multipart/form-data">
                  <!-- @submit.prevent="saveAvatar" -->
                  <grid-container>
                    <h3 class="flex-grow text-xl">Avatar</h3>
                    <span class="flex justify-end gap-2 mb-2">
                      <!-- v-if="avatar.editing" -->
                      <app-button
                        type="button"
                        color="secondary"
                        size="small"
                        variant="outlined"
                      >
                        <!-- @click="CancelImgEdit" -->
                        Cancel
                      </app-button>
                      <app-button
                        type="submit"
                        color="success"
                        size="small"
                        variant="outlined"
                      >
                        <!-- v-if="!avatar.errors.length > 0" -->
                        Save
                      </app-button>
                    </span>
                  </grid-container>
                  <div class="xs:flex block">
                    <div class="flex-grow max-w-lg xs:mb-0 mb-2 mr-2">
                      <div class="text-sm text-secondary-800">
                        <p>
                          Recommended size is a square image of not more than
                          150kb
                        </p>
                        <p>File type: JPG, PNG or GIF</p>
                      </div>
                      <div class="mt-2 text-error-800">
                        <!-- v-if="avatar.errors.length > 0" -->
                        <!-- <p v-for="(err, i) in avatar.errors" :key="i">
                    <small>{{ err }}</small>
                  </p> -->
                      </div>
                    </div>

                    <input
                      accept="image/*"
                      id="upload"
                      type="file"
                      class="sr-only"
                    />
                    <!-- @change="handleImgChange" -->
                    <label for="upload" class="relative">
                      <!-- <user-avatar class="w-14 h-14 xs:w-20 xs:h-20" /> -->
                      <!-- :src="avatar.image" -->
                      <span
                        class="absolute top-0 left-0 bottom-0 right-0 z-10 rounded-full hover:bg-black/30 transition-colors"
                      />
                    </label>
                  </div>
                </form>
              </section>

              <label for="phone" class="block mb-2 text-sm font-medium mt-6"
                >Role</label
              >
              <select name="" id="" class="w-full">
                <option value="role1">Role1</option>
                <option value="role2">Role2</option>
                <option value="role3">Role3</option>
              </select>
              <small class="mt-2 text-gray-400 block">
                The role this admin would assume when they activated their
                account
              </small>

              <div>
                <div class="xs:flex justify-between gap-8 mt-6">
                  <div class="form-check">
                    <input
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="activated"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="activated"
                    >
                      Is activated
                    </label>
                    <div class="flex gap-4 justify-between items-center mt-2">
                      <span>Last seen:</span>
                      <span>23 / 04 / 2022</span>
                    </div>
                  </div>
                  <div class="form-check mt-4 md:mt-0">
                    <input
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="disabled"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="disabled"
                    >
                      Is disabled
                    </label>
                    <div class="flex gap-4 justify-between items-center mt-2">
                      <span>Date created:</span>
                      <span>03 / 01 / 2022</span>
                    </div>
                    <span class="flex justify-end gap-2 mt-8">
                      <app-button
                        type="button"
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
                    </span>
                  </div>
                </div>
              </div>
            </ValidationObserver>
          </form>
        </form>
      </grid-item>
    </grid-container>
  </app-container>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
// import ProfileField from "@/components/ProfileField.vue";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    // "profile-field": ProfileField,
  },
  data() {
    return {
      loading: false,
      error: null,
      terms: false,
      editing: false,
      //   avatar: {
      //     editing: false,
      //     // image: this.$auth.user.avatar || null,
      //     file: null,
      //     errors: [],
      //   },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
