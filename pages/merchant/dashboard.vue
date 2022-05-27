<template>
  <div>
        <div
          class="w-full grid grid-rows-3 md:grid-cols-3 md:grid-rows-none md:gap-x-3 gap-y-3"
        >
          <div class="flex gap-2 p-4 justify-center bg-green-100 rounded mt-4 sm:mt-0">
            <double-check-icon></double-check-icon>
            <div class="">
              <span class="flex gap-2">
                <h1 class="text-xl font-bold mb-2">
                  {{ getOrders }}
                </h1>
                <p class="text-primary-green w-full truncate">
                  <small>+{{ getOrdersMonth }} this month</small>
                </p>
              </span>
                <h3 class="font-medium capitalize">
                  Orders Fulfilled
                </h3>
            </div>
          </div>
          <div class="flex gap-2 p-4 justify-center bg-purple-100 rounded mt-4 sm:mt-0">
            <cash-icon></cash-icon>
            <div class="">
              <span class="flex gap-2">
              <h1 class="text-xl font-bold mb-2">
                {{ (Math.floor(Math.random() * 10000) + 3000) }}
              </h1>
                <p class="text-primary-purple w-full truncate">
                  <small>+{{ Math.ceil(Math.random() * 2000) }} this month</small>
                </p>
              </span>
                <h3 class="font-medium capitalize">
                  Earned
                </h3>
            </div>
          </div>
          <div class="flex gap-2 p-4 justify-center bg-yellow-100 rounded mt-4 sm:mt-0">
            <star-icon></star-icon>
            <div class="">
              <span class="flex gap-2">
              <h1 class="text-xl font-bold mb-2">
                {{ (Math.floor(Math.random() * 10) + 1) / 2 }}
              </h1>
              </span>
                <h3 class="font-medium capitalize">
                  Average Rating
                </h3>
            </div>
          </div>
        </div>

        <div class="mt-8 sm:mt-10">
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
  </div>
</template>

<script>
import DashboardChart from "~/components/DashboardChart.vue";
import CashIcon from "@/components/svg/Cash.vue"
import StarIcon from "@/components/svg/Star.vue"
import DoubleCheckIcon from "@/components/svg/DoubleCheck.vue"

export default {
  layout: "merchant",
  middleware: "auth-merchant",
  components: {
    DashboardChart,
    CashIcon,
    StarIcon,
    DoubleCheckIcon
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
  computed: {
    getOrders() {
      return Math.ceil(Math.random() * 1000) + 100
    },
    getOrdersMonth() {
      return Math.ceil(Math.random() * 300) + 50
    }
  }
};
</script>

<style lang="scss" scoped></style>
