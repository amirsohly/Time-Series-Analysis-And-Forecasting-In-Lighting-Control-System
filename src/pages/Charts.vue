<template>
  <div class="show">
    <!-- <canvas id="forcastChart" width="200" height="100"></canvas> -->
    <div>
      <hr />
      <br />
      <h2>Status Predicted Results</h2>
      <ChartLine :label="labels" :chart-data="data"> </ChartLine>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ChartLine from "@/components/Visuals/ChartLine";

export default {
  components: {
    ChartLine,
  },
  data() {
    return {
      labels: [],
      data:[],
      forcast_data: [],
    };
  },
  async created() {
    const { data } = await axios.get("http://127.0.0.1:8000/forcast_data");
    this.forcast_data = data;

    for (var i = 0; i < 48; i++) {
      this.labels.push(data[i].Date_Time.replace("T", " ").replace("Z", ""));
      this.data.push(data[i].Status);
    }

    console.log(this.labels);
    console.log(this.data);
  },
};
</script>

<style scoped>

.show {
  padding: 10px;
  margin-right: 50px;
  margin-left: 50px;
}
</style>