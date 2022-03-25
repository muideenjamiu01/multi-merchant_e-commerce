<template>
  <div>
    <side-nav
      class="
        fixed
        top-0
        left-0
        w-60
        h-full
        overflow-x-hidden
        text-center
        p-4
        hidden
        md:block
        mt-14
        bg-primary-100
      "
    >
      <ContentsCustomerProfileCard />
    </side-nav>
    <main class="md:ml-60 py-8 px-4 w-auto">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-medium text-black">Profile</h1>
        <div v-if="editing" class="flex gap-2">
          <app-button
            @click="CancelButton"
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
        </div>
        <div v-else>
          <app-button
            @click="CancelButton"
            color="secondary"
            size="small"
            variant="outlined"
          >
            Edit
          </app-button>
        </div>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <div v-if="editing" class="md:flex md:gap-4 flex-grow">
            <label for="FirstName" class="text-xl w-full sm:w-1/2 mb-4">
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
            <label for="LastName" class="text-xl w-full sm:w-1/2 mb-4">
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
          </div>
          <div v-else class="flex-grow ">
            <h4 class="mb-4 text-xl">Your Name</h4>
            <p class="border-b border-b-secondary-200 my-1">
              {{ user.firstName + " " + user.lastName }}
            </p>
          </div>
        </div>

        <div class="mt-4 hidden md:flex justify-between items-center">
          <div class="md:flex flex-col">
            <h3>Photo</h3>
            <div class="flex flex-col mt-2 text-gray-400">
              <span
                >Recommended size is a square image of not more than 150kb</span
              >
              <span>File type: JPG, PNG or GIF</span>
            </div>
          </div>

          <div>
            <div
              @click="selectImage"
              class="w-32 h-32 rounded-full object-cover bg-gray-200"
            >
              <img
                :style="{ 'background-image': `url(${previewImage})` }"
                class="
                  w-32
                  h-32
                  rounded-full
                  object-cover
                  bg-gray-200
                  outline-none
                "
              />

              <input
                type="file"
                ref="fileInput"
                accept="image/*"
                @input="onImgChange"
                class="hidden"
                hidden
              />
            </div>
          </div>
        </div>

        <div class="mb-4">
          <div v-if="editing" class="md:flex md:gap-4 flex-grow">
            <label for="email" class="text-xl w-full mb-4">
              Email
              <input
                id="email"
                v-model="user.email"
                type="email"
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
          <div v-else class="flex-grow ">
            <h4 class="mb-4 text-xl">Email</h4>
            <p class="border-b border-b-secondary-200 my-1">
              {{ user.email }}
            </p>
          </div>
        </div>

        <div class="mb-4">
          <div v-if="editing" class="md:flex md:gap-4 flex-grow">
            <label for="phone" class="text-xl w-full mb-4">
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
          </div>
          <div v-else class="flex-grow ">
            <h4 class="mb-4 text-xl">Phone</h4>
            <p class="border-b border-b-secondary-200 my-1">
              {{ user.phone }}
            </p>
          </div>
        </div>

        <div class="mb-4">
          <div v-if="editing" class="md:flex md:gap-4 flex-grow">
            <label for="address" class="text-xl w-full mb-4">
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
          </div>
          <div v-else class="flex-grow ">
            <h4 class="mb-4 text-xl">Address</h4>
            <p class="border-b border-b-secondary-200 my-1">
              {{ user.address }}
            </p>
          </div>
        </div>

      </form>
    </main>
  </div>
</template>

<script>
import ProfileField from "@/components/ProfileField.vue";

export default {
  middleware: "auth-customer",
  components: {
    "profile-field": ProfileField,
  },
  data() {
    return {
      editing: false,
      previewImage: null,

      user: {
        firstName: this.$auth.user.firstName,
        lastName: this.$auth.user.lastName,
        email: this.$auth.user.email,
        phone: this.$auth.user.phoneNo,
        address: this.$auth.user.address,
      },
    };
  },
  created() {
    console.log(this.$auth.loggedIn);
    console.log(this.$auth.user);
  },
  methods: {
    edit() {
      //   document.getElementById("input").focus();
      this.$refs.input.focus();
      this.$refs.phone.focus();
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    onImgChange() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
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
      console.log("profile saved");
    },
  },
};
</script>

<style lang="scss" scoped></style>
