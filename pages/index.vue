<template >
    <div class="z-0 px-12">
        <!-- carousel section -->
      <div
        id="carouselExampleCrossfade"
        class="w-full carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel" >
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
            aria-label="Slide 3">
          </button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden h-96">
          <div class="cascade carousel-item active float-left w-full">
            <img
              src="../assets/images/test-images/landing-page-image.png"
              class="block w-full h-96"
              alt="Fashion"
            />
            <div class="overlay h-full font-bold text-6xl"> <div class="overlay-font">Quality Products at the Best Prices</div> </div>

          </div>
          <div class="cascade carousel-item float-left w-full">
            <img
              src="../assets/images/test-images/landing-page-image3.jpg"
              class="block w-full h-96"
              alt="Home"
            />
          </div>
          <div class="cascade carousel-item float-left w-full">
            <img
              src="../assets/images/test-images/landing-page-image2.png"
              class="block w-full h-96"
              alt="5k store"
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


          <!-- grid section -->
      <div class="flex w-full mt-16"> 
      
        <main class="flex flex-col justify-between w-3/4 h-max  md:mr-5 md:pr-5"> <!-- main grid contains contains top and bottom rows -->

          <div class="flex flex-col md:flex-row w-full mb-5 ">  <!-- main top row-->
            <LandingFashion />
            <LandingFashion />
            <LandingFashion />
          </div>
          
          <div class="flex flex-col h-420 md:flex-row w-full pb-5 ">  <!-- main bottom row-->
            <LandingFashion />
            <LandingFashion />
            <LandingFashion />
           
          </div>

        </main>

        <aside class=" flex flex-col w-1/4 h-full text-center pl-4"> <!-- aside grid contains 3 rows -->
          <div class=" h-44 border p-6 bg-white rounded">
            <h1 class="my-1 mx-5">Sign in for the best experience</h1>
            <ButtonsSignin/>
          </div>
          <div class="bg-pink-200 h-96 my-5 py-6 px-6 rounded">
            <h1 class="my-1">Delivered to your doorstep wherever you are in Nigeria</h1>
            <img class="my-5 px-4" src="../assets/images/test-images/people.png" alt="">
          </div>
          <div class="bg-indigo-200 h-60  my-5 pt-5 rounded">
            <h1 class="mb-11">Easy Returns</h1>
            <img src="../assets/images/test-images/box.png" alt="cardboard boxes">
          </div>
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