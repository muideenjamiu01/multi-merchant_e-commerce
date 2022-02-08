<template>
  <div class="font-light py-8 px-4 text-primary-black">
    <div class="xl:flex xl:space-x-8">
      <div class="flex flex-col space-y-4">
        <div
          v-for="n in 5"
          :key="n"
          class="border-2 border-black h-14 w-14"
        ></div>
      </div>
      <div class="border-2 border-black w-full h-96 max-w-lg"></div>
      <div>
        <h1 class="text-xl">THIS IS WHERE THE NAME OF THE PRODUCT WOULD BE</h1>
        <div class="flex items-center">
          <p class="text-2xl font-bold">******</p>
          <p class="text-primary-blue-dark ml-2.5 text-sm">3209 ratings</p>
        </div>
        <div class="flex mt-6">
          <p class="font-medium text-lg">3400.00 NGN</p>
          <p class="text-primary-gray-light text-sm font-light ml-2.5">-23%</p>
        </div>

        <select
          class="focus:outline-none w-36 px-4 py-1.5 border border-gray-400 rounded"
        >
          <option value="">Select size</option>
        </select>

        <button
          class="bg-primary-blue text-white text-sm py-2 w-full rounded mt-6"
        >
          Add to cart
        </button>

        <div class="text-sm mt-4">
          <p>
            Proin eleifend est id velit hendrerit rhoncus. Mauris pulvinar quis
            libero eget blandit. Nullam vel nisl vitae nunc dapibus laoreet eu
            eu massa. Mauris vitae nisl felis.
          </p>
          <h1 class="uppercase mt-2.5">Key Features</h1>
          <ul class="px-3">
            <li>Regular fit</li>
            <li>Slip-on</li>
            <li>Synthetic upper</li>
            <li>Synthetic outsole</li>
          </ul>

          <h1 class="uppercase mt-4">Specifications</h1>
          <ul class="px-3">
            <li>SKU: AD002FS0J6PXKNAFAMZ</li>
            <li>Product Line: Adidas Official Store</li>
            <li>Model: FY5839</li>
            <li>Weight (kg): 0.6</li>
            <li>Color: Hazy green/ftwr white/hazy green</li>
            <li>Main Material: SYNTHETICS</li>
            <li>Shop Type: Jumia Mall</li>
          </ul>
        </div>
      </div>

      <div
        class="min-w-88 bg-primary-blue-light px-7 py-2.5 pb-10 font-light mt-8 xl:mt-0"
      >
        <h1 class="font-medium">Delivery and Shipping</h1>
        <p class="tex-xs mt-10">
          Free Shipping on Youstore orders above N12,000 in Lagos
        </p>

        <h1 class="mt-6">Choose your location</h1>

        <select
          class="focus:outline-none w-full px-6 py-2.5 mt-4 bg-transparent border border-gray-500 rounded"
        >
          <option value="">Lagos</option>
        </select>
        <select
          class="focus:outline-none w-full px-6 py-2.5 mt-4 bg-transparent border border-gray-500 rounded"
        >
          <option value="">Lekki - Ajah (Sangotedo)</option>
        </select>

        <div class="mt-5 space-y-5">
          <div class="flex space-x-4">
            <div class="">
              <img src="@/assets/images/icons/vehicle.svg" alt="" />
            </div>
            <div class="text-sm space-y-1">
              <h1 class="text-base leading-none">Door delivery</h1>
              <p>Shipping 450 NGN</p>
              <p>
                Ready for delivery between 13 January & 14 January when you
                order within next 2hrs 29mins
              </p>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="">
              <img src="@/assets/images/icons/station.svg" alt="" />
            </div>
            <div class="text-sm space-y-1">
              <h1 class="text-base leading-none">Pickup station</h1>
              <p>Shipping 180 NGN</p>
              <p>
                Ready for pickup between 13 January & 14 January when you order
                within next 2hrs 29mins
              </p>
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="">
              <img src="@/assets/images/icons/return.svg" alt="" />
            </div>
            <div class="text-sm space-y-1">
              <h1 class="text-base leading-none">Return policy</h1>

              <p>
                Free return within 15 days for Official Store items and 7 days
                for other eligible items.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-24 lg:flex lg:space-x-8">
      <div>
        <h1 class="text-xl mb-3">Product Description</h1>
        <p class="mb-8">
          Nam tellus eros, placerat eget quam at, gravida finibus magna. Quisque
          pellentesque efficitur ex, vitae efficitur odio dignissim sit amet.
          Nulla feugiat massa tortor, ac congue libero rutrum sit amet. Donec
          tristique nisi eget lacus efficitur, quis placerat metus consectetur.
          Donec pulvinar nisi id nulla tempor commodo. Etiam nec feugiat nunc.
          Praesent porta a elit sit amet egestas. Aliquam pulvinar varius quam
          auctor ultrices. Vivamus blandit dolor nec tortor egestas, sed
          scelerisque turpis cursus. Suspendisse sit amet tempor nisi. Sed ac
          velit sed nisi egestas ornare hendrerit eu erat. Sed sit amet lacus id
          risus eleifend commodo pellentesque non diam. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Morbi iaculis egestas
          sagittis. Nunc lacinia, elit ac cursus cursus, mi risus lacinia mi,
          quis auctor felis augue eget nisl.
        </p>

        <p>
          Nulla facilisi. Phasellus ac lacus augue. Quisque faucibus odio metus,
          a fermentum enim elementum sed. Vivamus ullamcorper rutrum dui.
          Curabitur blandit non purus a laoreet. Vivamus quis nulla in nulla
          tempus elementum. Suspendisse eget est urna. Ut eu turpis id quam
          rhoncus ultrices eget vitae justo. Nunc bibendum nulla sed luctus
          rutrum. Aenean auctor pharetra ex, in vehicula tortor dignissim quis.
          Etiam consequat pretium turpis, quis porttitor dui accumsan eget. Duis
          vulputate tortor malesuada, accumsan elit a, rhoncus eros. Aenean
          vestibulum pharetra arcu, vitae ultrices sem ullamcorper vitae.
        </p>
      </div>

      <div class="min-w-88 bg-primary-blue-light py-2.5 pb-10 font-light mt-8">
        <h1 class="font-medium px-6 py-4">Seller Information</h1>
        <div class="border-t border-gray-200"></div>
        <div class="px-6 py-4">
          <h1 class="text-primary-blue-dark">Mummy's choices store</h1>
          <p class="text-sm mt-5">
            Dealers in the best aenean sodales mattis rutrum. Duis id
            consectetur neque, eu ullam corper lorem. Aenean a nulla ullam
            corper, congue ligula ut, gravida lacus.
          </p>
          <p class="mt-4 text-sm">Customer Rating: Good</p>
          <p class="mt-2 text-sm">Order Fulfilment Rate: Excellent</p>
        </div>
      </div>
    </div>

    <div class="mt-8">
      <h1 class="font-bold">49 Comments from verified purchase</h1>
      <ContentsReviews v-for="n in 3" :key="n" />
      <NuxtLink
        :to="$route.params.product + '/reviews'"
        class="font-light text-primary-blue-dark mt-6 flex justify-end"
      >
        See all reviews
      </NuxtLink>
    </div>

    <div>
      <div class="mt-8">
        <p>People who bought this item also bought</p>
        <div class="flex gap-x-4 gap-y-6 flex-wrap mt-4">
          <ContentsProductCard v-for="card in 6" :key="card.id" />
        </div>
      </div>

      <div class="mt-8">
        <p>Recently viewed items</p>
        <div class="flex gap-x-4 gap-y-6 flex-wrap mt-4">
          <ContentsProductCard v-for="card in 6" :key="card.id" />
        </div>
      </div>
    </div>
  </div>
</template>
