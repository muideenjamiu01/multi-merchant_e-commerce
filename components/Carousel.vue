<template>
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
              src="../assets/images/test-images/landing-page-image.jpg"
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
</template>