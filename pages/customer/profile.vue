<template>
    <div>
      <side-nav class="fixed top-0 left-0 w-60 h-full overflow-x-hidden text-center p-4 hidden md:block mt-14 bg-primary-100">
        <ContentsCustomerProfileCard />
      </side-nav>
      <main class="md:ml-60 py-8 w-auto">
        <h1 class="text-2xl font-medium text-black">Profile</h1>
        <form @submit.prevent="handleSubmit">
            <div class="flex justify-between items-center">
              <div class="mt-4 flex flex-col border-b w-full">
                <div id="editField"><label id="para">Your Name</label></div>
                <div>
                  <input
                    type="text"
                    class="mt-4 outline-0"
                    v-model.trim="profile.name"
                    ref="input"
                  />
                </div>
              </div>

              <app-button
                @click="edit"
                color="secondary"
                size="small"
                variant="outlined"
              >
                Edit
              </app-button>
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
            
            <div>
				<div  @click="selectImage" class="w-32 h-32 rounded-full object-cover bg-gray-200">
              <img
			  	  :style="{ 'background-image': `url(${previewImage})` }"
				 class="w-32 h-32 rounded-full object-cover bg-gray-200 outline-nione"
                  
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
                @click="saveProfile"
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
                  v-model.trim="profile.email"
				  disabled
                />
              </div>

               
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="mt-4 flex flex-col border-b w-full">
              <label>Phone</label>
              <input
                type="text"
                class="mt-4 outline-0"
                v-model.trim="profile.phone"
				ref="phone"
              />
            </div>

            <app-button @click="edit" color="secondary" size="small" variant="outlined">
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
                  v-model.trim="profile.address"
                />
              </div>

              <app-button color="secondary" size="small" variant="outlined">
                Edit
              </app-button>
              <!-- <AppButton buttonText=""  color="outlinegray" size="sm" rounded />  -->
            </div>
          </div>
        </form>

      </main>
    </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      previewImage: null,

      profile: {
        name: `${this.$auth.user.firstName} ${this.$auth.user.lastName}`,
        email: this.$auth.user.email,
        phone: this.$auth.user.phone,
        address: "27 mathew street,yaba lagos",
      },
      user: [],
    };
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
      let input = this.$refs.fileInput
        let file = input.files
		if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
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
