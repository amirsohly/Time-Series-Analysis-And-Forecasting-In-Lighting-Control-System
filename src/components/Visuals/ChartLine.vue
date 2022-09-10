<template>
  <canvas id="myChart" width="900px" height="250px"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
  },
  async mounted() {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: this.label,
        datasets: [
          {
              label: 'Status',
            data: this.chartData,
            borderColor: "rgba(245, 229, 27, 1)",
            backgroundColor: "rgba(255, 236, 139,0.2)",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>