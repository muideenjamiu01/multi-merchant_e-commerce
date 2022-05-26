<template>
  <app-container maxWidth="sm">
    <grid-container class="my-6 sm:my-8">
      <grid-item xs="fill">
        <div>
          <div @click="goBack" class="flex gap-4 mt-8">
            <img src="@/assets/images/icons/back-arrow.svg" alt="" />
            <h1 class="md:text-3xl font-medium">Complete Signup</h1>
          </div>

          <form class="mt-6" @submit.prevent="completeSignUp">
            <ValidationObserver slim>
              <ValidationProvider
                v-slot="{ errors }"
                name="firstName"
                rules="required||alpha_spaces"
                tag="div"
                class="my-8"
              >
                <label for="storeName" class="block mb-2 text-sm font-medium"
                  >First Name</label
                >
                <input
                  id="fullName"
                  type="text"
                  class="border text-sm focus:outline-primary-blue block w-full p-2.5"
                  v-model.trim="adminRegDetails.firstName"
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
                name="lastName"
                rules="required||alpha_spaces"
                tag="div"
                class="my-8"
              >
                <label for="storeName" class="block mb-2 text-sm font-medium"
                  >Last Name</label
                >
                <input
                  id="LastName"
                  type="text"
                  class="border text-sm focus:outline-primary-blue block w-full p-2.5"
                  v-model.trim="adminRegDetails.lastName"
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
                  v-model.trim="adminRegDetails.email"
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
                  v-model.trim="adminRegDetails.phoneNo"
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
                  v-model.trim="adminRegDetails.password"
                />
                <small class="mt-2 text-sm text-gray-400">
                  Assign the new admin a password, the would be asked to reset
                  it once they claim this account.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

              <!-- <label for="phone" class="block mb-2 text-sm font-medium"
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
                </small> -->

              <div class="mx-auto xs:max-w-xs mt-8">
                <app-button
                  type="submit"
                  uppercase
                  variant="contained"
                  size="large"
                  :disabled="loading"
                  fullWidth
                >
                  {{ loading ? "Submitting" : "Complete SignUp" }}
                  <loading-spinners
                    v-if="loading"
                    size="small"
                    color="white"
                    class="mx-4"
                  ></loading-spinners>
                </app-button>
              </div>
            </ValidationObserver>
          </form>
        </div>
      </grid-item>
    </grid-container>
  </app-container>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      error: null,
      terms: false,

      adminRegDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        password: "",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async completeSignUp() {
      
		 try{
			 const response = await this.$axios.post('/api/users/v1/admins/complete', this.adminRegDetails)
			 this.$toast.success(response.data.msg)
		 } catch(e){
			  this.$toast.error(error.response.data.msg)

		 }
		 this.adminRegDetails = ""
	  },
    },
  };

</script>

<style></style>
