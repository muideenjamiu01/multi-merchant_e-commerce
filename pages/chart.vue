<template>
  <div class="container mx-auto">
    <h1>vue chart</h1>
    <div class="chart-div">
      <DashboardChart
        :chartData="chartData"
        :options="chartOptions"
        class="line-chart"
      />
    </div>
  </div>
</template>

<script>
import DashboardChart from "~/components/DashboardChart.vue";
export default {
  components: { DashboardChart },
    data() {
      return {
        chartData: {
          labels: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
			"12",
			"13",
			"15",
			"16",
			"17",
			"18",
			"19",
			"20",
			"21",
			"22",
			"23",
			"24",
			"25",
			"26",
			"27",
			"28",
			"29",
			"30",
			"31"

          ],
          datasets: [
            {
  			  label: "this week",
  			  
  			//   label:[ "this week","this month", "this quater", "this year"],
  			  borderColor: "green",
  			  borderWidth:2,
  			  pontBackgroundColor:"red",
  			  pointRadius:5,
  			  pointHoverRadius:8,
  			  pointHoverBorderColor:"blue",
  			  fill:false,
  			  data: [0, 300, 600, 900, 1200, 1500],
  		  }
          ],
        },
        chartOptions: {
          maintainAspectRatio: false,
          responsive:true,
  		tooltips: {
  			backgroundColor:"gray",
  			titleFontColor:"#fff",
  			bodyFontColor: "#red",
  			position:"nearest",
  			mode:"nearest",
  			intersects:0,
  			// bodySpacing:4,
  			// xpadding:20,

  		}
        },
      };
    },
};
</script>

<style>
/* .line-chart {
  width: 60vw;
  height: 40;
} */
</style>
