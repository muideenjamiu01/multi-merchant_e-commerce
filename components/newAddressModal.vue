<template>
  <div v-show="value">
     <div 
      class=" fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
      style="background: rgba(0, 0, 0, 0.7)"
    >
      <div
        class="border border-blue-500 shadow-lg  bg-white w-6/12 md:max-w-6/12 mx-auto rounded-xl md:shadow-lg z-50 overflow-y-auto"
      >
        <div class=" py-4 text-left px-6">
          
          <div class="flex justify-between items-center pb-3">
          </div>
		<p class="text-2xl font-bold text-gray-500">Add New Address</p>
          
          <div class="my-5 mr-5 ml-5 flex justify-center">
            <form class="w-full">
              <div class="">
                <div class="">
                  <label for="names" class="text-md text-gray-600"
                    >Address</label
                  >
                </div>
                <div class="">
                  <textarea
                    type="text"
                    id="address"
                    autocomplete="off"
                    name="address"
					rows="3"
                    class=" p-6 w-full  border-gray-300 mb-5 rounded-md"
                    placeholder="Street Name/Building/Apartment No./Floor"
                  />
                </div>
              </div>
            </form>
          </div>
        
          <div class="flex justify-end pt-2 space-x-14">
            <button
              class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
              @click="close"
            >
              Cancel
            </button>
            <button
			type="submit"
              class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
              @click="saveNewAddress"
            >
              Save
            </button>
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
		console.log('new address')
	},
    close() {
      this.$emit("input", !this.value);
    },
	}
};
</script>

<style lang="scss" scoped></style>
