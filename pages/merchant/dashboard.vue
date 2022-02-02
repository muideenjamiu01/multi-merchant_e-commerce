<template>
  <div>
    <div class="w-full md:flex">
      <div class="md:w-1/4">
        <ContentsMerchantProfileCard />
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
                <!-- <img src="@/assets/images/icons/validate.svg" alt="" /> -->
                <svg
                  width="24"
                  height="14"
                  viewBox="0 0 24 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.410156 8.40996L6.00016 14L7.41016 12.58L1.83016 6.99996L0.410156 8.40996ZM22.2402 0.579956L11.6602 11.17L7.50016 6.99996L6.07016 8.40996L11.6602 14L23.6602 1.99996L22.2402 0.579956ZM18.0002 1.99996L16.5902 0.579956L10.2402 6.92996L11.6602 8.33996L18.0002 1.99996Z"
                    fill="#1EB62D"
                  />
                </svg>
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
                <!-- <img src="@/assets/images/icons/currency.svg" alt="" /> -->
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 0H22V12H4V0ZM13 3C13.7956 3 14.5587 3.31607 15.1213 3.87868C15.6839 4.44129 16 5.20435 16 6C16 6.79565 15.6839 7.55871 15.1213 8.12132C14.5587 8.68393 13.7956 9 13 9C12.2044 9 11.4413 8.68393 10.8787 8.12132C10.3161 7.55871 10 6.79565 10 6C10 5.20435 10.3161 4.44129 10.8787 3.87868C11.4413 3.31607 12.2044 3 13 3ZM8 2C8 2.53043 7.78929 3.03914 7.41421 3.41421C7.03914 3.78929 6.53043 4 6 4V8C6.53043 8 7.03914 8.21071 7.41421 8.58579C7.78929 8.96086 8 9.46957 8 10H18C18 9.46957 18.2107 8.96086 18.5858 8.58579C18.9609 8.21071 19.4696 8 20 8V4C19.4696 4 18.9609 3.78929 18.5858 3.41421C18.2107 3.03914 18 2.53043 18 2H8ZM0 4H2V14H18V16H0V4Z"
                    fill="#ABA519"
                  />
                </svg>
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
                <!-- <img src="@/assets/images/icons/star.svg" alt="" /> -->
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 13.39L6.24 15.66L7.23 11.38L3.91 8.5L8.29 8.13L10 4.09L11.71 8.13L16.09 8.5L12.77 11.38L13.76 15.66L10 13.39ZM20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.45 11.97L3.82 19L10 15.27L16.18 19L14.54 11.97L20 7.24Z"
                    fill="#262626"
                  />
                </svg>
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
