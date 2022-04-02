<template>
  <div class="px-4 py-8">
    <div class="md:flex">
      <side-nav merchant>
        <ContentsMerchantProfileCard />
      </side-nav>
      <main class="sm:ml-72 sm:w-[calc(100%_-_288px)] my-4">
        <div
          class="w-full grid grid-rows-4 md:grid-cols-3 md:grid-rows-none gap-x-3"
        >
          <div class="p-2 bg-green-100 rounded mt-4 md:mt-0">
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
          <div class="p-2 bg-primary-gold-light rounded mt-4 md:mt-0">
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
              <span class="text-lg font-medium">₦1890</span>
              <span class="font-normal text-xs text-primary-gold"
                >+122 this month</span
              >
            </div>
            <span class="font-medium text-sm flex justify-center items-center"
              >Earned</span
            >
          </div>
          <div class="p-2 bg-primary-purple-light rounded mt-4 md:mt-0">
            <div class="flex items-center gap-2">
              <div>
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.62L10 0L7.19 6.62L0 7.24L5.45 11.97L3.82 19L10 15.27Z"
                    fill="#DA30B5"
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

        <div class="mt-8 md:mt-10">
          <div class="chart-div">
            <DashboardChart
              :chart-data="chartData"
              :options="chartOptions"
              class="line-chart"
            />
          </div>
        </div>

        <!-- <div class="mt-10 bg-primary-peach p-2">
          <span>
            <h1 class="font-normal text-2xl mb-4">Notifications</h1>
          </span>
          <div>
            <div class="overflow-x-auto rounded-lg overflow-y-auto">
              <table class="w-full table-auto">
                <thead class="">
                  <tr class="text-left border-b">
                    <th
                      class="border-gray-200 px-4 py-2 text-gray-600 font-bold tracking-wider text-xs"
                    >
                      Order ID
                    </th>
                    <th
                      class="border-gray-200 px-4 py-2 text-gray-600 font-bold tracking-wider text-xs"
                    />
                    <th
                      class="border-gray-200 px-4 py-2 text-gray-600 font-bold tracking-wider text-xs"
                    >
                      Price
                    </th>
                    <th
                      class="border-gray-200 px-4 py-2 text-gray-600 font-bold tracking-wider text-xs"
                    >
                      Date
                    </th>
                    <th
                      class="border-gray-200 px-2 py-2 text-gray-600 font-bold tracking-wider text-xs"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody class="pt-8">
                  <tr class="text-left border-b border-gray-300 pb-4">
                    <td class="font-normal text-sm px-4 py-2">1585297524</td>
                    <td class="px-4 py-2">
                      <div class="flex gap-4 pt-4">
                        <div class="w-24 h-24 bg-gray-200 overflow-hidden">
                          <img />
                        </div>
                        <div class="flex flex-col">
                          <div>
                            <span class="text-sm font-medium">
                              Women's Los Angeles California Long Sleeve
                              Sweatshirt Oversized
                            </span>
                          </div>
                          <div class="text-sm font-normal">size:small</div>
                          <div class="text-sm font-normal">color:Brown</div>
                          <div class="text-sm font-normal">Quantity:1</div>
                        </div>
                      </div>
                    </td>
                    <td class="font-normal text-sm text-center px-4 py-2">
                      14483.00
                    </td>
                    <td class="font-normal text-sm px-4 py-2">12/01/2022</td>
                    <td class="font-normal text-sm px-4 py-2 text-red-600">
                      Awaiting <br />
                      Drop off
                    </td>
                  </tr>
                  <tr class="text-left border-b border-gray-300 pb-4">
                    <td class="font-normal text-sm px-4 py-2">1585297524</td>
                    <td class="px-4 py-2">
                      <div class="flex gap-4 pt-4">
                        <div class="w-24 h-24 bg-gray-200 overflow-hidden">
                          <img />
                        </div>
                        <div class="flex flex-col">
                          <div>
                            <span class="text-sm font-medium">
                              Women's Los Angeles California Long Sleeve
                              Sweatshirt Oversized
                            </span>
                          </div>
                          <div class="text-sm font-normal">size:small</div>
                          <div class="text-sm font-normal">color:Brown</div>
                          <div class="text-sm font-normal">Quantity:1</div>
                        </div>
                      </div>
                    </td>
                    <td class="font-normal text-sm text-center px-4 py-2">
                      14483.00
                    </td>
                    <td class="font-normal text-sm px-4 py-2">12/01/2022</td>
                    <td class="font-normal text-sm px-4 py-2 text-red-600">
                      Returned
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> -->
      </main>
    </div>
  </div>
</template>

<script>
import DashboardChart from "~/components/DashboardChart.vue";

export default {
  layout: "merchant",
  middleware: "auth-merchant",
  components: {
    DashboardChart,
  },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          
          {
            label: "Orders",
            borderColor: "#1EB62D",
            borderWidth: 1,
            pointBackgroundColor: "white",
            pointRadius: 2,
            pointHoverRadius: 3,
            pointHoverBorderColor: "#46B2C8",
            backgroundColor: "#e8f8ea",
            data: [1000, 6500, 91, 32, 42, 53, 60, 65, 70],
          },
          {
            label: "Earned",
            borderColor: "#ABA519",
            borderWidth: 1,
            pointBackgroundColor: "white",
            pointRadius: 2,
            pointHoverRadius: 3,
            pointHoverBorderColor: "#46B2C8",
            backgroundColor: "#f8f6da",
            data: [
              500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500,
              5500, 6000, 6500,
            ],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: "gray",
          titleFontColor: "#fff",
          bodyFontColor: "#red",
          position: "nearest",
          mode: "nearest",
          intersects: 0,
          // bodySpacing:4,
          // xpadding:20,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
