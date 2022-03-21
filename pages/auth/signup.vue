<template>
  <div
    class="
      relative
      w-full
      h-full
      after:fixed
      after:h-[70vh]
      after:-z-10
      after:top-0
      after:-skew-y-12
      after:origin-top-left
      after:bg-primary-400
      after:w-full
    "
  >
    <div
      class="
        min-h-[100vh]
        border-box
        flex
        w-full
        flex-row flex-wrap
        items-center
        justify-center
      "
    >
      <div
        class="
          box-border
          m-0
          flex-0
          max-w-full
          flex-row
          grow
          basis-0
          flex
          justify-center
        "
      >
        <div
          class="
            w-full
            px-6
            py-10
            sm:m-8
            bg-white
            shadow
            sm:px-10 sm:py-12
            max-w-lg
          "
        >
          <div class="h-10">
            <nuxt-link to="/" class="mr-6">
              <brand-logo class="!w-full !h-full" />
            </nuxt-link>
          </div>

          <p class="text-center font-medium my-6">Create your account</p>

          <div
            v-if="error"
            class="
              flex
              relative
              items-center
              text-error-900
              my-4
              rounded
              bg-error-50
              w-full
            "
          >
            <span class="text-center flex-grow p-2">{{ error }}</span>
            <icon-button
              @click="closeErrorMessage"
              size="small"
              class="hover:bg-error-100 rounded-full"
            >
              <cancel-icon></cancel-icon>
            </icon-button>
          </div>

          <ValidationObserver slim>
            <form @submit.prevent="createUser" class="w-full">
              <ValidationProvider
                v-for="field in fields"
                :key="field.name"
                v-slot="{ errors }"
                :name="field.name.split('_').join(' ')"
                :rules="field.rules"
                slim
              >
                <div class="mb-4">
                  <label class="mb-2 capitalize" :for="field.name">{{
                    field.name.split("_").join(" ")
                  }}</label>
                  <input
                    class="
                      w-full
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
                    "
                    v-model="field.value"
                    :type="field.type"
                    :id="field.name"
                  />
                  <span class="text-xs text-error-800">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>

              <app-button
                type="submit"
                class="mt-2"
                variant="contained"
                color="primary"
                size="large"
                :disabled="loading"
                fullWidth
                uppercase
              >
                {{ loading ? "Loading" : "Signup" }}
                <loading-spinners
                  v-if="loading"
                  size="small"
                  color="white"
                  class="mx-4"
                ></loading-spinners>
              </app-button>
            </form>
          </ValidationObserver>

          <p class="text-sm my-4">
            Already have an account?<span class="text-primary-500 text-sm ml-2"
              ><nuxt-link to="/auth/login">Sign in</nuxt-link></span
            >
          </p>
          <p class="text-sm mt-4">
            By clicking the sign up button, you agree to our<span
              class="text-sm text-primary-500 ml-2"
            >
              <nuxt-link to="#">conditions of use</nuxt-link>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full.esm";
import CancelIcon from "@/components/svg/Cancel.vue";
import BrandLogo from "@/components/svg/Logo";

export default {
  layout: "empty",
  components: {
    ValidationObserver,
    ValidationProvider,
    "cancel-icon": CancelIcon,
    "brand-logo": BrandLogo,
  },
  data() {
    return {
      loading: false,
      error: null,
      fields: {
        firstName: {
          value: "",
          name: "first_name",
          rules: "required||alpha",
          type: "text",
        },
        lastName: {
          value: "",
          name: "last_name",
          rules: "required||alpha",
          type: "text",
        },
        email: {
          value: "",
          name: "email",
          rules: "required||email",
          type: "email",
        },
        phoneNo: {
          value: "",
          name: "phone",
          rules: "required||digits:11",
          type: "text",
        },
        address: {
          value: "",
          name: "address",
          rules: "required",
          type: "text",
        },
        password: {
          value: "",
          name: "password",
          rules: "min:6||required",
          type: "password",
        },
      },
    };
  },
  methods: {
    async createUser() {
      this.loading = true;
      const values = {};
      Object.entries(this.fields).forEach((field) => {
        values[field[0]] = field[1].value;
      });

      try {
        await this.$axios.post("/api/users/v1/customers/", values, {
          params: {
            user_key: "4fbc6c112a19f295d08dfc27f36333b6",
          },
        });

        const { email, password } = this.fields;

        await this.$auth.loginWith("local", {
          data: { email: email.value, password: password.value },
          params: {
            userType: "customer",
            user_key: "4fbc6c112a19f295d08dfc27f36333b6",
          },
        });
        
        (this.fields.firstName.value = ""),
        (this.fields.lastName.value = ""),
        (this.fields.email.value = ""),
        (this.fields.address.value = ""),
        (this.fields.phoneNo.value = ""),
        (this.fields.password.value = "");

        this.$toast.success("Registration Succesful!!");
      } catch (err) {
        this.error = err.response.data.msg;
      } finally {
        this.loading = false;
      }
    },
    closeErrorMessage() {
      this.error = null;
    },
  },
};
</script>
