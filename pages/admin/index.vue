<template>
  <div class="px-4 py-8">
    <div class="md:flex">
      <!-- <side-nav merchant>
        <ContentsMerchantProfileCard /> 
      </side-nav> -->
      <main class="sm:ml-72 sm:w-[calc(100%_-_288px)] my-4">
        <div
          class="w-full grid  xs:grid-cols-4 md:grid-rows-none gap-x-3"
        >
          <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
            <p class="font-medium text-base">Customers</p>
            <span class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold">25,130</span>
            <div class="flex justify-between items-center mt-2 font-normal text-sm">
              <p>This month</p>
              <p>+3042</p>
            </div>
          </div>
          <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
            <p class="font-medium text-base">Merchants</p>
            <span class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold">25,130</span>
            <div class="flex justify-between items-center mt-2 font-normal text-sm">
              <p>This month</p>
              <p>+3042</p>
            </div>
          </div>
          <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
            <p class="font-medium text-base">Products</p>
            <span class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold">25,130</span>
            <div class="flex justify-between items-center mt-2 font-normal text-sm">
              <p>This month</p>
              <p>+3042</p>
            </div>
          </div>
          <div class="mt-4 md:mt-0 rounded shadow-lg p-2">
            <p class="font-medium text-base">Customers</p>
            <span class="flex justify-center text-blue-400 mt-2 text-3xl font-semibold">25,130</span>
            <div class="flex justify-between items-center mt-2 font-normal text-sm">
              <p>This month</p>
              <p>+3042</p>
            </div>
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

<div class="xs:flex gap-12 mt-4 items-center">
	<div class="md:w-1/3">
		<div class="rounded-full h-40 w-40 bg-primary-gray"></div>
	</div>
	<div class="md:w-2/3"> 
		<admin-activities/>
	</div>

</div>
      </main>
    </div>
  </div>
</template>

<script>
import DashboardChart from "~/components/DashboardChart.vue";
import AdminActivities from "~/components/contents/AdminActivities";

export default {
//   layout: "merchant",
  //   middleware: "auth-merchant",
  components: {
    DashboardChart,
	AdminActivities
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

<style></style>
