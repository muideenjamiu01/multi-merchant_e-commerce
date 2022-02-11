<template>
  <div class="z-0 px-4">
    <div
      id="carouselExampleCrossfade"
      class="w-full carousel slide carousel-fade relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        />
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="cascade carousel-item active float-left w-full">
          <img
            src="../assets/images/test-images/landing-page-image.png"
            class="block w-full"
            alt="Wild Landscape"
          >
          <div class="overlay h-full font-bold text-6xl">
            <div class="overlay-font">
              Quality Products at the Best Prices
            </div>
          </div>
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="../assets/images/test-images/landing-page-image2.jpg"
            class="block w-full h-auto"
            alt="Camera"
          >
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="../assets/images/test-images/landing-page-image3.jpg"
            class="block w-full"
            alt="Exotic Fruits"
          >
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCrossfade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- grid section -->
    <div class="flex   w-full   ">
      <!-- grid section-->

          <!-- grid section -->
      <div class="flex w-full my-7"> <!-- grid section-->
      
        <main class=" w-full w-3/4 h-full mr-0 md:mr-5 md:pr-5"> <!-- main grid contains 2 rows -->

          <div class="flex flex-col md:flex-row w-full mt-5 mb-5 font-bold">  <!-- main grid top row contains 3 colums with 4 boxes inside-->

        <div class="flex flex-col md:flex-row w-full mt-5 mb-5 font-bold">
          <!-- main grid top row contains 3 colums with 4 boxes inside-->

                <h1 >PHONES & TABLETS</h1>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/phones/phones1.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/phones/phones2.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/phones/phones3.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/phones/phones4.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="text-primary-blue pb-2">Shop now</h3>

            <h1>Phones & Tablets</h1>
            <div class="flex w-full">
              <div class="mb-3 mr-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/phones/phones1.jpg"
                  alt="fashion"
                >
              </div>
              <div class="mb-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/phones/phones2.jpg"
                  alt="fashion"
                >
              </div>
            </div>
          
             <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4"> <!-- card 2-->

                <h1>COMPUTING</h1>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/computing/computing1.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/computing/computing2.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/computing/computing3.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/computing/computing4.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="text-primary-blue pb-2">Shop now</h3>

            </div>
              
               <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4"> <!-- card 3-->

                <h1>GAMING</h1>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/gaming/gaming1.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/gaming/gaming2.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/gaming/gaming3.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/gaming/gaming4.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="text-primary-blue pb-2">Shop now</h3>

          <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4">
            <!-- card 2-->

            <h1>COMPUTING</h1>
            <div class="flex w-full">
              <div class="mb-3 mr-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/computing/computing1.jpg"
                  alt="fashion"
                >
              </div>
              <div class="mb-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/computing/computing2.jpg"
                  alt="fashion"
                >
              </div>
            </div>
            <div class="flex w-full">
              <div class="mb-3 mr-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/computing/computing3.jpg"
                  alt="fashion"
                >
              </div>
              <div class="mb-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/computing/computing4.jpg"
                  alt="fashion"
                >
              </div>
            </div>
            <h3 class="">
              Shop now
            </h3>
          </div>
          
          <div class="flex flex-col md:flex-row w-full mt-5 mb-5 font-bold">  <!-- main grid top row contains 3 colums with 4 boxes inside-->
            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4"> <!-- card 1-->

                <h1>FASHION</h1>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3 hover:border-4">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion/fashion1.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto hover:border-4"
                      src="../assets/images/test-images/fashion/fashion2.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full px-2">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto hover:border-4"
                      src="../assets/images/test-images/fashion/fashion3.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto hover:border-4"
                      src="../assets/images/test-images/fashion/fashion4.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="text-primary-blue pb-2">Shop now</h3>

            <h1>FASHION</h1>
            <div class="flex w-full">
              <div class="mb-3 mr-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/fashion/fashion1.jpg"
                  alt="fashion"
                >
              </div>
              <div class="mb-3">
                <img
                  class="w-auto mx-auto h-auto hover:border"
                  src="../assets/images/test-images/fashion/fashion2.jpg"
                  alt="fashion"
                >
              </div>
            </div>
          
            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4"> <!-- card 1-->
                  <h1>ELECTRONICS</h1>
                  <div class="flex w-full px-2">
                    <div class="mb-3 mr-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/electronics/electronics1.jpg"
                        alt="fashion"
                      />
                    </div>
                    <div class="mb-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto hover:border-4"
                        src="../assets/images/test-images/electronics/electronics2.jpg"
                        alt="fashion"
                      />
                    </div>
                  </div>
                  <div class="flex w-full px-2">
                    <div class="mb-3 mr-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/electronics/electronics3.jpg"
                        alt="fashion"
                      />
                    </div>
                    <div class="mb-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/electronics/electronics4.jpg"
                        alt="fashion"
                      />
                    </div>
                  </div>
                  <h3 class="text-primary-blue pb-2">Shop now</h3>
              </div>
              
              <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4"> <!-- card 1-->

                  <h1>HOME</h1>
                  <div class="flex w-full px-2">
                    <div class="mb-3 mr-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/home/home1.jpg"
                        alt="fashion"
                      />
                    </div>
                    <div class="mb-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/home/home2.jpg"
                        alt="home"
                      />
                    </div>
                  </div>
                  <div class="flex w-full px-2">
                    <div class="mb-3 mr-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/home/home3.jpg"
                        alt="home"
                      />
                    </div>
                    <div class="mb-3 hover:border-4">
                      <img
                        class="w-auto mx-auto h-auto"
                        src="../assets/images/test-images/home/home4.jpg"
                        alt="home"
                      />
                    </div>
                  </div>
                  <h3 class="text-primary-blue pb-2">Shop now</h3>

              </div>
            </div>
            <h3 class="">
              Shop now
            </h3>
          </div>

        </main>

        <aside class=" w-1/4 h-full text-center justify-between px-4 font-bold"> <!-- aside grid contains 3 rows -->
          <div class=" h-1/3 my-5 px-10 pb-3 border border-zinc-200 py-2">
            <h1 class="my-1 mx-5">Sign in for the best experience</h1>
            <ButtonsSignin/>
          </div>
          <div class="bg-pink-200 h-1/3 my-5 py-2">
            <h1 class="my-1 px-4">Delivered to your doorstep wherever you are in Nigeria</h1>
            <img class="my-5 px-4" src="../assets/images/test-images/people.png" alt="">
          </div>
          <div class="flex flex-col justify-center bg-indigo-200 h-1/3 px-50 my-5 py-2">
            <h1 class="my-1 mx-5">Easy Returns</h1>
            <img src="../assets/images/test-images/box.png" alt="">
          </div>

          <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5 px-4">
            <!-- card 1-->

            <h1>HOME</h1>
            <div class="flex w-full">
              <div class="mb-3 mr-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/home/home1.jpg"
                  alt="fashion"
                >
              </div>
              <div class="mb-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/home/home2.jpg"
                  alt="home"
                >
              </div>
            </div>
            <div class="flex w-full">
              <div class="mb-3 mr-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/home/home3.jpg"
                  alt="home"
                >
              </div>
              <div class="mb-3 hover:border">
                <img
                  class="w-auto mx-auto h-auto"
                  src="../assets/images/test-images/home/home4.jpg"
                  alt="home"
                >
              </div>
            </div>
            <h3 class="">
              Shop now
            </h3>
          </div>
        </div>
      </main>

      <aside class=" w-1/4 h-full text-center justify-between px-4 font-bold">
        <!-- aside grid contains 3 rows -->
        <div class=" h-1/3 my-5 px-10 pb-3 border border-zinc-200">
          <h1 class="my-1 mx-5">
            Sign in for the best experience
          </h1>
          <ButtonsSignin />
        </div>
        <div class="bg-pink-200 h-1/3 my-5">
          <h1 class="my-1 px-4">
            Delivered to your doorstep wherever you are in Nigeria
          </h1>
          <img class="my-5 px-4" src="../assets/images/test-images/people.png" alt="">
        </div>
        <div class="flex flex-col justify-center bg-indigo-200 h-1/3 px-50 my-5">
          <h1 class="my-1 mx-5">
            Easy Returns
          </h1>
          <img src="../assets/images/test-images/box.png" alt="">
        </div>
      </aside>
    </div>
  </div>
</template>

<script>

export default {

  name: 'IndexPage',
  layout: 'landing',
  head: {
    title: 'YouStore',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'the Best Online Shop in Africa'
      }
    ],
    script: [
      { hid: 'tailwind-elements', src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js', defer: true }
    ]
  }

}

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
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  width: 100%;
  transition: .5s ease;
  opacity:0;
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
