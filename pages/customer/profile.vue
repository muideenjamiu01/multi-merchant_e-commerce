<template>
  <!-- <div>
    <side-nav>
      <ContentsCustomerProfileCard />
    </side-nav> -->
  <app-container maxWidth="sm">
    <grid-container class="my-6 sm:my-8">
      <!-- <grid-item xs="fill"></grid-item> -->
      <grid-item xs="fill">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-medium text-black">Profile</h1>
          <app-button
            v-if="!editing"
            @click="handleEdit"
            color="secondary"
            size="small"
            variant="outlined"
          >
            Edit
          </app-button>
        </div>

        <ValidationObserver slim>
          <form @submit.prevent="saveProfile">
            <div class="my-12">
              <div v-if="editing" class="xs:flex xs:gap-4 flex-grow">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="firstName"
                  rules="required||alpha"
                  tag="div"
                  class="xs:text-lg w-full"
                >
                  <label for="firstName">
                    First Name
                    <input
                      id="FirstName"
                      v-model="user.firstName"
                      type="text"
                      class="
                        flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full
                      "
                    />
                  </label>
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="lastName"
                  rules="required||alpha"
                  tag="div"
                  class="xs:text-lg w-full mt-2 xs:mt-0"
                >
                  <label for="lastName">
                    Last Name
                    <input
                      id="LastName"
                      v-model="user.lastName"
                      type="text"
                      class="
                        flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full
                      "
                    />
                  </label>
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div v-else class="flex-grow">
                <h4 class="mb-4 text-xl">Your Name</h4>
                <p class="border-b border-b-secondary-200 my-1">
                  {{ user.firstName + " " + user.lastName }}
                </p>
              </div>
            </div>

            <div class="my-12">
              <div v-if="editing" class="xs:flex xs:gap-4 flex-grow">
                <label for="email" class="text-xl w-full">
                  Email
                  <input
                    id="email"
                    v-model="$auth.user.email"
                    type="email"
                    disabled
                    class="
                      flex
                      items-center
                      outline-0
                      border border-secondary-200
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:border-primary-200
                      focus:ring-primary-200
                      focus:ring-1
                      sm:text-sm
                      p-2
                      my-1
                      w-full
                    "
                  />
                </label>
              </div>
              <div v-else class="flex-grow">
                <h4 class="mb-4 text-xl">Email</h4>
                <p class="border-b border-b-secondary-200 my-1">
                  {{ $auth.user.email }}
                </p>
              </div>
            </div>

            <div class="my-12">
              <div v-if="editing" class="xs:flex xs:gap-4 flex-grow">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="phone"
                  rules="required||digits:11"
                  tag="div"
                  class="xs:text-lg w-full"
                >
                  <label for="phone" class="text-xl w-full">
                    Phone
                    <input
                      id="phone"
                      v-model="user.phone"
                      type="text"
                      class="
                        flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full
                      "
                    />
                  </label>
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div v-else class="flex-grow">
                <h4 class="mb-4 text-xl">Phone</h4>
                <p class="border-b border-b-secondary-200 my-1">
                  {{ user.phone }}
                </p>
              </div>
            </div>

            <div class="my-12">
              <div v-if="editing" class="xs:flex xs:gap-4 flex-grow">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="address"
                  rules="required"
                  tag="div"
                  class="xs:text-lg w-full"
                >
                  <label for="address" class="text-xl w-full">
                    Address
                    <input
                      id="address"
                      v-model="user.address"
                      type="text"
                      class="
                        flex
                        items-center
                        outline-0
                        border border-secondary-200
                        rounded-md
                        shadow-sm
                        focus:outline-none
                        focus:border-primary-200
                        focus:ring-primary-200
                        focus:ring-1
                        sm:text-sm
                        p-2
                        my-1
                        w-full
                      "
                    />
                  </label>
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div v-else class="flex-grow">
                <h4 class="mb-4 text-xl">Address</h4>
                <p class="border-b border-b-secondary-200 my-1">
                  {{ user.address }}
                </p>
              </div>
            </div>

            <grid-container v-if="editing" justifyContent="end" gap="2" class="my-4">
              <app-button
                @click="CancelEdit"
                type="button"
                color="secondary"
                size="small"
                variant="outlined"
              >
                Cancel
              </app-button>
              <app-button
                @click="saveProfile"
                type="button"
                color="success"
                size="small"
                variant="outlined"
              >
                Save
              </app-button>
            </grid-container>
          </form>
        </ValidationObserver>

          <section class="w-full">
              <form enctype="multipart/form-data" @submit.prevent="saveAvatar">
            <grid-container>
              <h3 class="flex-grow text-xl">Avatar</h3>
              <span v-if="avatar.editing" class="flex justify-end gap-2 mb-2">
                <app-button
                  @click="CancelImgEdit"
                  type="button"
                  color="secondary"
                  size="small"
                  variant="outlined"
                >
                  Cancel
                </app-button>
                <app-button
                v-if="!avatar.errors.length > 0"
                  type="submit"
                  color="success"
                  size="small"
                  variant="outlined"
                >
                  Save
                </app-button>
              </span>
            </grid-container>
            <div class="xs:flex block">
              <div class="flex-grow max-w-lg xs:mb-0 mb-2 mr-2">
                <div class="text-sm text-secondary-800">
                  <p>Recommended size is a square image of not more than 150kb</p>
                  <p>File type: JPG, PNG or GIF</p>
                </div>
                <div v-if="avatar.errors.length > 0" class="mt-2 text-error-800">
                  <p v-for="(err, i) in avatar.errors" :key="i">
                    <small>{{ err }}</small>
                  </p>
                </div>
              </div>

                <input
                  accept="image/*"
                  id="upload"
                  type="file"
                  class="sr-only"
                  @change="handleImgChange"
                />
                <label for="upload" class="relative">
                  <user-avatar
                    :alt="user.firstName"
                    :src="avatar.image"
                    class="w-14 h-14 xs:w-20 xs:h-20"
                  />
                  <span
                    class="
                      absolute
                      top-0
                      left-0
                      bottom-0
                      right-0
                      z-10
                      rounded-full
                      hover:bg-black/30
                      transition-colors
                    "
                  />
                </label>
            </div>
              </form>
          </section>
      </grid-item>
      <!-- <grid-item xs="fill"></grid-item> -->
    </grid-container>
  </app-container>
  <!-- </div> -->
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
import ProfileField from "@/components/ProfileField.vue";

