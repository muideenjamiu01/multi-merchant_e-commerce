<template>
  <div>
    <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import PieChart from "~/components/PieChart";
export default {
  name: "App",
  components: {
    PieChart
  },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 5
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Fashion", "Phones","Computing", "Gaming", "Homes", "Electronics"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF","#46B2C8","FFEFEF",],
            data: [15, 20, 15, 15, 15, 20]
          }
        ]
      }
    };
  }
};
</script>

<style>

</style>
