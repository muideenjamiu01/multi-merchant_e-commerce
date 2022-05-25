<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-xl font-medium text-black">Personal Information</h1>
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

    <form class="mt-6" @submit.prevent="updateMerchant">
      <ValidationObserver slim>
        <grid-container>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2">
          <ValidationProvider
            v-slot="{ errors }"
            name="storeName"
            rules="required||alpha"
            tag="div"
            class="my-8"
          >
            <label for="storeName" class="block mb-2 text-sm font-medium"
              >Name of store</label
            >
            <input
              id="storeName"
              type="text"
              :disabled="!editing"
              class="
                border
                text-sm
                focus:outline-primary-100
                block
                w-full
                p-2.5
              "
              v-model.trim="merchant.storeName"
            />
            <small class="mt-2 text-gray-400 block">
              Choose a unique name for your online shop: this is the name
              that will appear on our marketplace! It is forbidden to use a
              registered trademark in your shop name without the brand
              authorization.
            </small>
            <span class="text-xs text-error-800 block">{{
              errors[0]
            }}</span>
          </ValidationProvider>
</grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2">
          <ValidationProvider
            v-slot="{ errors }"
            name="name"
            rules="required||alpha_spaces"
            tag="div"
            class="my-8"
          >
            <label for="name" class="block mb-2 text-sm font-medium"
              >Your Name</label
            >
            <input
              id="name"
              :disabled="!editing"
              type="text"
              class="
                border border-secondary-100
                text-sm
                focus:outline-primary-100
                duration-200
                block
                w-full
                p-2.5
              "
              v-model.trim="merchant.accountName"
            />
            <span class="text-xs text-error-800 block">{{
              errors[0]
            }}</span>
          </ValidationProvider>
</grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2">
          <div class="my-8">
            <label for="shop-name" class="block mb-2 text-sm font-medium"
              >Email Address</label
            >
            <input
              v-model.trim="merchant.email"
              id="email"
              type="email"
              disabled
              class="
                border border-secondary-100
                text-sm
                focus:outline-primary-100
                block
                w-full
                p-2.5
              "
            />
          </div>
</grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2">
          <ValidationProvider
            v-slot="{ errors }"
            name="accountNo"
            rules="required||alpha"
            tag="div"
            class="my-8"
          >
            <label for="accountNo" class="block mb-2 text-sm font-medium"
              >Account Number</label
            >
            <input
              id="accountNo"
              :disabled="!editing"
              type="text"
              class="
                border
                text-sm
                focus:outline-primary-100
                block
                w-full
                p-2.5
              "
              v-model.trim="merchant.accountNo"
            />
            <span class="text-xs text-error-800 block">{{
              errors[0]
            }}</span>
          </ValidationProvider>
</grid-item>
          <grid-item xs="12" sm="6" class="px-0 my-8 sm:px-2">
            <label for="bank-select" class="block mb-2 text-sm font-medium"
              >Select Bank</label
            >
            <select name="banks" id="bank-select" :disabled="!editing" @focus="fetchBanks" v-model.trim="merchant.bankName" class="
                border border-secondary-100
                text-sm
                focus:outline-primary-100
                block
                w-full
                p-2.5">
              <option value="">--Select a bank--</option>
              <option v-for="bank in banks" :value="bank.name">{{bank.name}}</option>
            </select>
</grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2">
          <ValidationProvider
            v-slot="{ errors }"
            name="phone"
            rules="required||digits:11"
            tag="div"
            class="my-8"
          >
            <label for="phone" class="block mb-2 text-sm font-medium"
              >Phone Number</label
            >
            <input
              id="phone"
              :disabled="!editing"
              type="text"
              class="
                border border-secondary-100
                text-sm
                focus:outline-primary-100
                block
                w-full
                p-2.5
              "
              v-model.trim="merchant.phone"
            />
            <small class="mt-2 text-gray-400 block">
              When we need to contact you urgently, this is the number we
              will call.
            </small>
            <span class="text-xs text-error-800 block">{{
              errors[0]
            }}</span>
          </ValidationProvider>
</grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2">
          <ValidationProvider
            v-slot="{ errors }"
            name="address"
            rules="required"
            tag="div"
            class="my-8"
          >
            <label for="address" class="block mb-2 text-sm font-medium"
              >Address</label
            >
            <input
              id="address"
              :disabled="!editing"
              type="text"
              class="
                border border-secondary-100
                text-sm
                focus:outline-primary-100
                duration-200
                block
                w-full
                p-2.5
              "
              v-model.trim="merchant.address"
            />
            <small class="mt-2 text-gray-400 block">
              The location of your business.
            </small>
            <span class="text-xs text-error-800 block">{{
              errors[0]
            }}</span>
          </ValidationProvider>
</grid-item>
        </grid-container>
        <grid-container
          v-if="editing"
          justifyContent="end"
          gap="2"
          class="my-4"
        >
          <app-button
            @click="cancelEdit"
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
            :disabled="loading"
            uppercase
          >
            {{ loading ? "Submitting" : "Save" }}
            <loading-spinners
              v-if="loading"
              size="small"
              color="white"
              class="mx-4"
            ></loading-spinners>
          </app-button>
        </grid-container>
      </ValidationObserver>
    </form>

    <section class="w-full">
      <form enctype="multipart/form-data" @submit.prevent="saveAvatar">
        <grid-container>
          <h3 class="flex-grow text-xl">Avatar</h3>
          <span v-if="merchant.avatar.editing" class="flex justify-end gap-2 mb-2">
            <app-button
              @click="CancelAvatarEdit"
              type="button"
              color="secondary"
              size="small"
              variant="outlined"
            >
              Cancel
            </app-button>
            <app-button
              v-if="!merchant.avatar.errors.length > 0"
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
              <p>
                Recommended size is a square image of not more than 300kb
              </p>
              <p>File type: JPG, PNG or GIF</p>
            </div>
            <div
              v-if="merchant.avatar.errors.length > 0"
              class="mt-2 text-error-800"
            >
              <p v-for="(err, i) in merchant.avatar.errors" :key="i">
                <small>{{ err }}</small>
              </p>
            </div>
          </div>

          <input
            accept="image/*"
            name="avatar"
            id="uploadAvatar"
            type="file"
            class="sr-only"
            @change="handleAvatarChange"
          />
          <label for="uploadAvatar" class="relative">
            <user-avatar
              :alt="merchant.storeName"
              :src="merchant.avatar.image"
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

    <section class="w-full">
      <form enctype="multipart/form-data" @submit.prevent="saveBanner">
        <grid-container>
          <h3 class="flex-grow text-xl">Banner</h3>
          <span v-if="merchant.storeBanner.editing" class="flex justify-end gap-2 mb-2">
            <app-button
              @click="CancelBannerEdit"
              type="button"
              color="secondary"
              size="small"
              variant="outlined"
            >
              Cancel
            </app-button>
            <app-button
              v-if="!merchant.storeBanner.errors.length > 0"
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
              <p>
                Recommended size is a square image of not more than 300kb
              </p>
              <p>File type: JPG, PNG or GIF</p>
            </div>
            <div
              v-if="merchant.storeBanner.errors.length > 0"
              class="mt-2 text-error-800"
            >
              <p v-for="(err, i) in merchant.storeBanner.errors" :key="i">
                <small>{{ err }}</small>
              </p>
            </div>
          </div>

          <input
            accept="image/*"
            id="uploadBanner"
            type="file"
            name="banner"
            class="sr-only"
            @change="handleBannerChange"
          />
          <label for="uploadBanner" class="relative">
            <div class="border-secondary-200 w-14 h-14 xs:w-32 xs:h-18">
              <img :src="merchant.storeBanner.image" :alt="merchant.storeName" class="w-full h-full">
            </div>
            <span
              class="
                absolute
                top-0
                left-0
                bottom-0
                right-0
                z-10
                rounded-sm
                hover:bg-black/30
                transition-colors
              "
            />
          </label>
        </div>
      </form>
    </section>

    <ValidationObserver tag="section" class="my-12">
      <div class="flex items-center justify-between">
        <h4 class="text-xl font-medium text-black">Password</h4>
        <app-button
          v-if="!merchant.password.editing"
          @click="setEditing"
          color="secondary"
          size="small"
          variant="outlined"
          type="button"
        >
          Edit
        </app-button>
      </div>
      <form v-if="merchant.password.editing" @submit.prevent="savePassword" class="mt-6">
        <grid-container>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2 my-4">
            <div class="w-full">
              <label for="password">
                Current Password
                <input
                  id="password"
                  v-model="merchant.password.current"
                  type="password"
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
          </grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2 my-4">
            <ValidationProvider
              v-slot="{ errors }"
              name="new_password"
              rules="required||min:6"
              tag="div"
              class="w-full mt-2 xs:mt-0"
            >
              <label for="new_password">
                New Password
                <input
                  id="new_password"
                  v-model="merchant.password.new"
                  type="password"
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
          </grid-item>
          <grid-item xs="12" sm="6" class="px-0 sm:px-2 my-4">
            <div class="w-full mt-2 xs:mt-0">
              <label for="confirm_password">
                Confirm Password
                <input
                  id="confirm_password"
                  v-model="merchant.password.confirm"
                  type="password"
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
              <span class="text-xs text-error-800">{{
                merchant.password.matchError
              }}</span>
            </div></grid-item
          >
        </grid-container>
        <grid-container
          v-if="merchant.password.editing"
          justifyContent="end"
          gap="2"
          class="my-4"
        >
          <app-button
            @click="cancelPasswordEdit"
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
        </grid-container>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";

  export default {
  layout: 'merchant',
  middleware: 'auth-merchant',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      loading: false,
      error: null,
      editing: false,
      merchant: {
        storeName: this.$auth.user.storeName || "",
        accountName: this.$auth.user.accountName ||"",
        accountNo: this.$auth.user.accountNo ||"",
        bankName: this.$auth.user.bankName ||"",
        email: this.$auth.user.email ||"",
        phone: this.$auth.user.phoneNo ||"",
        address: this.$auth.user.address ||"",
        avatar: {
          editing: false,
          image: this.$auth.user.avatar || null,
          file: null,
          errors: [],
        },
        storeBanner: {
          editing: false,
          image: this.$auth.user.storeBanner || "https://dummyimage.com/32x18/cc5ca5/fff.png&text=banner",
          file: null,
          errors: [],
        },
        password: {
          editing: false,
          current: "",
          new: "",
          confirm: "",
          error: null,
          matchError: null
        },
      },
      banks: []
    };
  },
  methods: {
    handleEdit() {
      this.editing = true;
    },
    cancelEdit() {
      (this.merchant.storeName = this.$auth.user.storeName || ''),
      (this.merchant.accountName = this.$auth.user.accountName || ''),
      (this.merchant.bankName = this.$auth.user.bankName || ''),
      (this.merchant.accountNo = this.$auth.user.accountNo || ''),
      (this.merchant.phone = this.$auth.user.phoneNo || ''),
      (this.merchant.address = this.$auth.user.address || '');
      this.editing = false;
    },
    async updateMerchant() {
      const {storeName, accountName, accountNo, bankName, phone, address} = this.merchant
      try {
        const response = await this.$axios.put(
          "/api/users/v1/merchants/",
          {storeName, accountName, accountNo, bankName, phone, address}
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
    CancelBannerEdit() {
        (this.merchant.storeBanner.image = this.$auth.user.storeBanner || null),
        (this.merchant.storeBanner.errors = []),
        (this.merchant.storeBanner.editing = false);
      },
    CancelAvatarEdit() {
        (this.merchant.avatar.image = this.$auth.user.avatar || null),
        (this.merchant.avatar.errors = []),
        (this.merchant.avatar.editing = false);
    },
    validateImage(image) {
      const errs = [];
      const validTypes = ["image/png", "image/jpeg", "image/gif"];

      if (validTypes.every((type) => image.type !== type)) {
        errs.push(`'${image.type}' is not a supported format`);
      }

      if (image.size > 300000) {
        errs.push(`'${image.name}' is too large, please pick a smaller image`);
      }
      return errs;
    },
    handleAvatarChange(e) {
      this.merchant.avatar.errors = [];
      this.merchant.avatar.editing = true;

      const file = e.target.files.item(0);

      if (file) {
        const errs = this.validateImage(file);

        if (errs.length > 0) {
            this.merchant.avatar.errors = errs;
          return;
        }

        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.merchant.avatar.image = reader.result;
          this.merchant.avatar.file = file;
        });
        reader.readAsDataURL(file);
      }
    },
    handleBannerChange(e) {
        this.merchant.storeBanner.errors = [];
        this.merchant.storeBanner.editing = true; 

      const file = e.target.files.item(0);

      if (file) {
        const errs = this.validateImage(file);

        if (errs.length > 0) {
            this.merchant.storeBanner.errors = errs
          return;
        }

        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.merchant.storeBanner.image = reader.result;
          this.merchant.storeBanner.file = file;
        });
        reader.readAsDataURL(file);
      }
    },
    async saveAvatar() {
      const formdata = new FormData();
      formdata.append("avatar", this.merchant.avatar.file);

      try {
        this.merchant.avatar.editing = true;
        const response = await this.$axios.post(
          "/api/users/v1/merchants/upload/",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.$auth.setUser(response.data.data);
        this.merchant.avatar.editing = false;
        this.$toast.success(response.data.msg);
      } catch (error) {
        this.merchant.avatar.error = error.response.data.msg;
        this.merchant.avatar.editing = false;
        this.$toast.error(error.response.data.msg);
      }
    },
    async saveBanner() {
      const formdata = new FormData();
      formdata.append("storeBanner", this.merchant.storeBanner.file);

      try {
        this.merchant.storeBanner.editing = true;
        const response = await this.$axios.post(
          "/api/users/v1/customers/upload/",
          formdata,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.$auth.setUser(response.data.data);
        this.merchant.storeBanner.editing = false;
        this.$toast.success(response.data.msg);
      } catch (error) {
        this.merchant.storeBanner.error = error.response.data.msg;
        this.merchant.storeBanner.editing = false;
        this.$toast.error(error.response.data.msg);
      }
    },
    async fetchBanks() {
      const instance = this.$axios.create({
        baseURL: 'https://api.paystack.co',
        timeout: 10000,
        headers: {'Authorization': 'Bearer sk_test_55ceccf870fc585f49df71a6decd01ff457c583c'}
      })

      try {
        const response = await instance.get('/bank', {
          params: { country: 'nigeria', currency: "NGN" }
        })

        this.banks = response.data.data
        return 
      } catch(error) {
        console.log(error)
        // this.error = error.response.data.message || null
      }
    },
    setEditing() {
      this.merchant.password.editing = true;
    },
    cancelPasswordEdit() {
      (this.merchant.password.editing = false),
        (this.merchant.password.current = ""),
        (this.merchant.password.new = ""),
        (this.merchant.password.confirm = ""),
        (this.merchant.password.error = null),
        (this.merchant.password.matchError = null),
        (this.merchant.password.editing = false);
    },
    async savePassword() {
      this.merchant.password.loading = true;
      const { new: password, current, confirm } = this.merchant.password;
      if (!confirm || password !== confirm) {
        this.merchant.password.matchError =
          "The new password and confirm password must match.";
        return;
      }

      try {
        const response = await this.$axios.put(
          "/api/users/v1/auth/merchant/change-password",
          {
            oldPassword: current,
            newPassword: password,
          }
        );

        (this.merchant.password.current = ""),
          (this.merchant.password.new = ""),
          (this.merchant.password.confirm = ""),
          (this.merchant.password.editing = false);
        this.$toast.success(response.data.msg);
      } catch (error) {
        this.merchant.password.error = error.response.data.msg;
        this.$toast.error(error.response.data.msg);
      }
    },
  },
  }
</script>