export default {
  middleware: "auth-customer",
  components: {
    ValidationObserver,
    ValidationProvider,
    "profile-field": ProfileField,
  },
  data() {
    return {
      loading: false,
      error: null,
      editing: false,
      avatar: {
        editing: false,
        image: this.$auth.user.avatar || null,
        file: null,
        errors: [],
      },
      user: {
        firstName: this.$auth.user.firstName,
        lastName: this.$auth.user.lastName,
        phone: this.$auth.user.phoneNo,
        address: this.$auth.user.address,
      },
    };
  },
  methods: {
    handleEdit() {
      this.editing = true;
    },
    CancelEdit() {
      (this.user.firstName = this.$auth.user.firstName),
        (this.user.lastName = this.$auth.user.lastName),
        (this.user.phone = this.$auth.user.phoneNo),
        (this.user.address = this.$auth.user.address);
      this.editing = false;
    },
    async saveProfile() {
      try {
        const response = await this.$axios.put(
          "/api/users/v1/customers/",
          this.user,
        );

        this.$auth.setUser(response.data.data);
        this.editing = false;
        this.$toast.success("Your profile was succesfully updated!");
      } catch (error) {
        this.error = error.response.data.msg;
        this.editing = true;
        this.$toast.error("An error occured while updating your profile!");
      } finally {
        this.loading = false;
      }
    },
    CancelImgEdit() {
      (this.avatar.image = this.$auth.user.avatar || null),
        (this.avatar.errors = []),
        (this.avatar.editing = false);
    },
    validateImage(image) {
      const errs = [];
      const validTypes = ["image/png", "image/jpeg", "image/gif"];

      if (validTypes.every((type) => image.type !== type)) {
        errs.push(`'${image.type}' is not a supported format`);
      }

      if (image.size > 150000) {
        errs.push(`'${image.name}' is too large, please pick a smaller image`);
      }
      return errs;
    },
    handleImgChange(e) {
      this.avatar.errors = [];
      this.avatar.editing = true;

      const file = e.target.files?.item(0);

      if (file) {
        const errs = this.validateImage(file);

        if (errs.length > 0) {
          this.avatar.errors = errs;
          return;
        }

        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.avatar.image = reader.result;
          this.avatar.file = file;
        });
        reader.readAsDataURL(file);
      }
    },
    async saveAvatar(e) {
      try {
        this.avatar.editing = true
        const response = await this.$axios.post('/api/users/v1/customers/upload/', this.avatar.file, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })

        this.$auth.setUser(response.data.data)
        this.avatar.editing = false;
        this.$toast.success("Your profile was succesfully updated!");
      } catch (error) {
        this.error = error.response.data.msg
        this.avatar.editing = false
        this.$toast.error("An error occured while updating your profile!");
      }
    },
  },
};
</script>
