<template>
  <div class="px-4 py-8 flex">
      <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="md:ml-72 md:w-[calc(100%_-_288px)]">
      <form>
        <p class="font-medium mb-5">
          Personal Information
        </p>
        <form class="mt-6" @submit.prevent="updateMerchant">
          <ValidationObserver slim>
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
                  class="
                    border
                    text-sm
                    focus:outline-primary-blue
                    block
                    w-full
                    p-2.5
                  "
                  v-model.trim="sellerAccountDetails.storeName"
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
                  type="text"
                  class="
                    border border-gray-200
                    text-sm
                    focus:outline-primary-blue
                    duration-200
                    block
                    w-full
                    p-2.5
                  "
                  v-model.trim="sellerAccountDetails.accountName"
                />
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
                  v-model.trim="sellerAccountDetails.email"
                  id="email"
                  type="email"
                  class="
                    border border-gray-200
                    text-sm
                    focus:outline-primary-blue
                    block
                    w-full
                    p-2.5
                  "
                />
                <small class="mt-2 text-gray-400 block">
                  Your account will be linked to this email address and we will
                  use it to send all our communications.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>

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
                  type="text"
                  class="
                    border border-gray-200
                    text-sm
                    focus:outline-primary-blue
                    block
                    w-full
                    p-2.5
                  "
                  v-model.trim="sellerAccountDetails.phoneNo"
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
                  type="text"
                  class="
                    border border-gray-200
                    text-sm
                    focus:outline-primary-blue
                    duration-200
                    block
                    w-full
                    p-2.5
                  "
                  v-model.trim="sellerAccountDetails.address"
                />
                <small class="mt-2 text-gray-400 block">
                  The location of your business.
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
                  class="
                    border border-gray-200
                    text-sm
                    focus:outline-primary-blue
                    block
                    w-full
                    p-2.5
                  "
                  v-model.trim="sellerAccountDetails.password"
                />
                <small class="mt-2 text-sm text-gray-400">
                  At least 6 characters.
                </small>
                <span class="text-xs text-error-800 block">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            <div class="mx-auto xs:max-w-xs mt-8">
              <app-button
                type="submit"
                uppercase
                variant="contained"
                size="large"
                :disabled="loading"
                fullWidth
              >
                {{ loading ? "Submitting" : "Get Started" }}
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
              required
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
              required
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
              required
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
              required
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
              required
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
  layout: 'merchant',
  middleware: 'auth-merchant',
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

      const file = e.target.files.item(0);

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
    async saveAvatar() {
      const formdata = new FormData();
      formdata.append("avatar", this.avatar.file);

      try {
        this.avatar.editing = true;
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
        this.avatar.editing = false;
        this.$toast.success(response.data.msg);
      } catch (error) {
        this.error = error.response.data.msg;
        this.avatar.editing = false;
        this.$toast.error(error.response.data.msg);
      }
    },
  }
</script>
