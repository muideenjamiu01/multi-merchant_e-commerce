<template>
  <div class="px-4 py-8">
    <div class="md:flex">
      <main class="w-full">
        <div class="w-full grid xs:grid-cols-4 md:grid-rows-none gap-x-3">
          <admin-statistic-card cardText="Customers" />
          <admin-statistic-card cardText="Merchants" />
          <admin-statistic-card cardText="Products" />
          <admin-statistic-card cardText="Sales" />
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

        <div class="xs:flex gap-12 mt-20 justify-between">
          <div class="md:w-2/5 xs:flex justify-center items-center">
            <div class="rounded shadow-lg p-4">
			  <Adminchart/>
			  
            </div>
          </div>
          <div class="md:w-3/5">
            <admin-activities />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import DashboardChart from "~/components/DashboardChart.vue";
import AdminActivities from "~/components/contents/AdminActivities";
import Adminchart from "~/components/adminchart";
import AdminStatisticCard from "~/components/contents/adminStatisticCard.vue";



export default {
  layout: "admin",
  //   middleware: "auth-merchant",
  components: {
    AdminStatisticCard,
    DashboardChart,    
    AdminActivities,
    Adminchart
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
