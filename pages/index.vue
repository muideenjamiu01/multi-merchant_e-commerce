<template>
    <div class="z-0 px-12 bg-slate-200 pb-[920px] md:pb-36 md:min-h-screen">
      <Carousel class="hidden md:block"/>
      <div class="flex flex-col-reverse md:w-full md:flex md:flex-row md:mt-16"> 
      
        <main class="flex flex-col w-full pt-[20px] md:pt-0 md:w-3/4 md:justify-between md:mr-5 md:pr-5"> 
          <div class="flex flex-col w-full md:mb-5 md:flex-row">
            <LandingFashion name="fashion"/>
            <LandingFashion name="phones" />
            <LandingFashion name="computing" />
          </div>
          
          <div class="flex flex-col h-420 w-full pb-5 md:flex-row">
            <LandingFashion name="gaming" />
            <LandingFashion name="home" />
            <LandingFashion name="electronics" />
          </div>

        </main>

      <aside class="flex flex-col pt-6 text-center pl-4 hidden md:justify-between md:block md:w-1/4 md:pt-0">
        <div v-if="$auth.loggedIn"  class="border p-6 bg-white rounded">
          <h1 >Welcome {{$auth.user.firstName}}</h1>
            <app-button @click="logout" variant='contained' color='error' class="mt-4" uppercase fullWidth>
              Sign out
            </app-button>
        </div>
        <div v-else class="border p-6 bg-white rounded">
          <h1>Sign in for the best experience </h1>
            <app-button to="/auth/login" variant='contained' color='primary' class="mt-4" uppercase fullWidth>
              Sign In
            </app-button>
        </div>
         
          <div class="flex flex-col items-center bg-pink-200 h-96 my-5 py-6 px-6 rounded">
            <h1 class="my-1">
              Delivered to your doorstep wherever you are in Nigeria
            </h1>
            <img
              class="my-5 w-60 h-64"
              src="../assets/images/test-images/people.png"
              alt=""
            />
          </div>

          <div class="bg-indigo-200 h-[260px] mt-5 pt-[20px] pb-[30px] rounded">
            <h1 class="mb-[46.4px]">Easy Returns</h1>
            <img
              class="mx-[auto]"
              src="../assets/images/test-images/box.png"
              alt="cardboard boxes"
            />
          </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingPage",
  head: {
    title: "YouStore",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "the Best Online Shop in Africa",
      },
    ],
    script: [
      {
        hid: "tailwind-elements",
        src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
        defer: true,
      },
    ],
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      // this.$router.push("/auth/login");
      this.$toast.show('Successfully Signed Out')

    },
  },
};
</script>

<style scoped>
.cascade {
  position: relative;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
}

.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  text-align: center;
}

.overlay-font {
  width: 50%;
}

.cascade:hover .overlay {
  opacity: 1;
}
</style>
