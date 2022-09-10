<template>
  <div>
    <md-table v-model="forcast_data" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Date Time">{{ item.Date_Time.replace('T', ' ').replace('Z', '') }}</md-table-cell>
        <md-table-cell md-label="Status">{{ item.Status }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      forcast_data: [
        
      ],
    };
  },
  methods: {
    getForcastData() {
      console.log();
      axios.get("http://127.0.0.1:8000/forcast_data", {}).then((response) => {
        this.forcast_data = response.data;
      });
    },
  },
  mounted() {
    this.getForcastData();
  },
};
</script>
