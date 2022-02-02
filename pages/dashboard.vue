<template>
  <div>
    <div class="w-full md:flex">
      <div class="md:w-1/4">
        <ContentsCustomerProfileCard />
      </div>
      <div class="md:w-3/4">
        <div class="w-full md:flex md:gap-x-4">
          <div class="p-4 bg-primary-blue-sharpen px-8 h-20 rounded">
            <div class="flex items-center gap-2">
              <div>
                <!-- <img src="@/assets/images/icons/users.svg" alt="" /> -->
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0.5C12.9283 0.5 13.8185 0.868749 14.4749 1.52513C15.1313 2.1815 15.5 3.07174 15.5 4C15.5 4.92826 15.1313 5.8185 14.4749 6.47487C13.8185 7.13125 12.9283 7.5 12 7.5C11.0717 7.5 10.1815 7.13125 9.52513 6.47487C8.86875 5.8185 8.5 4.92826 8.5 4C8.5 3.07174 8.86875 2.1815 9.52513 1.52513C10.1815 0.868749 11.0717 0.5 12 0.5ZM5 3C5.56 3 6.08 3.15 6.53 3.42C6.38 4.85 6.8 6.27 7.66 7.38C7.16 8.34 6.16 9 5 9C4.20435 9 3.44129 8.68393 2.87868 8.12132C2.31607 7.55871 2 6.79565 2 6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3ZM19 3C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6C22 6.79565 21.6839 7.55871 21.1213 8.12132C20.5587 8.68393 19.7956 9 19 9C17.84 9 16.84 8.34 16.34 7.38C17.2 6.27 17.62 4.85 17.47 3.42C17.92 3.15 18.44 3 19 3ZM5.5 13.25C5.5 11.18 8.41 9.5 12 9.5C15.59 9.5 18.5 11.18 18.5 13.25V15H5.5V13.25ZM0 15V13.5C0 12.11 1.89 10.94 4.45 10.6C3.86 11.28 3.5 12.22 3.5 13.25V15H0ZM24 15H20.5V13.25C20.5 12.22 20.14 11.28 19.55 10.6C22.11 10.94 24 12.11 24 13.5V15Z"
                    fill="#21A2DA"
                  />
                </svg>
              </div>
              <span class="text-lg font-medium">251 </span>
              <span class="font-normal text-xs text-blue-"
                >+112 this month</span
              >
            </div>
            <span class="font-medium text-sm flex justify-center items-center"
              >Visitors</span
            >
          </div>
          <div class="p-4 bg-green-100 px-8 h-20 rounded">
            <div class="flex items-center gap-2">
              <div>
                <img src="@/assets/images/icons/validate.svg" alt="" />
              </div>
              <span class="text-lg font-medium">91</span>
              <span class="font-normal text-xs text-primary-green"
                >+49 this month</span
              >
            </div>
            <span class="font-medium text-sm flex justify-center items-center"
              >Orders Fulfilled</span
            >
          </div>
          <div class="p-4 bg-primary-gold-light px-8 h-20 rounded">
            <div class="flex items-center gap-2">
              <div>
                <img src="@/assets/images/icons/currency.svg" alt="" />
              </div>
              <span class="text-lg font-medium">189000</span>
              <span class="font-normal text-xs text-primary-gold"
                >+12200 this month</span
              >
            </div>
            <span class="font-medium text-sm flex justify-center items-center"
              >Earned</span
            >
          </div>
          <div class="p-4 bg-primary-purple-light px-8 h-20 rounded">
            <div class="flex items-center gap-2">
              <div>
                <img src="@/assets/images/icons/star.svg" alt="" />
              </div>
              <span class="text-lg font-medium">4.3</span>
              <span class="font-normal text-xs text-primary-purple"
                >+37 this month</span
              >
            </div>
            <span class="font-medium text-sm flex justify-center items-center"
              >Average Rating</span
            >
          </div>
        </div>
        <div
          class="mt-8 md:flex gap-4 justify-end items-center text-xs font-normal"
        >
          <span class="bg-primary-blue-light p-3 rounded">this week</span>
          <span class="bg-primary-blue-light p-3 rounded">this month</span>
          <span class="bg-primary-blue-light p-3 rounded">this quarter</span>
          <span class="bg-primary-blue-light p-3 rounded">this year</span>
        </div>
        <div class="mt-10 bg-red-500">III</div>
        <!-- component -->
        <div class="bg-white rounded-md w-full">
          <div class="">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div
                class="inline-block min-w-full shadow rounded-lg overflow-hidden"
              >
                <table class="w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        products
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Created at
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        QRT
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Vera Carpenter
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jan 21, 2020
                        </p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">43</p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Activo</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Blake Bowman
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jan 01, 2020
                        </p>
                      </td>

                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">77</p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Activo</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Dana Moore
                            </p>
                          </div>
                        </div>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">Editor</p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jan 10, 2020
                        </p>
                      </td>

                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <p class="text-gray-900 whitespace-no-wrap">64</p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                      >
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Suspended</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-5 py-5 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              Alonzo Cox
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          Jan 18, 2020
                        </p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">70</p>
                      </td>
                      <td class="px-5 py-5 bg-white text-sm">
                        <span
                          class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">Inactive</span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
