<template>
  <div class="z-0 px-12 bg-slate-200 pb-[920px] md:pb-36 md:min-h-screen">
    <Carousel class="hidden md:block"/>

    <!-- grid section -->
    <div class="flex flex-col-reverse md:w-full md:flex md:flex-row md:mt-16">
      <main class="flex flex-col w-full pt-[20px] md:pt-0 md:w-3/4 md:justify-between md:mr-5 md:pr-5">
        <!-- main grid contains contains top and bottom rows -->

        <div class="flex flex-col w-full md:mb-5 md:flex-row">
          <!-- main top row-->
          <LandingFashion class="mt-0"/>
          <LandingGaming/>
          <LandingFashion/>
        </div>

        <div class="flex flex-col h-420 w-full pb-5 md:flex-row">
          <!-- main bottom row-->
          <LandingFashion/>
          <LandingFashion/>
          <LandingFashion/>
        </div>
      </main>

      <aside
        class="flex flex-col pt-6 text-center pl-4 hidden md:justify-between md:block md:w-1/4 md:pt-0"
      >
        <!-- aside grid contains 3 rows -->
        <div class="h-44 border p-6 bg-white rounded">
          <h1 class="my-1 mx-5">{{message}}</h1>
          <div>
            <div class="px-4 py-4 w-full" v-if="!auth" >
                <nuxt-link to="/auth/login2">
                  <button class="bg-primary-blue py-2 text-white font-light w-full rounded-sm">
                    Sign In
                  </button>
                </nuxt-link>
            </div>
            <div class="px-4 py-4 w-full" v-if="auth" @click="logout">
                <a href="#">
                  <button class="bg-rose-400 py-2 text-white font-light w-full rounded-sm">
                    Sign Out
                  </button>
                </a>
            </div>
          </div>
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
  layout: "landing",
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
  data() {
    return {
      message:"",
      auth: false
    }
  },
  async mounted() {
    this.$nuxt.$on ('auth', auth => {this.auth = auth})
    this.$nuxt.$on ('auth', auth => console.log(auth))
    try { 
      const response = await fetch(
        "http://localhost:8000/api/user", {
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        }
      )
      const content = await response.json();
      console.log("mounted index-page", content); 
      this.message = `Welcome ${content.name.toUpperCase()}, your unique I.D. is ${content.id}`;
      this.$nuxt.$emit('auth', true)
    }
    catch(e) {
      this.message = `Sign in to get exclusive offers`;
      this.$nuxt.$emit('auth', false);
    }
  },
  methods: {
      async logout () {
        await fetch(
          'http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
          }
        );
        await this.$router.push('auth/login2')
        alert("Signed out")
      }
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
