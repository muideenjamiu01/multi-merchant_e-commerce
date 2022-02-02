<template >
    <div class="z-0 px-4">
      <!-- <div class="cascade ">
        <img  class="image w-auto mx-auto" src="../assets/images/landing-page-image.png" alt="shopping mall">
        <div class="overlay h-full font-bold text-6xl"> <div class="overlay-font">Quality Products at the Best Prices</div> </div>
      </div> -->

      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade relative"
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
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="cascade carousel-item active float-left w-full">
            <img
              src="../assets/images/test-images/landing-page-image.png"
              class="block w-full"
              alt="Wild Landscape"
            />
            <div class="overlay h-full font-bold text-6xl"> <div class="overlay-font">Quality Products at the Best Prices</div> </div>

          </div>
          <div class="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="flex bg-black w-full h-fit mt-5 justify-between"> <!-- grid section-->
        
        <main class="flex flex-col bg-rose-500 w-3/4 h-full mr-5 pr-5" > <!-- main grid contains 2 rows of 3 pictures each-->

          <div class="flex flex-row bg-sky-500 w-full mt-5 mb-5">  <!-- main grid top row contains 3 colums with 4 boxes inside-->

            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5"> <!-- card 1-->

                <h1>FASHION</h1>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="">Shop now</h3>

            </div>
          
            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5"> <!-- card 2-->

                <h1>FASHION</h1>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="">Shop now</h3>
                
            </div>
            
            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5"> <!-- card 3-->

                <h1>FASHION</h1>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="">Shop now</h3>
                
            </div>
          </div>

          <div class="flex flex-row bg-sky-500 w-full mt-5 mb-5">  <!-- main grid bottom row contains 3 colums with 4 boxes inside-->

            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5"> <!-- card 1-->

                <h1>FASHION</h1>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="">Shop now</h3>

            </div>
          
            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5"> <!-- card 2-->

                <h1>FASHION</h1>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="">Shop now</h3>
                
            </div>
            
            <div class="flex flex-col w-full sm:w-1/3 h-3/6 bg-white shadow-lg mr-5 mb-5"> <!-- card 3-->

                <h1>FASHION</h1>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="mb-3 mr-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                  <div class="mb-3">
                    <img
                      class="w-auto mx-auto h-auto"
                      src="../assets/images/test-images/fashion.jpg"
                      alt="fashion"
                    />
                  </div>
                </div>
                <h3 class="">Shop now</h3>
                
            </div>
          </div>

        </main>

        <aside class="flex flex-col bg-violet-500 w-1/4 h-full"> <!-- aside grid contains 3 rows -->
          <div class="bg-sky-500 h-1/4 my-5">
          <h1>Sign in for the best experience</h1>
          
          </div>
          <div class="bg-green-500 h-1/4 my-5"></div>
          <div class="bg-lime-500 h-1/4 my-5"></div>
        </aside>

      </div>

      
    </div>
</template>


<script>

  export default {
    layout: 'landing',
    name: 'IndexPage',
    head: {
      title: 'YouStore',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'the Best Online Shop in Africa'
        }
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