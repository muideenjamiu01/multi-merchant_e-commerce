<template>
  <div v-show="value">
     <div 
      class=" fixed md:w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="outline-none shadow-lg  bg-white w-6/12 md:max-w-6/12 mx-auto rounded-xl md:shadow-lg z-50 overflow-y-auto"
      >
        <div class="py-2 px-2 md:py-4 text-left md:px-6">
          
          <div class="flex justify-between items-center">
          </div>
		<p class="text-xs md:text-2xl font-bold text-primary-blue">Add New Address</p>
          
          <div class="md:my-5 md:mr-5 md:ml-5 flex justify-center">
            <form class="w-full">
              <div class="">
                <div class="">
                  <label for="names" class="text-md text-gray-600 hidden md:block"
                    >Address</label
                  >
                </div>
                <div class="">
                  <input
                    type="text"
                    id="address"
                    autocomplete="off"
                    name="address"
					rows="3"
                    class="p-2 md:p-6 w-full  outline-none border-primary-blue md:mb-5 mb-2 rounded-md"
                    placeholder="Street Name/Building/Apartment No./Floor"
                  />
                </div>
              </div>
            </form>
          </div>
        
          <div class="flex justify-end">
            <app-button
			size="small"
			color="primary"
          variant="outline"
             
              @click="close"
            >
              Cancel
            </app-button>
            <app-button
			size="small"
			color="primary"
          variant="contained"
			type="submit"
              
              @click="saveNewAddress"
            >
              Save
            </app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    value: {
      required: true,
    },
	
  },
  methods:{
		saveNewAddress(){
			this.push()
		console.log('new address')
	},
    close() {
      this.$emit("input", !this.value);
    },
	}
};
</script>

<style lang="scss" scoped></style>
