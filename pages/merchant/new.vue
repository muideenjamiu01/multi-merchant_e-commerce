<template>
  <div class="container mx-auto py-8 xs:px-8">
    <div class="mt-4">
      <h1 class="text-2xl font-normal text-black">Merchant Center</h1>
      <p class="text-base font-normal text-black">
        Register and start selling today - create your own seller account.
      </p>
    </div>
    <div class="mt-8">
      <h1 class="text-xl">Create Seller Account</h1>
      <hr class="mt-2" />
    </div>
    <form class="mt-6" @submit.prevent="createMerchant">
      <div class="w-full">
        <div class="md:flex justify-between gap-8">
          <div class="md:w-1/2">
            <div>
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Name of store</label
              >
              <input
                id="username-error"
                type="text"
                class="border text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.storeName"
              />
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
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Email Address</label
              >
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.email"
              />
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
                <input ref="fileupload" type="file" hidden />
                <!-- <button
                  id="button"
                  name="button"
                  value="Upload"
                  @click.prevent="thisFileUpload()"
                  class="border-2 border-primary-blue rounded-lg font-bold text-primary-blue px-6 py-1 transition duration-300 ease-in-out hover:bg-primary-blue hover:text-white mr-6"
                >
                  Upload
                </button> -->
                <app-button
                  
                  name="button"
                  value="Upload"
                  @click.prevent="uploadAvatar"
                  variant="outlined"
                  color="secondary"
                  size="small"
				  type="submit"
                >
                  Upload
                </app-button>
              </div>
            </div>
            <hr class="mt-6" />
            <div class="flex flex-col mt-2 text-gray-400">
              <span
                >Recommended size is a square image of not more than 150kb</span
              >
              <span>File type: JPG, PNG or GIF</span>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="flex justify-between items-center mt-6">
              <div>Banner Photo</div>
              <div class="flex items-end justify-center">
                <input id="fileupload" type="file" hidden />
                <app-button
                  
                  name="button"
                  value="Upload"
                  @click.prevent="uploadBanner"
                  variant="outlined"
                  color="secondary"
                  size="small"
				  type="submit"
                >
                  Upload
                </app-button>
              </div>
            </div>
            <hr class="mt-6" />
            <div class="flex flex-col mt-2 text-gray-400">
              <span
                >Recommended size is a square image of not more than 150kb</span
              >
              <span>File type: JPG, PNG or GIF</span>
            </div>
          </div>
        </div>
        <div class="md:flex justify-between gap-8 mt-4">
          <div class="mt-4 md:w-1/2">
            <div>
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Full Name</label
              >
              <input
                id="full-name"
                type="text"
                class="border border-gray-200 text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.fullName"
              />
              <p class="mt-2 text-sm text-gray-400">
                Your name or the name of the person in your team who will manage
                your account. This is the contact we will primarily use to
                contact you.
              </p>
            </div>
          </div>
          <div class="mt-4 md:w-1/2">
            <div>
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Phone Number</label
              >
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.phoneNo"
              />
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
              <label for="shop-name" class="block mb-2 text-sm font-medium"
                >Address</label
              >
              <input
                id="username-error"
                type="text"
                class="border border-gray-200 text-sm focus:outline-primary-blue duration-200 block w-full p-2.5"
                v-model.trim="sellerAccountDetails.address"
              />
              <p class="mt-2 text-sm text-gray-400">
                Another number where we can reach you ?
              </p>
            </div>
          </div>
          <div class="mt-4 md:w-1/2">
            <div>
              <label for="password" class="block mb-2 text-sm font-medium"
                >Password</label
              >
              <input
                id="confirm-password"
                type="password"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.password"
              />
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
                >Confirm Password</label
              >
              <input
                id="confirm password"
                type="password"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
              />
            </div>
          </div>
          <div class="md:w-1/2" />
        </div>
        <div class="mt-10">
          <h1 class="text-xl">Bank Details</h1>
          <hr class="mt-2" />
          <div class="md:flex justify-between gap-8 mt-4">
            <div class="mt-4 md:w-1/2">
              <label for="bank-name" class="block mb-2 text-sm font-medium"
                >Bank Name</label
              >
              <input
                id="bank-name"
                type="text"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.bankName"
              />
            </div>
            <div class="mt-4 md:w-1/2">
              <label for="account-name" class="block mb-2 text-sm font-medium"
                >Account Name</label
              >
              <input
                id="account-name"
                type="text"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.accountName"
              />
            </div>
          </div>
          <div class="md:flex justify-between gap-8">
            <div class="mt-4 md:w-1/2">
              <label for="account-number" class="block mb-2 text-sm font-medium"
                >Account Number</label
              >
              <input
                id="account-number"
                type="text"
                class="border border-gray-200 t text-sm focus:outline-primary-blue block w-full p-2.5"
                v-model.trim="sellerAccountDetails.accountNo"
              />
            </div>
            <div class="md:w-1/2" />
          </div>
        </div>
      </div>
      <div class="flex mt-6">
        <div>
          <input
            type="radio"
            id="terms"
            value="yes"
            v-model="sellerAccountDetails.terms"
            class="mr-4"
          />
        </div>
        <div class="">
          <p>
            I acknowledge that I have read and hereby accept the terms and
            conditions in Youstore's <br />
            <span class="text-primary-blue"
              >third party partners', Terms of Use, Merchant Agreement
              <span class="text-black">and</span> Privacy Policy</span
            >
          </p>
        </div>
      </div>

      <div class="flex justify-center items-center mt-8">
        <app-button type="submit" uppercase variant="contained" size="large">
          Get Started
        </app-button>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from "@/components/buttons/Button.vue";
import axios from "axios";

export default {
  layout: "empty",
  components: {
    "app-button": AppButton,
  },
  data() {
    return {
	  file:'',
      sellerAccountDetails: {
        storeName: "",
        email: "",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
        banner:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
        fullName: "",
        phoneNo: "",
        address: "",
        password: "",
        bankName: "",
        accountName: "",
        accountNo: "",
        // terms: false,
      },
    };
  },
  methods: {
    uploadAvatar() {
      //   document.getElementById("fileupload").click();
      this.$refs.fileupload.click();
      const formData = new FormData();
	  formData.append('file', this.file);
      axios
        .post(
          "https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/upload/?user_key=4fbc6c112a19f295d08dfc27f36333b6",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    uploadBanner() {
      document.getElementById("fileupload").click();
      const formData = new FormData();
	  formData.append('file', this.file);
      axios
        .post(
          "https://api-2445583927843.production.gw.apicast.io:443/api/users/v1/merchants/upload-banner/?user_key=4fbc6c112a19f295d08dfc27f36333b6",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async createMerchant() {
      this.loading = true;
      try {
        const res = await this.$axios.post(
          "/merchants",
          this.sellerAccountDetails
        );
        Object.keys(this.sellerAccountDetails).forEach((key) => ({
          [this.sellerAccountDetails[key]]: "",
        }));
        const response = await this.$auth.setUserToken(res.data.token);
        this.$auth.setUser(response.data.user);
        this.$toast.success("Registration Succesful!!");
      } catch (err) {
        this.error = err.response.data.message;
      } finally {
        this.loading = false;
        this.$router.push("/merchant/products/newproduct");
      }
    },
    closeErrorMessage() {
      this.error = null;
    },
  },
};
</script>
<style lang="scss" scoped></style>
